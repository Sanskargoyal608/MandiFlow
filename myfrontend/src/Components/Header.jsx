// src/components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <h1>MandiFlow Dashboard</h1>
      </div>
      <div className="header-right">
        <button>Notifications</button>
        <button>Profile</button>
      </div>
    </header>
  );
};

export default Header;
