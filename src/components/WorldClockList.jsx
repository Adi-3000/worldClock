import React from 'react';
import { Plus, Watch, SlidersHorizontal, Globe } from 'lucide-react';
import { ClockCard } from './ClockCard';
import { CITIES_DATA } from '../data/cities';

export function WorldClockList({ 
  activeCityIds, 
  currentTime, 
  is24Hour, 
  showAnalog, 
  setShowAnalog, 
  onOpenAddModal, 
  onRemoveCity,
  onConvertWithCity 
}) {
  const activeCities = activeCityIds
    .map(id => CITIES_DATA.find(c => c.id === id))
    .filter(Boolean);

  return (
    <div>
      <div className="section-header">
        <div className="section-title">
          <Globe size={20} color="#38bdf8" />
          <span>Active Clocks</span>
          <span className="badge-count">{activeCities.length}</span>
        </div>

        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <button 
            className={`toggle-pill-btn ${showAnalog ? 'active' : ''}`}
            onClick={() => setShowAnalog(!showAnalog)}
            title="Toggle Analog Clocks"
          >
            <Watch size={14} />
            <span>Analog</span>
          </button>

          <button 
            className="btn-primary-add"
            onClick={onOpenAddModal}
            id="add-city-top-btn"
          >
            <Plus size={16} />
            <span>Add City</span>
          </button>
        </div>
      </div>

      {activeCities.length === 0 ? (
        <div style={{ 
          textAlign: 'center', 
          padding: '3rem 1.5rem', 
          background: 'var(--bg-card)', 
          borderRadius: 'var(--radius-lg)', 
          border: '1px dashed var(--border-subtle)' 
        }}>
          <Globe size={48} color="var(--text-tertiary)" style={{ margin: '0 auto 1rem', opacity: 0.5 }} />
          <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>No Clocks Added</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '1.25rem' }}>
            Add cities from around the globe to track their live time and relative IST offset.
          </p>
          <button className="btn-primary-add" onClick={onOpenAddModal}>
            <Plus size={16} /> Add Your First City
          </button>
        </div>
      ) : (
        <div className="clocks-grid">
          {activeCities.map(city => (
            <ClockCard
              key={city.id}
              city={city}
              currentTime={currentTime}
              is24Hour={is24Hour}
              showAnalog={showAnalog}
              onRemove={onRemoveCity}
              onConvertWithCity={onConvertWithCity}
            />
          ))}
        </div>
      )}
    </div>
  );
}
