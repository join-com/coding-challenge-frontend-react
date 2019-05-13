import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, intlShape } from 'react-intl';

import Img from '../Img';
import NavBar from '../NavBar';
import HeaderLink from '../HeaderLink';

import Banner from './banner.jpg';
import reactLogo from './react.svg';
import reduxLogo from './redux.svg';
import messages from './messages';
import styles from './styles.scss';
import LinksBlock from '../LinksBlock';

const Header = ({ authenticated, intl }) => (
  <div>
    <LinksBlock authenticated={authenticated} />
    <Img src={Banner} alt={intl.formatMessage(messages.logo)} />
    <div className={styles['logo-block']}>
      <Img src={reactLogo} alt={intl.formatMessage(messages.logo)} className={styles['logo-react']} />
      <Img src={reduxLogo} alt={intl.formatMessage(messages.logo)} className={styles['logo-redux']} />
      <div className={styles['logo-text']}>React Redux<br />PWA Boilerplate</div>
    </div>
    <NavBar>
      <HeaderLink to="/">
        <FormattedMessage {...messages.home} />
      </HeaderLink>
      <HeaderLink to="/features">
        <FormattedMessage {...messages.features} />
      </HeaderLink>
    </NavBar>
  </div>
);

Header.propTypes = {
  authenticated: PropTypes.bool,
  intl: intlShape.isRequired,
};

export default Header;
