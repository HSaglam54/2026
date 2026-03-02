import React from 'react';

const navItems = [
    { id: 'dashboard', label: 'Übersicht', icon: '📊' },
    { id: 'standorte', label: 'Standorte', icon: '📍' },
    { id: 'geraete', label: 'Geräte', icon: '🌡️' },
    { id: 'wartung', label: 'Wartung', icon: '🔧' },
    { id: 'berichte', label: 'Berichte', icon: '📋' },
    { id: 'benutzer', label: 'Benutzer', icon: '👥' },
];

const Sidebar = ({ activePage, setActivePage }) => {
    return (
        <aside className="sidebar">
            <div className="sidebar-brand">
                <span className="sidebar-brand-icon">❄️</span>
                <span className="sidebar-brand-text">KältefachMS</span>
            </div>
            <nav className="sidebar-nav">
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        className={`sidebar-nav-item${activePage === item.id ? ' active' : ''}`}
                        onClick={() => setActivePage(item.id)}
                    >
                        <span className="sidebar-nav-icon">{item.icon}</span>
                        <span className="sidebar-nav-label">{item.label}</span>
                    </button>
                ))}
            </nav>
            <div className="sidebar-footer">
                <span>© 2026 KältefachMS</span>
            </div>
        </aside>
    );
};

export default Sidebar;
