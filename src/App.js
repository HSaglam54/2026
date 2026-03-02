import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Standorte from './pages/Standorte';
import Geraete from './pages/Geraete';
import Wartung from './pages/Wartung';
import Berichte from './pages/Berichte';
import Benutzer from './pages/Benutzer';
import './App.css';

const App = () => {
    return (
        <Router>
            <div className="app">
                <Header />
                <div className="app-body">
                    <Sidebar />
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
            </div>
        </Router>
    );
};

export default App;