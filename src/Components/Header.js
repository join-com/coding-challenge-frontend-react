import React from 'react';
import { Media } from 'reactstrap';
import './Header.css';

const Header = () => {
  return (
    <div>
      <Media>
        <Media middle  href="#" className="logoStyle">
          <img src="https://via.placeholder.com/100" alt="Logo" />
        </Media>
        <Media body>
          <Media heading className="appHeading">
            Anti Theft squad Berlin
          </Media>
          <div className="appSubHeading">Stolen bykes</div>
        </Media>
      </Media>
    </div>
  );
};

export default Header;
