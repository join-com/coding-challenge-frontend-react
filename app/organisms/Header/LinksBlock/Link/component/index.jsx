import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './styles.scss';

const AuthLink = ({ icon: Icon, uri, children }) => (
  <span className={styles['auth-link-block']}>
    <Icon />
    <Link to={uri}>{children}</Link>
  </span>
);

AuthLink.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.func,
  uri: PropTypes.string,
};

export default AuthLink;
