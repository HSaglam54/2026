import React from 'react';

const Sidebar = ({ currentPage, setCurrentPage }) => {
    const navItems = [
        { id: 'dashboard', label: '📊 Dashboard' },
        { id: 'standorte', label: '📍 Standorte' },
        { id: 'geraete', label: '⚙️ Geräte' },
        { id: 'wartung', label: '🔧 Wartung' },
        { id: 'berichte', label: '📄 Berichte' },
        { id: 'benutzer', label: '👤 Benutzer' },
    ];

    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <h2>CEO Dashboard</h2>
            </div>
            <nav className="sidebar-nav">
                {navItems.map(item => (
                    <button
                        key={item.id}
                        className={`nav-button ${currentPage === item.id ? 'active' : ''}`}
                        onClick={() => setCurrentPage(item.id)}
                    >
                        {item.label}
                    </button>
                ))}
            </nav>
        </div>
    );
};

export default Sidebar;
