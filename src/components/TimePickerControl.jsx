import React from 'react';
import { ChevronUp, ChevronDown, Clock, Plus, Minus, Sparkles } from 'lucide-react';

export function TimePickerControl({
  minutesOfDay,
  onChangeMinutes,
  is24Hour = false
}) {
  const totalMinutes = ((minutesOfDay % 1440) + 1440) % 1440;
  const rawHour24 = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  // 12-hour calculations
  const isPM = rawHour24 >= 12;
  const hour12 = rawHour24 % 12 === 0 ? 12 : rawHour24 % 12;

  // Handlers
  const handleHourStep = (delta) => {
    let newMinutes = totalMinutes + delta * 60;
    onChangeMinutes(((newMinutes % 1440) + 1440) % 1440);
  };

  const handleMinuteStep = (delta) => {
    let newMinutes = totalMinutes + delta;
    onChangeMinutes(((newMinutes % 1440) + 1440) % 1440);
  };

  const handleToggleAMPM = () => {
    if (isPM) {
      onChangeMinutes(totalMinutes - 12 * 60);
    } else {
      onChangeMinutes(totalMinutes + 12 * 60);
    }
  };

  const handleHourInputChange = (e) => {
    const val = parseInt(e.target.value, 10);
    if (isNaN(val)) return;

    if (is24Hour) {
      const clamped = Math.max(0, Math.min(23, val));
      onChangeMinutes(clamped * 60 + minutes);
    } else {
      let clamped = Math.max(1, Math.min(12, val));
      if (clamped === 12) clamped = 0;
      const target24 = isPM ? clamped + 12 : clamped;
      onChangeMinutes(target24 * 60 + minutes);
    }
  };

  const handleMinuteInputChange = (e) => {
    const val = parseInt(e.target.value, 10);
    if (isNaN(val)) return;
    const clamped = Math.max(0, Math.min(59, val));
    onChangeMinutes(rawHour24 * 60 + clamped);
  };

  return (
    <div className="time-picker-card">
      {/* Visual Digit Steppers */}
      <div className="time-stepper-row">
        {/* Hour Box */}
        <div className="digit-stepper-box">
          <button 
            className="stepper-arrow-btn" 
            onClick={() => handleHourStep(1)}
            title="Increment Hour"
          >
            <ChevronUp size={18} />
          </button>
          
          <input
            type="number"
            className="digit-input"
            value={is24Hour ? String(rawHour24).padStart(2, '0') : String(hour12).padStart(2, '0')}
            onChange={handleHourInputChange}
            min={is24Hour ? 0 : 1}
            max={is24Hour ? 23 : 12}
          />
          <span className="digit-sublabel">HOUR</span>

          <button 
            className="stepper-arrow-btn" 
            onClick={() => handleHourStep(-1)}
            title="Decrement Hour"
          >
            <ChevronDown size={18} />
          </button>
        </div>

        <div className="digit-separator">:</div>

        {/* Minute Box */}
        <div className="digit-stepper-box">
          <button 
            className="stepper-arrow-btn" 
            onClick={() => handleMinuteStep(5)}
            title="Increment Minute"
          >
            <ChevronUp size={18} />
          </button>
          
          <input
            type="number"
            className="digit-input"
            value={String(minutes).padStart(2, '0')}
            onChange={handleMinuteInputChange}
            min="0"
            max="59"
          />
          <span className="digit-sublabel">MIN</span>

          <button 
            className="stepper-arrow-btn" 
            onClick={() => handleMinuteStep(-5)}
            title="Decrement Minute"
          >
            <ChevronDown size={18} />
          </button>
        </div>

        {/* AM/PM Switcher (if in 12h mode) */}
        {!is24Hour && (
          <div className="ampm-toggle-col">
            <button
              className={`ampm-btn ${!isPM ? 'active' : ''}`}
              onClick={() => isPM && handleToggleAMPM()}
            >
              AM
            </button>
            <button
              className={`ampm-btn ${isPM ? 'active' : ''}`}
              onClick={() => !isPM && handleToggleAMPM()}
            >
              PM
            </button>
          </div>
        )}
      </div>

      {/* Quick Increment Delta Badges */}
      <div className="quick-nudge-row">
        <button className="nudge-pill" onClick={() => handleHourStep(-1)}>
          -1h
        </button>
        <button className="nudge-pill" onClick={() => handleMinuteStep(-15)}>
          -15m
        </button>
        <button className="nudge-pill" onClick={() => handleMinuteStep(15)}>
          +15m
        </button>
        <button className="nudge-pill" onClick={() => handleHourStep(1)}>
          +1h
        </button>
      </div>

      {/* 24-Hour Slider */}
      <div className="slider-container">
        <input
          type="range"
          min="0"
          max="1439"
          step="5"
          value={totalMinutes}
          onChange={e => onChangeMinutes(parseInt(e.target.value, 10))}
          className="scrubber-slider"
          id="interactive-time-slider"
        />
        <div className="slider-ticks">
          <span>12 AM</span>
          <span>4 AM</span>
          <span>8 AM</span>
          <span>12 PM</span>
          <span>4 PM</span>
          <span>8 PM</span>
          <span>11:55 PM</span>
        </div>
      </div>
    </div>
  );
}
