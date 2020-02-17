import React from 'react';
import './header.css';

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <img src="http://www.odmp.org/media/image/agency/302/302.jpg" width="100"/>
        <h1>
          Police Department of Berlin
          <small>Stolen bikes</small>
        </h1>
      </header>
    )
  }
}
