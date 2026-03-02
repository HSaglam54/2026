import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Standorte from './components/Standorte';
import Geraete from './components/Geraete';
import Wartung from './components/Wartung';
import Berichte from './components/Berichte';
import Benutzer from './components/Benutzer';

function App() {
  const [activePage, setActivePage] = useState('dashboard');

  const renderPage = () => {
    switch (activePage) {
      case 'dashboard':  return <Dashboard />;
      case 'standorte':  return <Standorte />;
      case 'geraete':    return <Geraete />;
      case 'wartung':    return <Wartung />;
      case 'berichte':   return <Berichte />;
      case 'benutzer':   return <Benutzer />;
      default:           return <Dashboard />;
    }
  };

  return (
    <div className="app-container">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <div className="main-area">
        <Header />
        <main className="page-content">
          {renderPage()}
        </main>
      </div>
    </div>
  );
}

export default App;