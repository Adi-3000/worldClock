import React, { useState, useMemo } from 'react';
import { 
  Clock, 
  Calendar, 
  Copy, 
  Check, 
  ArrowRightLeft, 
  Sun, 
  Moon, 
  Sparkles, 
  Share2, 
  Briefcase, 
  Coffee, 
  BedDouble,
  ChevronDown,
  ArrowRight
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { CITIES_DATA } from '../data/cities';
import { 
  convertISTtoTarget, 
  convertTargetToIST, 
  getTimeInfo, 
  IST_TIMEZONE, 
  getMinutesOffsetFromIST, 
  formatOffsetLabel 
} from '../utils/timeUtils';

export function TimeConverter({ 
  activeCityIds, 
  currentTime, 
  is24Hour,
  preselectedCity 
}) {
  // Converter direction: 'IST_TO_TARGET' or 'TARGET_TO_IST'
  const [direction, setDirection] = useState('IST_TO_TARGET');

  // Selected Target City
  const [selectedTargetCityId, setSelectedTargetCityId] = useState(() => {
    return preselectedCity?.id || 'new-york-us';
  });

  // Time in minutes (0 to 1439)
  const currentIstMinutes = currentTime.getHours() * 60 + currentTime.getMinutes();
  const [minutesOfDay, setMinutesOfDay] = useState(currentIstMinutes);

  // Selected date
  const [selectedDate, setSelectedDate] = useState(() => {
    const d = new Date();
    return d.toISOString().split('T')[0];
  });

  const [copied, setCopied] = useState(false);

  // Parse base date
  const baseDate = useMemo(() => {
    const [y, m, d] = selectedDate.split('-').map(Number);
    return new Date(y, m - 1, d);
  }, [selectedDate]);

  // Find target city object
  const targetCity = useMemo(() => {
    return CITIES_DATA.find(c => c.id === selectedTargetCityId) || CITIES_DATA.find(c => c.id === 'new-york-us');
  }, [selectedTargetCityId]);

  // Derived hours & minutes input
  const inputHours = Math.floor(minutesOfDay / 60);
  const inputMinutes = minutesOfDay % 60;

  // Format string for manual HTML time input (HH:MM in 24h format)
  const timeInputValue = `${String(inputHours).padStart(2, '0')}:${String(inputMinutes).padStart(2, '0')}`;

  // Handle manual time input change
  const handleTimeInputChange = (e) => {
    const val = e.target.value;
    if (!val) return;
    const [h, m] = val.split(':').map(Number);
    if (!isNaN(h) && !isNaN(m)) {
      setMinutesOfDay(h * 60 + m);
    }
  };

  // Compute conversion based on direction
  const { istComputedTime, targetComputedTime, istEquivalentHours, istEquivalentMinutes } = useMemo(() => {
    if (direction === 'IST_TO_TARGET') {
      const istTime = convertISTtoTarget(inputHours, inputMinutes, baseDate, IST_TIMEZONE, is24Hour);
      const tgtTime = convertISTtoTarget(inputHours, inputMinutes, baseDate, targetCity.timezone, is24Hour);
      return {
        istComputedTime: istTime,
        targetComputedTime: tgtTime,
        istEquivalentHours: inputHours,
        istEquivalentMinutes: inputMinutes
      };
    } else {
      // Input is Target City time -> Convert to IST
      const istTime = convertTargetToIST(inputHours, inputMinutes, baseDate, targetCity.timezone, is24Hour);
      const tgtTime = getTimeInfo(
        new Date(baseDate.getFullYear(), baseDate.getMonth(), baseDate.getDate(), inputHours, inputMinutes),
        targetCity.timezone,
        is24Hour
      );
      return {
        istComputedTime: istTime,
        targetComputedTime: tgtTime,
        istEquivalentHours: istTime.hour24,
        istEquivalentMinutes: istTime.minuteNum
      };
    }
  }, [direction, inputHours, inputMinutes, baseDate, targetCity, is24Hour]);

  // All active cities for multi-city breakdown
  const targetCitiesList = useMemo(() => {
    return activeCityIds
      .map(id => CITIES_DATA.find(c => c.id === id))
      .filter(Boolean);
  }, [activeCityIds]);

  // Quick preset setters
  const handleSetPreset = (h, m) => {
    setMinutesOfDay(h * 60 + m);
  };

  const handleSetNow = () => {
    const now = new Date();
    setMinutesOfDay(now.getHours() * 60 + now.getMinutes());
    setSelectedDate(now.toISOString().split('T')[0]);
  };

  // Swap direction
  const handleSwapDirection = () => {
    setDirection(prev => prev === 'IST_TO_TARGET' ? 'TARGET_TO_IST' : 'IST_TO_TARGET');
  };

  // Copy schedule summary
  const handleCopySchedule = () => {
    let summary = `🗓️ Time Conversion Schedule (${istComputedTime.fullDateStr})\n`;
    summary += `🇮🇳 Indian Standard Time (IST): ${istComputedTime.timeString}\n`;
    summary += `${targetCity.flag} ${targetCity.city} (${targetCity.country}): ${targetComputedTime.timeString} [${targetComputedTime.tzName}]\n`;
    summary += `------------------------------------\n`;

    targetCitiesList.forEach(city => {
      const conv = convertISTtoTarget(istEquivalentHours, istEquivalentMinutes, baseDate, city.timezone, is24Hour);
      summary += `${city.flag} ${city.city}: ${conv.timeString} (${conv.dateStr})\n`;
    });

    navigator.clipboard.writeText(summary).then(() => {
      setCopied(true);
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 }
      });
      setTimeout(() => setCopied(false), 2500);
    });
  };

  // Business Badge renderer
  const renderBusinessBadge = (status) => {
    switch (status) {
      case 'work':
        return (
          <span className="business-tag business-work" title="Standard Business Hours (9am - 6pm)">
            <Briefcase size={12} /> Work
          </span>
        );
      case 'leisure':
        return (
          <span className="business-tag business-leisure" title="Awake / Leisure Hours (7-9am, 6-10pm)">
            <Coffee size={12} /> Leisure
          </span>
        );
      default:
        return (
          <span className="business-tag business-sleep" title="Night / Sleep Hours (10pm - 7am)">
            <BedDouble size={12} /> Sleep
          </span>
        );
    }
  };

  return (
    <div className="converter-container">
      {copied && (
        <div className="toast-notice">
          <Check size={18} /> Schedule copied to clipboard!
        </div>
      )}

      {/* Main Interactive Converter Box */}
      <div className="converter-ist-control">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.75rem' }}>
          <div>
            <div className="ist-title-badge">
              <Sparkles size={12} color="#f97316" />
              <span>
                {direction === 'IST_TO_TARGET' 
                  ? 'Convert IST ➔ Any City' 
                  : `Convert ${targetCity.city} ➔ IST`}
              </span>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '0.25rem' }}>
              <div className="ist-time-digits">
                <span>
                  {direction === 'IST_TO_TARGET' ? istComputedTime.timeString : targetComputedTime.timeString}
                </span>
              </div>
            </div>

            <div className="ist-date-label">
              <Calendar size={14} />
              <span>{direction === 'IST_TO_TARGET' ? istComputedTime.dateStr : targetComputedTime.dateStr}</span>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'flex-end' }}>
            <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
              {/* Direct Time Input */}
              <div className="time-manual-input-box" title="Type or pick exact time">
                <Clock size={16} color="var(--accent-ist)" />
                <input
                  type="time"
                  value={timeInputValue}
                  onChange={handleTimeInputChange}
                  className="time-manual-input"
                  id="direct-time-input"
                />
              </div>

              {/* Date Picker */}
              <input 
                type="date" 
                value={selectedDate}
                onChange={e => setSelectedDate(e.target.value)}
                className="toggle-pill-btn"
                style={{ background: 'var(--bg-secondary)', color: 'var(--text-primary)', border: '1px solid var(--border-highlight)' }}
                id="converter-date-picker"
              />
            </div>

            <button 
              className="toggle-pill-btn active"
              onClick={handleCopySchedule}
              id="copy-schedule-btn"
            >
              {copied ? <Check size={14} /> : <Copy size={14} />}
              <span>{copied ? 'Copied!' : 'Copy Summary'}</span>
            </button>
          </div>
        </div>

        {/* 24-Hour Slider */}
        <div className="slider-container">
          <input
            type="range"
            min="0"
            max="1439"
            step="15"
            value={minutesOfDay}
            onChange={e => setMinutesOfDay(parseInt(e.target.value, 10))}
            className="scrubber-slider"
            id="ist-time-slider"
          />
          <div className="slider-ticks">
            <span>12 AM</span>
            <span>4 AM</span>
            <span>8 AM</span>
            <span>12 PM</span>
            <span>4 PM</span>
            <span>8 PM</span>
            <span>11:45 PM</span>
          </div>
        </div>

        {/* Quick Presets */}
        <div className="quick-time-buttons">
          <button className="quick-btn" onClick={handleSetNow}>
            ⚡ Right Now
          </button>
          <button className="quick-btn" onClick={() => handleSetPreset(9, 0)}>
            🌅 9:00 AM (Morning)
          </button>
          <button className="quick-btn" onClick={() => handleSetPreset(14, 0)}>
            ☀️ 2:00 PM (Afternoon)
          </button>
          <button className="quick-btn" onClick={() => handleSetPreset(18, 30)}>
            🌆 6:30 PM (Evening)
          </button>
          <button className="quick-btn" onClick={() => handleSetPreset(21, 30)}>
            🌙 9:30 PM (US East Morning)
          </button>
        </div>
      </div>

      {/* Focus Pair Conversion Card */}
      <div className="focus-conversion-card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span>Target City Selector</span>
          </div>

          {/* City Selector Dropdown */}
          <select
            className="city-select-dropdown"
            value={selectedTargetCityId}
            onChange={e => setSelectedTargetCityId(e.target.value)}
            id="target-city-dropdown"
          >
            {CITIES_DATA.filter(c => !c.isIST).map(city => (
              <option key={city.id} value={city.id}>
                {city.flag} {city.city} ({city.country})
              </option>
            ))}
          </select>
        </div>

        {/* Side-by-Side Dual Display */}
        <div className="conversion-hero-row">
          {/* Side 1: IST */}
          <div className="conversion-side">
            <div style={{ fontSize: '0.8rem', color: 'var(--accent-ist)', fontWeight: 700, marginBottom: '0.2rem' }}>
              🇮🇳 INDIAN STANDARD TIME
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.75rem', fontWeight: 800, color: '#ffffff' }}>
              {istComputedTime.timeString}
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginTop: '0.15rem' }}>
              {istComputedTime.dateStr} • {renderBusinessBadge(istComputedTime.businessStatus)}
            </div>
          </div>

          {/* Swap Direction Button */}
          <button 
            className="conversion-swap-btn"
            onClick={handleSwapDirection}
            title="Swap Conversion Direction"
            id="swap-direction-btn"
          >
            <ArrowRightLeft size={18} />
          </button>

          {/* Side 2: Target City */}
          <div className="conversion-side" style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '0.8rem', color: 'var(--accent-blue)', fontWeight: 700, marginBottom: '0.2rem' }}>
              {targetCity.flag} {targetCity.city.toUpperCase()}
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.75rem', fontWeight: 800, color: '#ffffff' }}>
              {targetComputedTime.timeString}
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginTop: '0.15rem', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '0.35rem' }}>
              <span>{targetComputedTime.dateStr}</span>
              {renderBusinessBadge(targetComputedTime.businessStatus)}
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '0.65rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.78rem', color: 'var(--text-tertiary)' }}>
          <span>Difference: {formatOffsetLabel(getMinutesOffsetFromIST(baseDate, targetCity.timezone), baseDate, targetCity.timezone)}</span>
          <span>Timezone: {targetCity.timezone}</span>
        </div>
      </div>

      {/* Multi-City Synchronized Breakdown */}
      <div className="converted-list">
        <div className="section-header">
          <div className="section-title">
            <Clock size={18} color="#f97316" />
            <span>All Active Cities at {istComputedTime.timeString} IST</span>
          </div>
        </div>

        {targetCitiesList.map(city => {
          const conv = convertISTtoTarget(istEquivalentHours, istEquivalentMinutes, baseDate, city.timezone, is24Hour);
          const offsetMins = getMinutesOffsetFromIST(baseDate, city.timezone);
          const offsetLabel = formatOffsetLabel(offsetMins, baseDate, city.timezone);

          return (
            <div 
              key={city.id} 
              className={`converted-row ${city.id === targetCity.id ? 'is-ist' : ''}`}
              onClick={() => setSelectedTargetCityId(city.id)}
              style={{ cursor: 'pointer' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ fontSize: '1.5rem' }}>{city.flag}</span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '1.05rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <span>{city.city}</span>
                    {city.id === targetCity.id && (
                      <span style={{ fontSize: '0.65rem', padding: '0.1rem 0.4rem', background: 'var(--accent-indigo)', borderRadius: 'var(--radius-full)', color: '#fff' }}>Selected</span>
                    )}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-tertiary)' }}>
                    {city.country} • {offsetLabel}
                  </div>
                </div>
              </div>

              <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.25rem' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  {conv.timeString}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <span style={{ fontSize: '0.72rem', color: 'var(--text-secondary)' }}>
                    {conv.dateStr}
                  </span>
                  {renderBusinessBadge(conv.businessStatus)}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
