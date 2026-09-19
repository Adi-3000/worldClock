import React, { useState, useMemo } from 'react';
import { Search, X, Globe, Check, MapPin } from 'lucide-react';
import { CITIES_DATA, CONTINENTS } from '../data/cities';
import { getTimeInfo, getMinutesOffsetFromIST, formatOffsetLabel, IST_TIMEZONE } from '../utils/timeUtils';

export function CitySelectModal({
  isOpen,
  onClose,
  selectedCityId,
  onSelectCity,
  currentTime,
  title = "Select Target City to Convert"
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedContinent, setSelectedContinent] = useState('All');

  const filteredCities = useMemo(() => {
    return CITIES_DATA.filter(c => {
      // Don't show India/IST in target list if unwanted, but allow everything else
      const matchesSearch = 
        c.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.timezone.toLowerCase().includes(searchQuery.toLowerCase());

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
          <button className="close-btn" onClick={onClose} id="city-select-modal-close-btn">
            <X size={18} />
          </button>
        </div>

        {/* Search Input */}
        <div className="search-input-wrapper">
          <Search size={18} className="search-icon" />
          <input
            type="text"
            className="search-input"
            placeholder="Type any city (e.g. Seattle, Zurich, Tokyo, Cairo)..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            autoFocus
            id="target-city-search-input"
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

        {/* City Results List */}
        <div className="modal-city-list">
          {filteredCities.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '2.5rem 1rem', color: 'var(--text-tertiary)' }}>
              <p style={{ fontSize: '1rem', marginBottom: '0.35rem' }}>No cities found matching "{searchQuery}"</p>
              <p style={{ fontSize: '0.8rem' }}>Try searching by country name or popular city.</p>
            </div>
          ) : (
            filteredCities.map(city => {
              const isSelected = city.id === selectedCityId;
              const timeInfo = getTimeInfo(currentTime, city.timezone, false);
              const offsetMins = getMinutesOffsetFromIST(currentTime, city.timezone);
              const offsetStr = formatOffsetLabel(offsetMins, currentTime, city.timezone);

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
                    <span style={{ fontSize: '1.5rem' }}>{city.flag}</span>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <span>{city.city}</span>
                        {isSelected && (
                          <span style={{ fontSize: '0.65rem', padding: '0.1rem 0.4rem', background: 'var(--accent-indigo)', borderRadius: 'var(--radius-full)', color: '#fff' }}>Selected</span>
                        )}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                        {city.country} • {offsetStr}
                      </div>
                    </div>
                  </div>

                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)' }}>
                      {timeInfo.timeString}
                    </div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-tertiary)' }}>
                      {timeInfo.tzName}
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
