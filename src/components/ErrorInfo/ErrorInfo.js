// Core
import React, { PureComponent } from 'react';

// Instruments
import styles from './ErrorInfo.module.scss';

export default class ErrorInfo extends PureComponent {
  render() {
    return (
      <div className={styles.ErrorInfo}>
        <p>Ooops, something went wrong</p>
      </div>
    );
  }
}
