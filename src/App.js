import React, { useState } from 'react';
import './App.css';
import Dashboard from './Dashboard';
import Standorte from './Standorte';
import Geraete from './Geraete';
import Wartung from './Wartung';
import Berichte from './Berichte';
import Benutzer from './Benutzer';

const navItems = [
    { id: 'dashboard', label: '📊 Dashboard' },
    { id: 'standorte', label: '📍 Standorte' },
    { id: 'geraete', label: '🖥️ Geräte' },
    { id: 'wartung', label: '🔧 Wartung' },
    { id: 'berichte', label: '📈 Berichte' },
    { id: 'benutzer', label: '👥 Benutzer' },
];

const App = () => {
    const [activePage, setActivePage] = useState('dashboard');

    const renderPage = () => {
        switch (activePage) {
            case 'dashboard': return <Dashboard />;
            case 'standorte': return <Standorte />;
            case 'geraete': return <Geraete />;
            case 'wartung': return <Wartung />;
            case 'berichte': return <Berichte />;
            case 'benutzer': return <Benutzer />;
            default: return <Dashboard />;
        }
    };

    return (
        <div className="app">
            <div className="sidebar">
                <div className="sidebar-logo">CEO Dashboard</div>
                <nav className="sidebar-nav">
                    {navItems.map(item => (
                        <button
                            key={item.id}
                            className={`nav-item ${activePage === item.id ? 'active' : ''}`}
                            onClick={() => setActivePage(item.id)}
                        >
                            {item.label}
                        </button>
                    ))}
                </nav>
            </div>
            <div className="main">
                <div className="header">
                    <h2>{navItems.find(i => i.id === activePage)?.label}</h2>
                    <span className="header-user">Admin</span>
                </div>
                <div className="content">
                    {renderPage()}
                </div>
            </div>
        </div>
    );
};

export default App;