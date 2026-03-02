import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

const Dashboard = () => (
    <div className="page">
        <h2>Dashboard</h2>
        <p>Willkommen im CEO Dashboard!</p>
    </div>
);

const Standorte = () => (
    <div className="page">
        <h2>Standorte</h2>
        <p>Übersicht aller Standorte.</p>
    </div>
);

const Geraete = () => (
    <div className="page">
        <h2>Geräte</h2>
        <p>Übersicht aller Geräte.</p>
    </div>
);

const Wartung = () => (
    <div className="page">
        <h2>Wartung</h2>
        <p>Wartungsübersicht.</p>
    </div>
);

const Berichte = () => (
    <div className="page">
        <h2>Berichte</h2>
        <p>Berichtsübersicht.</p>
    </div>
);

const Benutzer = () => (
    <div className="page">
        <h2>Benutzer</h2>
        <p>Benutzerverwaltung.</p>
    </div>
);

const App = () => {
    return (
        <Router>
            <div className="app">
                <nav className="sidebar">
                    <h1>CEO Dashboard</h1>
                    <ul>
                        <li><Link to="/">Dashboard</Link></li>
                        <li><Link to="/standorte">Standorte</Link></li>
                        <li><Link to="/geraete">Geräte</Link></li>
                        <li><Link to="/wartung">Wartung</Link></li>
                        <li><Link to="/berichte">Berichte</Link></li>
                        <li><Link to="/benutzer">Benutzer</Link></li>
                    </ul>
                </nav>
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/standorte" element={<Standorte />} />
                        <Route path="/geraete" element={<Geraete />} />
                        <Route path="/wartung" element={<Wartung />} />
                        <Route path="/berichte" element={<Berichte />} />
                        <Route path="/benutzer" element={<Benutzer />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;