import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';

const Option = ({ value, message, intl }) => (
  <option value={value}>
    {message ? intl.formatMessage(message) : value}
  </option>
);

Option.propTypes = {
  value: PropTypes.string.isRequired,
  message: PropTypes.object,
  intl: intlShape.isRequired,
};

export default injectIntl(Option);
