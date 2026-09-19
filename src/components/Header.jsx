import React from 'react';
import { Clock, Moon, Sun, Sparkles } from 'lucide-react';
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
      {/* Brand Header Bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <div className="brand-icon-wrapper">
            <Clock size={19} />
          </div>
          <div>
            <h1 className="brand-title">
              DoraClock
            </h1>
            <div className="brand-subtitle">
              GLOBAL TIME & IST CONVERTER
            </div>
          </div>
        </div>

        <div className="header-actions">
          <button 
            className={`toggle-pill-btn ${is24Hour ? 'active' : ''}`}
            onClick={() => setIs24Hour(!is24Hour)}
            title="Toggle 12h / 24h format"
            id="toggle-time-format-btn"
          >
            <Clock size={13} />
            <span>{is24Hour ? '24H' : '12H'}</span>
          </button>

          <button 
            className="toggle-pill-btn"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            title="Toggle Theme"
            id="toggle-theme-btn"
          >
            {theme === 'dark' ? <Sun size={13} /> : <Moon size={13} />}
            <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
          </button>
        </div>
      </div>

      {/* Hero IST Live Clock Banner */}
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
              <Sparkles size={14} color="var(--accent-ist)" />
              <span>{istInfo.fullDateStr} • UTC+05:30</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
