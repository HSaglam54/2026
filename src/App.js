import React, { useState } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import Standorte from './Standorte';
import Geraete from './Geraete';
import Wartung from './Wartung';
import Berichte from './Berichte';
import Benutzer from './Benutzer';

const App = () => {
    const [currentPage, setCurrentPage] = useState('dashboard');

    const renderPage = () => {
        switch (currentPage) {
            case 'dashboard':
                return <Dashboard />;
            case 'standorte':
                return <Standorte />;
            case 'geraete':
                return <Geraete />;
            case 'wartung':
                return <Wartung />;
            case 'berichte':
                return <Berichte />;
            case 'benutzer':
                return <Benutzer />;
            default:
                return <Dashboard />;
        }
    };

    return (
        <div className="app">
            <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <div className="content">
                {renderPage()}
            </div>
        </div>
    );
};

export default App;