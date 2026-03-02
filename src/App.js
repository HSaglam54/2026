import React, { useState } from 'react';
import './App.css';
import Dashboard from './pages/Dashboard';
import Standorte from './pages/Standorte';
import Geraete from './pages/Geraete';
import Wartung from './pages/Wartung';
import Berichte from './pages/Berichte';
import Benutzer from './pages/Benutzer';

const navItems = [
    { key: 'dashboard', label: '📊 Dashboard' },
    { key: 'standorte', label: '📍 Standorte' },
    { key: 'geraete', label: '🔧 Geräte' },
    { key: 'wartung', label: '🛠️ Wartung' },
    { key: 'berichte', label: '📋 Berichte' },
    { key: 'benutzer', label: '👤 Benutzer' },
];

const pages = {
    dashboard: <Dashboard />,
    standorte: <Standorte />,
    geraete: <Geraete />,
    wartung: <Wartung />,
    berichte: <Berichte />,
    benutzer: <Benutzer />,
};

const App = () => {
    const [aktiveSeite, setAktiveSeite] = useState('dashboard');

    return (
        <div className="app">
            <header className="app-header">
                <div className="app-header-logo">❄️ Kältetechnik 2026</div>
                <div className="app-header-info">Verwaltungssystem</div>
            </header>
            <div className="app-body">
                <nav className="sidebar">
                    <ul className="sidebar-nav">
                        {navItems.map((item) => (
                            <li key={item.key}>
                                <button
                                    className={`sidebar-link${aktiveSeite === item.key ? ' aktiv' : ''}`}
                                    onClick={() => setAktiveSeite(item.key)}
                                >
                                    {item.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
                <main className="main-content">
                    {pages[aktiveSeite]}
                </main>
            </div>
        </div>
    );
};

export default App;