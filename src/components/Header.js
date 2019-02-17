import React from 'react';
import './Header.css';

const header = () => (
  <header className="main-navigation">
    <img
      className="main-navigation__logo"
      alt="Stolen Bykes"
      src={process.env.PUBLIC_URL + '/main-logo.jpg'}
    />
    <div className="main-navigation__title">
      <h1>Police Department of Berlin</h1>
      <h2>Stolen Bykes</h2>
    </div>
  </header>
);

export default header;
