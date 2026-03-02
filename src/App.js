import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Standorte from './pages/Standorte';
import Geraete from './pages/Geraete';
import Wartung from './pages/Wartung';
import Berichte from './pages/Berichte';
import Benutzer from './pages/Benutzer';

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
    <div className="app-container">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <div className="main-content">
        <Header activePage={activePage} />
        <div className="page-content">
          {renderPage()}
        </div>
      </div>
    </div>
  );
};

export default App;