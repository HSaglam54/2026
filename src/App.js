import React, { useState } from 'react';
import './App.css';
import Dashboard from './pages/Dashboard';
import Standorte from './pages/Standorte';
import Geraete from './pages/Geraete';
import Wartung from './pages/Wartung';
import Berichte from './pages/Berichte';
import Benutzer from './pages/Benutzer';

const navItems = [
  { id: 'dashboard', label: '📊 Dashboard' },
  { id: 'standorte', label: '📍 Standorte' },
  { id: 'geraete', label: '❄️ Geräte' },
  { id: 'wartung', label: '🔧 Wartung' },
  { id: 'berichte', label: '📁 Berichte' },
  { id: 'benutzer', label: '👤 Benutzer' },
];

const pages = {
  dashboard: <Dashboard />,
  standorte: <Standorte />,
  geraete: <Geraete />,
  wartung: <Wartung />,
  berichte: <Berichte />,
  benutzer: <Benutzer />,
};

export default function App() {
  const [activePage, setActivePage] = useState('dashboard');

  return (
    <div className="app-layout">
      <aside className="sidebar">
        <div className="sidebar-logo">
          <span>❄️ KälteManager</span>
        </div>
        <nav className="sidebar-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-item${activePage === item.id ? ' active' : ''}`}
              onClick={() => setActivePage(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </aside>
      <main className="main-content">
        {pages[activePage]}
      </main>
    </div>
  );
}