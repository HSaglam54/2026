import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import Standorte from './Standorte';
import Geraete from './Geraete';
import Wartung from './Wartung';
import Berichte from './Berichte';
import Benutzer from './Benutzer';
import './index.css';

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
            <Sidebar activePage={activePage} setActivePage={setActivePage} />
            <div className="main-wrapper">
                <header className="app-header">
                    <div className="header-logo">
                        ❄️ <span>KältefachMS</span>
                    </div>
                    <div className="header-user">
                        <span className="header-user-name">👤 Max Mustermann</span>
                        <span className="header-user-role">CEO</span>
                    </div>
                </header>
                <div className="content">
                    {renderPage()}
                </div>
            </div>
        </div>
    );
};

export default App;