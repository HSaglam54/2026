import React from 'react';

const navItems = [
  { id: 'dashboard', label: 'Dashboard',  icon: '📊' },
  { id: 'standorte', label: 'Standorte',  icon: '📍' },
  { id: 'geraete',   label: 'Geräte',     icon: '❄️'  },
  { id: 'wartung',   label: 'Wartung',    icon: '🔧' },
  { id: 'berichte',  label: 'Berichte',   icon: '📄' },
  { id: 'benutzer',  label: 'Benutzer',   icon: '👤' },
];

function Sidebar({ activePage, setActivePage }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        Kältetechnik GmbH
        <span>Management Dashboard</span>
      </div>
      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`nav-btn${activePage === item.id ? ' active' : ''}`}
            onClick={() => setActivePage(item.id)}
          >
            <span className="nav-icon">{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
