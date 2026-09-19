import React from 'react';
import { Globe, ArrowRightLeft, LayoutGrid } from 'lucide-react';

export function BottomNav({ activeTab, setActiveTab }) {
  const tabs = [
    {
      id: 'clocks',
      label: 'World Clocks',
      icon: Globe
    },
    {
      id: 'converter',
      label: 'IST Converter',
      icon: ArrowRightLeft
    },
    {
      id: 'matrix',
      label: 'Time Matrix',
      icon: LayoutGrid
    }
  ];

  return (
    <nav className="bottom-nav">
      {tabs.map(tab => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;

        return (
          <button
            key={tab.id}
            className={`nav-item ${isActive ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
            id={`nav-tab-${tab.id}`}
          >
            <div className="nav-icon-wrapper">
              <Icon size={20} />
            </div>
            <span>{tab.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
