import React, { useState, useEffect } from 'react';
import { Plus } from 'lucide-react';
import { Header } from './components/Header';
import { WorldClockList } from './components/WorldClockList';
import { TimeConverter } from './components/TimeConverter';
import { TimeMatrix } from './components/TimeMatrix';
import { AddCityModal } from './components/AddCityModal';
import { BottomNav } from './components/BottomNav';
import { DEFAULT_USER_CITIES } from './data/cities';

export function App() {
  // Live ticking clock
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Persistent Settings
  const [activeCityIds, setActiveCityIds] = useState(() => {
    try {
      const saved = localStorage.getItem('doraclock_cities') || localStorage.getItem('chronoglobe_cities');
      return saved ? JSON.parse(saved) : DEFAULT_USER_CITIES;
    } catch {
      return DEFAULT_USER_CITIES;
    }
  });

  const [pinnedCityIds, setPinnedCityIds] = useState(() => {
    try {
      const saved = localStorage.getItem('doraclock_pinned');
      return saved ? JSON.parse(saved) : ['india'];
    } catch {
      return ['india'];
    }
  });

  const [is24Hour, setIs24Hour] = useState(() => {
    try {
      const saved = localStorage.getItem('doraclock_24h') || localStorage.getItem('chronoglobe_24h');
      return saved ? JSON.parse(saved) : false;
    } catch {
      return false;
    }
  });

  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem('doraclock_theme') || localStorage.getItem('chronoglobe_theme');
      return saved || 'dark';
    } catch {
      return 'dark';
    }
  });

  const [showAnalog, setShowAnalog] = useState(() => {
    try {
      const saved = localStorage.getItem('doraclock_analog') || localStorage.getItem('chronoglobe_analog');
      return saved ? JSON.parse(saved) : true;
    } catch {
      return true;
    }
  });

  // App Navigation & Modals
  const [activeTab, setActiveTab] = useState('clocks'); // 'clocks' | 'converter' | 'matrix'
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [preselectedCity, setPreselectedCity] = useState(null);

  // Sync to LocalStorage
  useEffect(() => {
    localStorage.setItem('doraclock_cities', JSON.stringify(activeCityIds));
  }, [activeCityIds]);

  useEffect(() => {
    localStorage.setItem('doraclock_pinned', JSON.stringify(pinnedCityIds));
  }, [pinnedCityIds]);

  useEffect(() => {
    localStorage.setItem('doraclock_24h', JSON.stringify(is24Hour));
  }, [is24Hour]);

  useEffect(() => {
    localStorage.setItem('doraclock_theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('doraclock_analog', JSON.stringify(showAnalog));
  }, [showAnalog]);

  // Country Handlers
  const handleToggleCity = (cityId) => {
    if (activeCityIds.includes(cityId)) {
      setActiveCityIds(prev => prev.filter(id => id !== cityId));
      setPinnedCityIds(prev => prev.filter(id => id !== cityId));
    } else {
      setActiveCityIds(prev => [...prev, cityId]);
    }
  };

  const handleRemoveCity = (cityId) => {
    setActiveCityIds(prev => prev.filter(id => id !== cityId));
    setPinnedCityIds(prev => prev.filter(id => id !== cityId));
  };

  const handleTogglePinCity = (cityId) => {
    if (pinnedCityIds.includes(cityId)) {
      setPinnedCityIds(prev => prev.filter(id => id !== cityId));
    } else {
      setPinnedCityIds(prev => [cityId, ...prev]);
    }
  };

  const handleMoveUp = (cityId) => {
    setActiveCityIds(prev => {
      const idx = prev.indexOf(cityId);
      if (idx <= 0) return prev;
      const copy = [...prev];
      const temp = copy[idx - 1];
      copy[idx - 1] = copy[idx];
      copy[idx] = temp;
      return copy;
    });
  };

  const handleMoveDown = (cityId) => {
    setActiveCityIds(prev => {
      const idx = prev.indexOf(cityId);
      if (idx < 0 || idx >= prev.length - 1) return prev;
      const copy = [...prev];
      const temp = copy[idx + 1];
      copy[idx + 1] = copy[idx];
      copy[idx] = temp;
      return copy;
    });
  };

  const handleReorder = (sourceCityId, targetCityId) => {
    if (!sourceCityId || !targetCityId || sourceCityId === targetCityId) return;
    setActiveCityIds(prev => {
      const displayed = [...prev].sort((a, b) => {
        const isAPinned = pinnedCityIds.includes(a);
        const isBPinned = pinnedCityIds.includes(b);
        if (isAPinned && !isBPinned) return -1;
        if (!isAPinned && isBPinned) return 1;
        return 0;
      });

      const sIdx = displayed.indexOf(sourceCityId);
      const tIdx = displayed.indexOf(targetCityId);
      if (sIdx === -1 || tIdx === -1) return prev;

      displayed.splice(sIdx, 1);
      displayed.splice(tIdx, 0, sourceCityId);
      return displayed;
    });
  };

  const handleConvertWithCity = (city) => {
    setPreselectedCity(city);
    setActiveTab('converter');
  };

  const handleSelectHourFromMatrix = (hour) => {
    setActiveTab('converter');
  };

  return (
    <div className="app-container">
      {/* Top Header with live IST anchor */}
      <Header
        currentTime={currentTime}
        is24Hour={is24Hour}
        setIs24Hour={setIs24Hour}
        theme={theme}
        setTheme={setTheme}
      />

      {/* Main Tab Content */}
      <main style={{ flex: 1, marginBottom: '2rem' }}>
        {activeTab === 'clocks' && (
          <WorldClockList
            activeCityIds={activeCityIds}
            pinnedCityIds={pinnedCityIds}
            currentTime={currentTime}
            is24Hour={is24Hour}
            showAnalog={showAnalog}
            setShowAnalog={setShowAnalog}
            onTogglePin={handleTogglePinCity}
            onMoveUp={handleMoveUp}
            onMoveDown={handleMoveDown}
            onReorder={handleReorder}
            onOpenAddModal={() => setIsAddModalOpen(true)}
            onRemoveCity={handleRemoveCity}
            onConvertWithCity={handleConvertWithCity}
          />
        )}

        {activeTab === 'converter' && (
          <TimeConverter
            activeCityIds={activeCityIds}
            currentTime={currentTime}
            is24Hour={is24Hour}
            preselectedCity={preselectedCity}
          />
        )}

        {activeTab === 'matrix' && (
          <TimeMatrix
            activeCityIds={activeCityIds}
            currentTime={currentTime}
            is24Hour={is24Hour}
            onSelectHour={handleSelectHourFromMatrix}
          />
        )}
      </main>

      {/* Mobile Floating Action Button (FAB) on Clocks screen */}
      {activeTab === 'clocks' && (
        <button
          className="mobile-fab"
          onClick={() => setIsAddModalOpen(true)}
          title="Add Country"
          id="mobile-add-fab"
        >
          <Plus size={26} />
        </button>
      )}

      {/* Search & Add Country Modal */}
      <AddCityModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        activeCityIds={activeCityIds}
        onToggleCity={handleToggleCity}
      />

      {/* Mobile Bottom Navigation */}
      <BottomNav
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </div>
  );
}

export default App;
