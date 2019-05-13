import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import styles from './styles.scss';

const Feature = ({description, header}) => (
  <div>
    <p className={styles['feature-header']}><FormattedMessage {...header} /></p>
    <p className={styles['feature-description']}><FormattedMessage {...description} /></p>
  </div>
);

Feature.propTypes = {
  description: PropTypes.object.isRequired,
  header: PropTypes.object.isRequired
};

export default Feature;
