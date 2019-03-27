// Core
import React, { PureComponent } from 'react';

// Instruments
import styles from './Header.module.scss';
import logo from '../../assets/logo.png';

export default class Header extends PureComponent {
  render() {
    return (
      <div className={styles.Header}>
        <img src={logo} alt="logo" />
        <div>
          <h1>Police Department of Berlin</h1>
          <h2>Stolen bikes</h2>
        </div>
      </div>
    );
  }
}
