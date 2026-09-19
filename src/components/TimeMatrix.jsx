import React, { useMemo } from 'react';
import { LayoutGrid, Briefcase, Coffee, BedDouble } from 'lucide-react';
import { CITIES_DATA } from '../data/cities';
import { generate24HourSlots, IST_TIMEZONE } from '../utils/timeUtils';

export function TimeMatrix({ activeCityIds, currentTime, is24Hour, onSelectHour }) {
  const targetCities = useMemo(() => {
    return activeCityIds
      .map(id => CITIES_DATA.find(c => c.id === id))
      .filter(Boolean);
  }, [activeCityIds]);

  const timezoneList = useMemo(() => {
    return targetCities.map(c => c.timezone);
  }, [targetCities]);

  const slots = useMemo(() => {
    return generate24HourSlots(currentTime, timezoneList, is24Hour);
  }, [currentTime, timezoneList, is24Hour]);

  return (
    <div className="converter-container">
      <div className="section-header">
        <div className="section-title">
          <LayoutGrid size={20} color="#a855f7" />
          <span>24-Hour Overlap Matrix</span>
        </div>
        <div style={{ display: 'flex', gap: '0.4rem', fontSize: '0.72rem' }}>
          <span className="business-tag business-work"><Briefcase size={10} /> 9-18h</span>
          <span className="business-tag business-leisure"><Coffee size={10} /> 7-9/18-22h</span>
          <span className="business-tag business-sleep"><BedDouble size={10} /> Night</span>
        </div>
      </div>

      <div className="matrix-container">
        {targetCities.map(city => (
          <div key={city.id} className="matrix-row">
            <div className="matrix-city-col">
              <span style={{ fontSize: '1.2rem' }}>{city.flag}</span>
              <div>
                <div style={{ lineHeight: 1.1 }}>{city.city}</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-tertiary)' }}>
                  {city.timezone.split('/')[1]?.replace('_', ' ')}
                </div>
              </div>
            </div>

            <div className="matrix-slots-col">
              {slots.map(slot => {
                const timeInfo = slot.slotTimes[city.timezone];
                const hourFormatted = is24Hour 
                  ? `${timeInfo.hour.padStart(2, '0')}` 
                  : `${timeInfo.hour}${timeInfo.dayPeriod ? timeInfo.dayPeriod.charAt(0) : ''}`;

                return (
                  <div
                    key={slot.istHour}
                    className={`matrix-slot ${timeInfo.businessStatus}`}
                    title={`${city.city}: ${timeInfo.timeString} (${timeInfo.businessStatus}) | IST: ${slot.istHour}:00`}
                    onClick={() => onSelectHour && onSelectHour(slot.istHour)}
                  >
                    <span>{hourFormatted}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
