import React from 'react';
import { Trash2, Sun, Moon, Sunrise, Sunset, ArrowRightLeft } from 'lucide-react';
import { getTimeInfo, getMinutesOffsetFromIST, formatOffsetLabel } from '../utils/timeUtils';

export function ClockCard({ 
  city, 
  currentTime, 
  is24Hour, 
  showAnalog, 
  onRemove,
  onConvertWithCity 
}) {
  const timeInfo = getTimeInfo(currentTime, city.timezone, is24Hour);
  const offsetMins = getMinutesOffsetFromIST(currentTime, city.timezone);
  const offsetLabel = formatOffsetLabel(offsetMins, currentTime, city.timezone);

  // Phase icon and label
  const getPhaseData = (phase) => {
    switch (phase) {
      case 'dawn':
        return { icon: <Sunrise size={13} className="phase-dawn-text" />, label: 'Dawn', cls: 'phase-dawn' };
      case 'day':
        return { icon: <Sun size={13} className="phase-day-text" />, label: 'Day', cls: 'phase-day' };
      case 'dusk':
        return { icon: <Sunset size={13} className="phase-dusk-text" />, label: 'Sunset', cls: 'phase-dusk' };
      default:
        return { icon: <Moon size={13} className="phase-night-text" />, label: 'Night', cls: 'phase-night' };
    }
  };

  const phaseData = getPhaseData(timeInfo.phase);

  // Analog clock hand degrees
  const secondDeg = (timeInfo.secondNum / 60) * 360;
  const minuteDeg = (timeInfo.minuteNum / 60) * 360 + (timeInfo.secondNum / 60) * 6;
  const hourDeg = ((timeInfo.hour24 % 12) / 12) * 360 + (timeInfo.minuteNum / 60) * 30;

  return (
    <div className={`clock-card ${phaseData.cls}`}>
      <div className="card-top">
        <div className="city-info">
          <div className="city-name-row">
            <span className="country-flag">{city.flag}</span>
            <div>
              <h3 className="city-name">{city.city}</h3>
              <p className="country-name">{city.country}</p>
            </div>
          </div>
        </div>

        <div className="phase-indicator">
          {phaseData.icon}
          <span>{phaseData.label}</span>
        </div>
      </div>

      <div className="card-center">
        <div>
          <div className="digital-display">
            <span>{timeInfo.hour}:{timeInfo.minute}</span>
            {!is24Hour && <span className="digital-ampm">{timeInfo.dayPeriod}</span>}
          </div>
          <div className="tz-abbr">{timeInfo.dateStr} • {timeInfo.tzName}</div>
        </div>

        {showAnalog && (
          <div className="analog-mini-clock" title={`Analog: ${city.city}`}>
            <div className="analog-center-pin"></div>
            <div 
              className="analog-hand hour" 
              style={{ transform: `translateX(-50%) rotate(${hourDeg}deg)` }}
            ></div>
            <div 
              className="analog-hand minute" 
              style={{ transform: `translateX(-50%) rotate(${minuteDeg}deg)` }}
            ></div>
            <div 
              className="analog-hand second" 
              style={{ transform: `translateX(-50%) rotate(${secondDeg}deg)` }}
            ></div>
          </div>
        )}
      </div>

      <div className="card-bottom">
        <span className="offset-badge">
          {offsetLabel}
        </span>

        <div className="card-actions">
          {onConvertWithCity && (
            <button 
              className="card-btn-icon" 
              onClick={() => onConvertWithCity(city)}
              title={`Convert IST with ${city.city}`}
            >
              <ArrowRightLeft size={15} />
            </button>
          )}

          {onRemove && (
            <button 
              className="card-btn-icon" 
              onClick={() => onRemove(city.id)}
              title={`Remove ${city.city}`}
            >
              <Trash2 size={15} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
