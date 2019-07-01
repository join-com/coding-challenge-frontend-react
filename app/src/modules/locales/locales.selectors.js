import { prop } from 'ramda';
import { createSelector } from 'reselect';

const selectLocalesDomain = prop('locales');

export const selectLocalesLanguage = createSelector(
  selectLocalesDomain,
  prop('language')
);
