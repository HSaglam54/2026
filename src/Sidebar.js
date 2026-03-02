import React from 'react';

const NAV_ITEMS = [
  { id: 'dashboard', label: '📊 Dashboard' },
  { id: 'standorte', label: '📍 Standorte' },
  { id: 'geraete', label: '🖥️ Geräte' },
  { id: 'wartung', label: '🔧 Wartung' },
  { id: 'berichte', label: '📄 Berichte' },
  { id: 'benutzer', label: '👥 Benutzer' },
];

const Sidebar = ({ activePage, onNavigate }) => {
  return (
    <nav className="sidebar">
      {NAV_ITEMS.map((item) => (
        <div
          key={item.id}
          className={`sidebar-item${activePage === item.id ? ' active' : ''}`}
          onClick={() => onNavigate(item.id)}
        >
          {item.label}
        </div>
      ))}
    </nav>
  );
};

export default Sidebar;
