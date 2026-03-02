import React from 'react';

const pageTitles = {
  dashboard: 'Dashboard – Übersicht',
  standorte: 'Standorte',
  geraete: 'Geräte',
  wartung: 'Wartung',
  berichte: 'Berichte',
  benutzer: 'Benutzer',
};

const Header = ({ activePage }) => {
  const now = new Date();
  const dateStr = now.toLocaleDateString('de-DE', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  });

  return (
    <div className="header">
      <h2>{pageTitles[activePage] || 'CEO Dashboard'}</h2>
      <span className="header-info">{dateStr}</span>
    </div>
  );
};

export default Header;
