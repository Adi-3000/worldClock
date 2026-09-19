import React, { useState, useMemo } from 'react';
import { 
  Clock, 
  Calendar, 
  Copy, 
  Check, 
  ArrowRightLeft, 
  Sparkles, 
  Briefcase, 
  Coffee, 
  BedDouble,
  Search,
  ChevronDown
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
import { CitySelectModal } from './CitySelectModal';
import { TimePickerControl } from './TimePickerControl';

export function TimeConverter({ 
  activeCityIds, 
  currentTime, 
  is24Hour,
  preselectedCity 
}) {
  // Converter direction: 'IST_TO_TARGET' or 'TARGET_TO_IST'
  const [direction, setDirection] = useState('IST_TO_TARGET');

  // Selected Target Country
  const [selectedTargetCity, setSelectedTargetCity] = useState(() => {
    if (preselectedCity) return preselectedCity;
    return CITIES_DATA.find(c => c.id === 'usa-eastern') || CITIES_DATA[1];
  });

  // Modal for selecting target country
  const [isCityModalOpen, setIsCityModalOpen] = useState(false);

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

  const inputHours = Math.floor(minutesOfDay / 60);
  const inputMinutes = minutesOfDay % 60;

  // Compute conversion based on direction
  const { istComputedTime, targetComputedTime, istEquivalentHours, istEquivalentMinutes } = useMemo(() => {
    if (direction === 'IST_TO_TARGET') {
      const istTime = convertISTtoTarget(inputHours, inputMinutes, baseDate, IST_TIMEZONE, is24Hour);
      const tgtTime = convertISTtoTarget(inputHours, inputMinutes, baseDate, selectedTargetCity.timezone, is24Hour);
      return {
        istComputedTime: istTime,
        targetComputedTime: tgtTime,
        istEquivalentHours: inputHours,
        istEquivalentMinutes: inputMinutes
      };
    } else {
      // Input is Target Country time -> Convert to IST
      const istTime = convertTargetToIST(inputHours, inputMinutes, baseDate, selectedTargetCity.timezone, is24Hour);
      const tgtTime = getTimeInfo(
        new Date(baseDate.getFullYear(), baseDate.getMonth(), baseDate.getDate(), inputHours, inputMinutes),
        selectedTargetCity.timezone,
        is24Hour
      );
      return {
        istComputedTime: istTime,
        targetComputedTime: tgtTime,
        istEquivalentHours: istTime.hour24,
        istEquivalentMinutes: istTime.minuteNum
      };
    }
  }, [direction, inputHours, inputMinutes, baseDate, selectedTargetCity, is24Hour]);

  // All active countries for breakdown
  const targetCitiesList = useMemo(() => {
    const active = activeCityIds
      .map(id => CITIES_DATA.find(c => c.id === id))
      .filter(Boolean);

    // Make sure the selected target country is present in list
    if (!active.some(c => c.id === selectedTargetCity.id)) {
      return [selectedTargetCity, ...active];
    }
    return active;
  }, [activeCityIds, selectedTargetCity]);

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
    summary += `${selectedTargetCity.flag} ${selectedTargetCity.displayName}: ${targetComputedTime.timeString} [${targetComputedTime.tzName}]\n`;
    summary += `------------------------------------\n`;

    targetCitiesList.forEach(city => {
      const conv = convertISTtoTarget(istEquivalentHours, istEquivalentMinutes, baseDate, city.timezone, is24Hour);
      summary += `${city.flag} ${city.displayName}: ${conv.timeString} (${conv.dateStr})\n`;
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

      {/* Target Country Search & Selection Header Banner */}
      <div className="city-search-trigger-card" onClick={() => setIsCityModalOpen(true)}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span style={{ fontSize: '2.2rem' }}>{selectedTargetCity.flag}</span>
          <div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.05em' }}>
              Target Country To Convert
            </div>
            <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span>{selectedTargetCity.displayName}</span>
            </div>
          </div>
        </div>

        <button className="change-city-pill" id="change-target-country-btn">
          <Search size={14} />
          <span>Search Any Country</span>
          <ChevronDown size={14} />
        </button>
      </div>

      {/* Dual Converter Hero Card */}
      <div className="focus-conversion-card">
        <div className="conversion-hero-row">
          {/* Side 1: IST */}
          <div className="conversion-side">
            <div style={{ fontSize: '0.78rem', color: 'var(--accent-ist)', fontWeight: 800, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
              🇮🇳 India (IST)
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(1.6rem, 5vw, 2.1rem)', fontWeight: 800, color: 'var(--text-primary)', margin: '0.15rem 0' }}>
              {istComputedTime.timeString}
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.35rem', flexWrap: 'wrap' }}>
              <span>{istComputedTime.dateStr}</span>
              <span style={{ color: 'var(--accent-ist)', fontWeight: 700, background: 'var(--bg-glass)', padding: '0.05rem 0.35rem', borderRadius: '4px' }}>
                {istComputedTime.tzBadge}
              </span>
              {renderBusinessBadge(istComputedTime.businessStatus)}
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

          {/* Side 2: Target Country */}
          <div className="conversion-side" style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '0.78rem', color: 'var(--accent-blue)', fontWeight: 800, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
              {selectedTargetCity.flag} {selectedTargetCity.displayName.toUpperCase()}
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(1.6rem, 5vw, 2.1rem)', fontWeight: 800, color: 'var(--text-primary)', margin: '0.15rem 0' }}>
              {targetComputedTime.timeString}
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '0.35rem', flexWrap: 'wrap' }}>
              {renderBusinessBadge(targetComputedTime.businessStatus)}
              <span style={{ color: 'var(--accent-blue)', fontWeight: 700, background: 'var(--bg-glass)', padding: '0.05rem 0.35rem', borderRadius: '4px' }}>
                {targetComputedTime.tzBadge}
              </span>
              <span>{targetComputedTime.dateStr}</span>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '0.65rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.78rem', color: 'var(--text-tertiary)', flexWrap: 'wrap', gap: '0.4rem' }}>
          <span>Difference: {formatOffsetLabel(getMinutesOffsetFromIST(baseDate, selectedTargetCity.timezone), baseDate, selectedTargetCity.timezone)}</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.74rem' }}>{selectedTargetCity.timezone}</span>
        </div>
      </div>

      {/* Advanced Time Picker Control */}
      <div className="converter-ist-control">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
          <div className="ist-title-badge">
            <Sparkles size={12} color="#f97316" />
            <span>
              {direction === 'IST_TO_TARGET' 
                ? 'Enter / Adjust IST Time' 
                : `Enter / Adjust ${selectedTargetCity.displayName} Time`}
            </span>
          </div>

          <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
            <button className="quick-btn" onClick={handleSetNow} id="set-now-btn">
              ⚡ Now
            </button>
            <button 
              className="quick-btn" 
              onClick={handleCopySchedule}
              style={{ background: copied ? 'rgba(34, 197, 94, 0.2)' : undefined, color: copied ? 'var(--accent-emerald)' : undefined }}
              id="copy-schedule-btn"
            >
              {copied ? <Check size={12} /> : <Copy size={12} />}
              <span>{copied ? 'Copied' : 'Share'}</span>
            </button>
          </div>
        </div>

        {/* Date Selector Row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
          <Calendar size={15} color="var(--text-secondary)" />
          <input
            type="date"
            className="date-input-field"
            value={selectedDate}
            onChange={e => setSelectedDate(e.target.value)}
            id="converter-date-picker"
          />
        </div>

        {/* Full Feature Interactive Time Controller */}
        <TimePickerControl
          minutesOfDay={minutesOfDay}
          onChangeMinutes={setMinutesOfDay}
          is24Hour={is24Hour}
        />

        {/* Quick Meeting & Shift Presets */}
        <div className="quick-presets-row">
          <button className="quick-btn" onClick={() => handleSetPreset(9, 0)}>
            🌅 9:00 AM (IST Standup)
          </button>
          <button className="quick-btn" onClick={() => handleSetPreset(14, 30)}>
            ☀️ 2:30 PM (EU Sync)
          </button>
          <button className="quick-btn" onClick={() => handleSetPreset(18, 0)}>
            🌆 6:00 PM (IST Wrap)
          </button>
          <button className="quick-btn" onClick={() => handleSetPreset(21, 30)}>
            🌙 9:30 PM (US East Open)
          </button>
        </div>
      </div>

      {/* Multi-Country Synchronized Breakdown */}
      <div className="converted-list">
        <div className="section-header">
          <div className="section-title">
            <Clock size={18} color="#f97316" />
            <span>All Added Countries at {istComputedTime.timeString} IST</span>
          </div>
        </div>

        {targetCitiesList.map(city => {
          const conv = convertISTtoTarget(istEquivalentHours, istEquivalentMinutes, baseDate, city.timezone, is24Hour);
          const offsetMins = getMinutesOffsetFromIST(baseDate, city.timezone);
          const offsetLabel = formatOffsetLabel(offsetMins, baseDate, city.timezone);

          return (
            <div 
              key={city.id} 
              className={`converted-row ${city.id === selectedTargetCity.id ? 'is-ist' : ''}`}
              onClick={() => setSelectedTargetCity(city)}
              style={{ cursor: 'pointer' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ fontSize: '1.6rem' }}>{city.flag}</span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '1.02rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <span>{city.displayName}</span>
                    {city.id === selectedTargetCity.id && (
                      <span style={{ fontSize: '0.65rem', padding: '0.1rem 0.4rem', background: 'var(--accent-indigo)', borderRadius: 'var(--radius-full)', color: '#fff' }}>Target</span>
                    )}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-tertiary)', display: 'flex', alignItems: 'center', gap: '0.4rem', flexWrap: 'wrap' }}>
                    <span>{city.continent} • {offsetLabel}</span>
                    <span style={{ color: 'var(--accent-blue)', fontWeight: 700, background: 'var(--bg-glass)', padding: '0.05rem 0.35rem', borderRadius: '4px', fontSize: '0.72rem' }}>
                      {conv.tzBadge}
                    </span>
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

      {/* Global Country Search Modal */}
      <CitySelectModal
        isOpen={isCityModalOpen}
        onClose={() => setIsCityModalOpen(false)}
        selectedCityId={selectedTargetCity.id}
        onSelectCity={setSelectedTargetCity}
        currentTime={currentTime}
        title="Search & Select Target Country"
      />
    </div>
  );
}
