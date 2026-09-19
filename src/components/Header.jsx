import React from 'react';
import { Clock, Moon, Sun, Globe, Sparkles } from 'lucide-react';
import { getTimeInfo, IST_TIMEZONE } from '../utils/timeUtils';

export function Header({ 
  currentTime, 
  is24Hour, 
  setIs24Hour, 
  theme, 
  setTheme 
}) {
  const istInfo = getTimeInfo(currentTime, IST_TIMEZONE, is24Hour);

  return (
    <header className="app-header">
      <div className="hero-ist-banner">
        <div className="hero-ist-content">
          <div>
            <div className="ist-title-badge">
              <span className="pulse-dot"></span>
              <span>🇮🇳 Indian Standard Time (IST)</span>
            </div>

            <div className="ist-time-digits">
              <span>{istInfo.hour}:{istInfo.minute}</span>
              <span className="ist-seconds">:{istInfo.second}</span>
              {!is24Hour && <span className="ist-ampm">{istInfo.dayPeriod}</span>}
            </div>

            <div className="ist-date-label">
              <Sparkles size={14} color="#f97316" />
              <span>{istInfo.fullDateStr} • UTC+05:30</span>
            </div>
          </div>

          <div className="header-actions">
            <button 
              className={`toggle-pill-btn ${is24Hour ? 'active' : ''}`}
              onClick={() => setIs24Hour(!is24Hour)}
              title="Toggle 12h / 24h format"
              id="toggle-time-format-btn"
            >
              <Clock size={14} />
              <span>{is24Hour ? '24H' : '12H'}</span>
            </button>

            <button 
              className="toggle-pill-btn"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              title="Toggle Theme"
              id="toggle-theme-btn"
            >
              {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
              <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
