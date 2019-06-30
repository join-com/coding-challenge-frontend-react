import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { IntlProvider } from 'react-intl';
import { translationMessages, DEFAULT_LOCALE } from '../i18n';


export const withTheme = (mode) => (story) => (
  <ThemeProvider theme={{ mode }}>{story()}</ThemeProvider>
);

export const withStore = (initialState) => (story) => (
  <Provider store={initialState}>
    {story()}
  </Provider>
);

export const withIntl = (story) => (
  <IntlProvider locale={DEFAULT_LOCALE} messages={translationMessages[DEFAULT_LOCALE]}>
    {story()}
  </IntlProvider>
);
