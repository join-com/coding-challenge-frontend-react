import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import messages from './messages';

class SignOut extends React.Component {
  componentDidMount() {
    this.props.signOut();
  }

  render() {
    return (
      <p><FormattedMessage {...messages.signOutMessage} />...</p>
    );
  }
}

SignOut.propTypes = {
  signOut: PropTypes.func,
};

export default SignOut;
