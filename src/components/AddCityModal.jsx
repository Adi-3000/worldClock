import React, { useState, useMemo } from 'react';
import { Search, X, Plus, Check, Globe } from 'lucide-react';
import { CITIES_DATA, CONTINENTS } from '../data/cities';
import { getFormattedTzDetails } from '../utils/timeUtils';

export function AddCityModal({ 
  isOpen, 
  onClose, 
  activeCityIds, 
  onToggleCity 
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
            <Globe size={20} color="#6366f1" />
            <span>Add Country Clock</span>
          </h2>
          <button className="close-btn" onClick={onClose} id="modal-close-btn">
            <X size={18} />
          </button>
        </div>

        <div className="search-input-wrapper">
          <Search size={18} className="search-icon" />
          <input
            type="text"
            className="search-input"
            placeholder="Search country or timezone (e.g. US, Japan, GMT, EST)..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            autoFocus
            id="country-search-input"
          />
        </div>

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

        <div className="modal-city-list">
          {filteredCities.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-tertiary)' }}>
              <p>No countries found matching "{searchQuery}"</p>
            </div>
          ) : (
            filteredCities.map(city => {
              const isAdded = activeCityIds.includes(city.id);
              const tzInfo = getFormattedTzDetails(new Date(), city.timezone);

              return (
                <div 
                  key={city.id} 
                  className={`modal-city-item ${isAdded ? 'already-added' : ''}`}
                  onClick={() => onToggleCity(city.id)}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span style={{ fontSize: '1.6rem' }}>{city.flag}</span>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.98rem' }}>{city.displayName}</div>
                      <div style={{ fontSize: '0.74rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.35rem', flexWrap: 'wrap' }}>
                        <span>{city.timezone}</span>
                        <span style={{ color: 'var(--accent-blue)', fontWeight: 700, background: 'var(--bg-glass)', padding: '0.05rem 0.35rem', borderRadius: '4px' }}>
                          {tzInfo.badgeText}
                        </span>
                      </div>
                    </div>
                  </div>

                  <button 
                    className={`toggle-pill-btn ${isAdded ? 'active' : ''}`}
                    style={{ padding: '0.35rem 0.75rem', fontSize: '0.78rem' }}
                  >
                    {isAdded ? (
                      <>
                        <Check size={14} /> Added
                      </>
                    ) : (
                      <>
                        <Plus size={14} /> Add
                      </>
                    )}
                  </button>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
