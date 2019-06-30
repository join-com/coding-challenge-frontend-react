import { addLocaleData } from 'react-intl';
import enLocaleData from 'react-intl/locale-data/en';
import plLocaleData from 'react-intl/locale-data/pl';

import enTranslationMessages from './translations/en.json';
import plTranslationMessages from './translations/pl.json';

addLocaleData(enLocaleData);
addLocaleData(plLocaleData);

export const LOCALES = {
  ENGLISH: 'en',
  POLISH: 'pl',
};

export const DEFAULT_LOCALE = LOCALES.ENGLISH;

export const appLocales = [LOCALES.ENGLISH, LOCALES.POLISH];

export const formatTranslationMessages = (locale, messages) => {
  const defaultFormattedMessages =
    locale !== DEFAULT_LOCALE ? formatTranslationMessages(DEFAULT_LOCALE, enTranslationMessages) : {};
  return Object.keys(messages).reduce((formattedMessages, key) => {
    const formattedMessage =
      !messages[key] && locale !== DEFAULT_LOCALE ? defaultFormattedMessages[key] : messages[key];
    return Object.assign(formattedMessages, { [key]: formattedMessage });
  }, {});
};

export const translationMessages = {
  [LOCALES.ENGLISH]: formatTranslationMessages(LOCALES.ENGLISH, enTranslationMessages),
  [LOCALES.POLISH]: formatTranslationMessages(LOCALES.POLISH, plTranslationMessages),
};
