import React from 'react';
import { Trash2, Sun, Moon, Sunrise, Sunset, ArrowRightLeft, Pin, ArrowUp, ArrowDown, Globe, GripVertical } from 'lucide-react';
import { getTimeInfo, getMinutesOffsetFromIST, formatOffsetLabel } from '../utils/timeUtils';

export function ClockCard({ 
  city, 
  currentTime, 
  is24Hour, 
  showAnalog, 
  isPinned,
  onTogglePin,
  onMoveUp,
  onMoveDown,
  isFirst,
  isLast,
  onRemove,
  onConvertWithCity,
  isDragging,
  isDragOver,
  onDragStart,
  onDragOver,
  onDrop,
  onDragEnd,
  onTouchStart,
  onTouchMove,
  onTouchEnd
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

  const displayName = city.displayName || city.country;

  return (
    <div 
      className={`clock-card ${phaseData.cls} ${isPinned ? 'is-pinned-card' : ''} ${isDragging ? 'is-dragging' : ''} ${isDragOver ? 'is-drag-over' : ''}`}
      data-city-id={city.id}
      draggable
      onDragStart={(e) => onDragStart && onDragStart(city.id, e)}
      onDragOver={(e) => onDragOver && onDragOver(city.id, e)}
      onDrop={(e) => onDrop && onDrop(city.id, e)}
      onDragEnd={onDragEnd}
    >
      <div className="card-top">
        <div className="city-info">
          <div className="city-name-row">
            <div 
              className="drag-handle" 
              title="Drag to rearrange"
              onTouchStart={(e) => onTouchStart && onTouchStart(e, city.id)}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <GripVertical size={16} />
            </div>
            <span className="country-flag">{city.flag}</span>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <h3 className="city-name">{displayName}</h3>
                {isPinned && (
                  <span className="pin-tag" title="Pinned to top">
                    <Pin size={10} fill="#f59e0b" /> Pinned
                  </span>
                )}
              </div>
              {city.region ? (
                <p className="country-name">{city.region}</p>
              ) : (
                <p className="country-name" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem' }}>{city.timezone}</p>
              )}
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          {/* Pin Button */}
          {onTogglePin && (
            <button
              className={`card-pin-btn ${isPinned ? 'active' : ''}`}
              onClick={() => onTogglePin(city.id)}
              title={isPinned ? "Unpin country" : "Pin country to top"}
            >
              <Pin size={14} fill={isPinned ? "#f59e0b" : "none"} />
            </button>
          )}

          <div className="phase-indicator">
            {phaseData.icon}
            <span>{phaseData.label}</span>
          </div>
        </div>
      </div>

      <div className="card-center">
        <div>
          <div className="digital-display">
            <span>{timeInfo.hour}:{timeInfo.minute}</span>
            {!is24Hour && <span className="digital-ampm">{timeInfo.dayPeriod}</span>}
          </div>
          <div className="tz-abbr">
            <span>{timeInfo.dateStr}</span> • <span style={{ color: 'var(--accent-blue)', fontWeight: 700 }}>{timeInfo.tzBadge}</span>
          </div>
        </div>

        {showAnalog && (
          <div className="analog-mini-clock" title={`Analog: ${displayName}`}>
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
          {/* Reorder Up / Down */}
          {onMoveUp && !isFirst && (
            <button
              className="card-btn-icon"
              onClick={() => onMoveUp(city.id)}
              title="Move Up"
            >
              <ArrowUp size={14} />
            </button>
          )}

          {onMoveDown && !isLast && (
            <button
              className="card-btn-icon"
              onClick={() => onMoveDown(city.id)}
              title="Move Down"
            >
              <ArrowDown size={14} />
            </button>
          )}

          {/* Convert Jump */}
          {onConvertWithCity && (
            <button 
              className="card-btn-icon" 
              onClick={() => onConvertWithCity(city)}
              title={`Convert IST with ${displayName}`}
            >
              <ArrowRightLeft size={14} />
            </button>
          )}

          {/* Delete */}
          {onRemove && (
            <button 
              className="card-btn-icon" 
              onClick={() => onRemove(city.id)}
              title={`Remove ${displayName}`}
            >
              <Trash2 size={14} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
