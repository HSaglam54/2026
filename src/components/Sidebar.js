import React from 'react';
import { NavLink } from 'react-router-dom';

const sidebarStyle = {
    width: '220px',
    background: '#283593',
    minHeight: 'calc(100vh - 60px)',
    paddingTop: '16px',
};

const navItems = [
    { path: '/', label: '📊 Dashboard' },
    { path: '/standorte', label: '📍 Standorte' },
    { path: '/geraete', label: '🔧 Geräte' },
    { path: '/wartung', label: '🛠️ Wartung' },
    { path: '/berichte', label: '📈 Berichte' },
    { path: '/benutzer', label: '👤 Benutzer' },
];

const linkStyle = {
    display: 'block',
    padding: '13px 24px',
    color: '#c5cae9',
    textDecoration: 'none',
    fontSize: '0.95rem',
    transition: 'background 0.2s',
};

const activeLinkStyle = {
    background: '#1a237e',
    color: '#fff',
    borderLeft: '4px solid #7986cb',
    paddingLeft: '20px',
};

const Sidebar = () => {
    return (
        <nav style={sidebarStyle}>
            {navItems.map((item) => (
                <NavLink
                    key={item.path}
                    to={item.path}
                    end={item.path === '/'}
                    style={({ isActive }) =>
                        isActive ? { ...linkStyle, ...activeLinkStyle } : linkStyle
                    }
                >
                    {item.label}
                </NavLink>
            ))}
        </nav>
    );
};

export default Sidebar;
