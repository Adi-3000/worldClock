import React, { useState, useMemo } from 'react';
import { Search, X, Globe, Check, MapPin } from 'lucide-react';
import { CITIES_DATA, CONTINENTS } from '../data/cities';
import { getTimeInfo, getMinutesOffsetFromIST, formatOffsetLabel, getFormattedTzDetails } from '../utils/timeUtils';

export function CitySelectModal({
  isOpen,
  onClose,
  selectedCityId,
  onSelectCity,
  currentTime,
  title = "Select Target Country to Convert"
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedContinent, setSelectedContinent] = useState('All');

  const filteredCities = useMemo(() => {
    return CITIES_DATA.filter(c => {
      const q = searchQuery.toLowerCase();
      const matchesSearch = 
        c.country.toLowerCase().includes(q) ||
        c.displayName.toLowerCase().includes(q) ||
        (c.region && c.region.toLowerCase().includes(q)) ||
        c.timezone.toLowerCase().includes(q);

      if (!matchesSearch) return false;
      if (selectedContinent === 'All') return true;
      if (selectedContinent === 'Popular') return c.popular;
      return c.continent === selectedContinent;
    });
  }, [searchQuery, selectedContinent]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">
            <Globe size={20} color="#38bdf8" />
            <span>{title}</span>
          </h2>
          <button className="close-btn" onClick={onClose} id="country-select-modal-close-btn">
            <X size={18} />
          </button>
        </div>

        {/* Search Input */}
        <div className="search-input-wrapper">
          <Search size={18} className="search-icon" />
          <input
            type="text"
            className="search-input"
            placeholder="Type any country or timezone (e.g. US, Japan, GMT, EST)..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            autoFocus
            id="target-country-search-input"
          />
        </div>

        {/* Continent Filter Pills */}
        <div className="continent-filters">
          {CONTINENTS.map(cont => (
            <button
              key={cont}
              className={`filter-pill ${selectedContinent === cont ? 'active' : ''}`}
              onClick={() => setSelectedContinent(cont)}
            >
              {cont}
            </button>
          ))}
        </div>

        {/* Country Results List */}
        <div className="modal-city-list">
          {filteredCities.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '2.5rem 1rem', color: 'var(--text-tertiary)' }}>
              <p style={{ fontSize: '1rem', marginBottom: '0.35rem' }}>No countries found matching "{searchQuery}"</p>
              <p style={{ fontSize: '0.8rem' }}>Try searching by continent or popular tag.</p>
            </div>
          ) : (
            filteredCities.map(city => {
              const isSelected = city.id === selectedCityId;
              const timeInfo = getTimeInfo(currentTime, city.timezone, false);
              const offsetMins = getMinutesOffsetFromIST(currentTime, city.timezone);
              const offsetStr = formatOffsetLabel(offsetMins, currentTime, city.timezone);
              const tzDetails = getFormattedTzDetails(currentTime, city.timezone);

              return (
                <div 
                  key={city.id} 
                  className={`modal-city-item ${isSelected ? 'already-added' : ''}`}
                  onClick={() => {
                    onSelectCity(city);
                    onClose();
                  }}
                  style={{
                    border: isSelected ? '1px solid var(--accent-indigo)' : undefined,
                    background: isSelected ? 'rgba(99, 102, 241, 0.12)' : undefined
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span style={{ fontSize: '1.6rem' }}>{city.flag}</span>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.98rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <span>{city.displayName}</span>
                        {isSelected && (
                          <span style={{ fontSize: '0.65rem', padding: '0.1rem 0.4rem', background: 'var(--accent-indigo)', borderRadius: 'var(--radius-full)', color: '#fff' }}>Selected</span>
                        )}
                      </div>
                      <div style={{ fontSize: '0.74rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.35rem', flexWrap: 'wrap' }}>
                        <span>{city.timezone}</span>
                        <span style={{ color: 'var(--accent-blue)', fontWeight: 700, background: 'var(--bg-glass)', padding: '0.05rem 0.35rem', borderRadius: '4px' }}>
                          {tzDetails.badgeText}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)' }}>
                      {timeInfo.timeString}
                    </div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-tertiary)' }}>
                      {offsetStr}
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
