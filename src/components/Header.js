import React from 'react';

const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: '#1a237e',
    color: '#fff',
    padding: '0 24px',
    height: '60px',
    boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
};

const titleStyle = {
    fontSize: '1.3rem',
    fontWeight: '700',
    letterSpacing: '0.5px',
};

const infoStyle = {
    fontSize: '0.9rem',
    opacity: 0.85,
};

const Header = () => {
    const heute = new Date().toLocaleDateString('de-DE', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <header style={headerStyle}>
            <div style={titleStyle}>❄️ CEO Dashboard – Kälteanlagen</div>
            <div style={infoStyle}>{heute}</div>
        </header>
    );
};

export default Header;
