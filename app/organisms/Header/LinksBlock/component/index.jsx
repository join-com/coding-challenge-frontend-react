import React from 'react';
import PropTypes from 'prop-types';

import { FaSignInAlt, FaSignOutAlt, FaUserPlus } from 'react-icons/fa';
import { FormattedMessage } from 'react-intl';

import Link from '../Link';

import styles from './styles.scss';
import messages from './messages';

const LinksBlock = ({ authenticated }) => (
  <div>
    {authenticated ? (
      <div className={styles['auth-links-block']}>
        <Link icon={FaSignOutAlt} uri="/signout">
          <FormattedMessage {...messages.signOut} />
        </Link>
      </div>
    ) : (
      <div className={styles['auth-links-block']}>
        <Link icon={FaSignInAlt} uri="/signin">
          <FormattedMessage {...messages.signIn} />
        </Link>
        <Link icon={FaUserPlus} uri="/signup">
          <FormattedMessage {...messages.signUp} />
        </Link>
      </div>
    )}
  </div>
);

LinksBlock.propTypes = {
  authenticated: PropTypes.bool,
};

export default LinksBlock;
