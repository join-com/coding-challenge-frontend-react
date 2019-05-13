import React from 'react';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';

const LanguageProvider = ({ children, locale, messages }) => (
  <IntlProvider locale={locale} key={locale} messages={messages[locale]}>
    {React.Children.only(children)}
  </IntlProvider>
);

LanguageProvider.propTypes = {
  locale: PropTypes.string,
  messages: PropTypes.object,
  children: PropTypes.element.isRequired,
};

export default LanguageProvider;
