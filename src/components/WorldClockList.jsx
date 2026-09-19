import React, { useState } from 'react';
import { Plus, Watch, Globe, ArrowUpDown, Pin } from 'lucide-react';
import { ClockCard } from './ClockCard';
import { CITIES_DATA } from '../data/cities';

export function WorldClockList({ 
  activeCityIds, 
  pinnedCityIds = [],
  currentTime, 
  is24Hour, 
  showAnalog, 
  setShowAnalog, 
  onTogglePin,
  onMoveUp,
  onMoveDown,
  onReorder,
  onOpenAddModal, 
  onRemoveCity,
  onConvertWithCity 
}) {
  const [draggedCityId, setDraggedCityId] = useState(null);
  const [dragOverCityId, setDragOverCityId] = useState(null);

  // Sort: Pinned items come first, maintaining relative order
  const sortedCityIds = [...activeCityIds].sort((a, b) => {
    const isAPinned = pinnedCityIds.includes(a);
    const isBPinned = pinnedCityIds.includes(b);
    if (isAPinned && !isBPinned) return -1;
    if (!isAPinned && isBPinned) return 1;
    return 0; // preserve original activeCityIds index order
  });

  const activeCities = sortedCityIds
    .map(id => CITIES_DATA.find(c => c.id === id))
    .filter(Boolean);

  const handleDragStart = (cityId, e) => {
    setDraggedCityId(cityId);
    if (e && e.dataTransfer) {
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/plain', cityId);
    }
  };

  const handleDragOver = (cityId, e) => {
    if (e) {
      e.preventDefault();
      if (e.dataTransfer) e.dataTransfer.dropEffect = 'move';
    }
    if (draggedCityId && draggedCityId !== cityId) {
      setDragOverCityId(cityId);
    }
  };

  const handleDrop = (targetCityId, e) => {
    if (e) e.preventDefault();
    const sourceId = (e && e.dataTransfer && e.dataTransfer.getData('text/plain')) || draggedCityId;
    if (sourceId && sourceId !== targetCityId && onReorder) {
      onReorder(sourceId, targetCityId);
    }
    setDraggedCityId(null);
    setDragOverCityId(null);
  };

  const handleDragEnd = () => {
    setDraggedCityId(null);
    setDragOverCityId(null);
  };

  // Touch Support for Mobile
  const handleTouchStart = (e, cityId) => {
    setDraggedCityId(cityId);
  };

  const handleTouchMove = (e) => {
    if (!draggedCityId) return;
    const touch = e.touches[0];
    const targetElem = document.elementFromPoint(touch.clientX, touch.clientY);
    const cardElem = targetElem?.closest('[data-city-id]');
    if (cardElem) {
      const overId = cardElem.getAttribute('data-city-id');
      if (overId && overId !== draggedCityId) {
        setDragOverCityId(overId);
      }
    }
  };

  const handleTouchEnd = () => {
    if (draggedCityId && dragOverCityId && draggedCityId !== dragOverCityId && onReorder) {
      onReorder(draggedCityId, dragOverCityId);
    }
    setDraggedCityId(null);
    setDragOverCityId(null);
  };

  return (
    <div>
      <div className="section-header">
        <div className="section-title">
          <Globe size={20} color="#38bdf8" />
          <span>Active Countries</span>
          <span className="badge-count">{activeCities.length}</span>
          {pinnedCityIds.length > 0 && (
            <span className="pin-counter-badge" title="Pinned countries">
              <Pin size={11} fill="#f59e0b" /> {pinnedCityIds.length}
            </span>
          )}
        </div>

        <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
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
            id="add-country-top-btn"
          >
            <Plus size={16} />
            <span>Add</span>
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
          <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>No Countries Added</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '1.25rem' }}>
            Add countries from around the world to track their live clock, pin favourites, and drag to reorder.
          </p>
          <button className="btn-primary-add" onClick={onOpenAddModal}>
            <Plus size={16} /> Add Your First Country
          </button>
        </div>
      ) : (
        <div className="clocks-grid" onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
          {activeCities.map((city, index) => (
            <ClockCard
              key={city.id}
              city={city}
              currentTime={currentTime}
              is24Hour={is24Hour}
              showAnalog={showAnalog}
              isPinned={pinnedCityIds.includes(city.id)}
              onTogglePin={onTogglePin}
              onMoveUp={onMoveUp}
              onMoveDown={onMoveDown}
              isFirst={index === 0}
              isLast={index === activeCities.length - 1}
              onRemove={onRemoveCity}
              onConvertWithCity={onConvertWithCity}
              isDragging={draggedCityId === city.id}
              isDragOver={dragOverCityId === city.id}
              onDragStart={handleDragStart}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              onDragEnd={handleDragEnd}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            />
          ))}
        </div>
      )}
    </div>
  );
}
