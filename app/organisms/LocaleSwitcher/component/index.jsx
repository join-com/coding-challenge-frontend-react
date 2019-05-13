import React from 'react';
import PropTypes from 'prop-types';

import { appLocales } from '../../../i18n';
import Dropdown from '../../../molecules/Dropdown';

import Wrapper from '../Wrapper';
import messages from './messages';

const LocaleSwitcher = ({ locale, onChange }) => (
  <Wrapper>
    <Dropdown value={locale} values={appLocales} messages={messages} onChange={onChange} />
  </Wrapper>
);

LocaleSwitcher.propTypes = {
  onChange: PropTypes.func,
  locale: PropTypes.string,
};

export default LocaleSwitcher;
