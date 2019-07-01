import React from 'react';
import { storiesOf } from '@storybook/react';
import { actions } from '@storybook/addon-actions';

import { LanguageSwitcher } from './languageSwitcher.component';
import { LOCALES } from '../../../i18n';

const actionsMap = actions('replace', 'push');

const defaultProps = {
  language: LOCALES.ENGLISH,
  match: {
    url: {
      replace: actionsMap.replace,
    },
    params: {
      lang: LOCALES.ENGLISH,
    },
  },
  history: {
    push: actionsMap.push,
  },
};

storiesOf('LanguageSwitcher', module).add('Default', () => <LanguageSwitcher {...defaultProps} />);
