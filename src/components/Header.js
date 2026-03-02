import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="header-title">Kältetechnik GmbH — CEO Dashboard</div>
      <div className="header-user">
        <div className="user-avatar">MS</div>
        <div className="user-info">
          <span className="user-name">Max Schreiber</span>
          <span className="user-role">Administrator</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
