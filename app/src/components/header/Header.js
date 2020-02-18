import React from 'react';
import './Header.css';

export default class Header extends React.Component {
  render() {
    return (
      <header className="flex-container">
        <img src="http://www.odmp.org/media/image/agency/302/302.jpg" width="100"/>
        <h1>
          Police Department of Berlin
          <small>Stolen bikes</small>
        </h1>
      </header>
    )
  }
}
