import React from 'react';

const navItems = [
  { key: 'dashboard', icon: '📊', label: 'Dashboard' },
  { key: 'standorte', icon: '📍', label: 'Standorte' },
  { key: 'geraete', icon: '🔧', label: 'Geräte' },
  { key: 'wartung', icon: '🛠️', label: 'Wartung' },
  { key: 'berichte', icon: '📄', label: 'Berichte' },
  { key: 'benutzer', icon: '👤', label: 'Benutzer' },
];

const Sidebar = ({ activePage, setActivePage }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <h1>❄️ Kältetechnik</h1>
        <p>CEO Dashboard 2026</p>
      </div>
      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <div
            key={item.key}
            className={`nav-item${activePage === item.key ? ' active' : ''}`}
            onClick={() => setActivePage(item.key)}
          >
            <span className="nav-icon">{item.icon}</span>
            <span>{item.label}</span>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
