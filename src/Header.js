import React from 'react';

const Header = () => {
  const now = new Date().toLocaleDateString('de-DE', {
    day: '2-digit', month: '2-digit', year: 'numeric',
  });

  return (
    <header className="header">
      <h1>❄️ Kühlsystem Dashboard</h1>
      <span className="header-info">Stand: {now}</span>
    </header>
  );
};

export default Header;
