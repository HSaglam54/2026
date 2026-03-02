import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import Standorte from './Standorte';
import Geraete from './Geraete';
import Wartung from './Wartung';
import Berichte from './Berichte';
import Benutzer from './Benutzer';

const PAGES = {
  dashboard: <Dashboard />,
  standorte: <Standorte />,
  geraete: <Geraete />,
  wartung: <Wartung />,
  berichte: <Berichte />,
  benutzer: <Benutzer />,
};

const App = () => {
  const [activePage, setActivePage] = useState('dashboard');

  return (
    <div className="app">
      <Header />
      <div className="app-body">
        <Sidebar activePage={activePage} onNavigate={setActivePage} />
        <main className="content">
          {PAGES[activePage]}
        </main>
      </div>
    </div>
  );
};

export default App;