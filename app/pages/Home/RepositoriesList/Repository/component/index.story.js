import React from 'react';
import { storiesOf } from '@storybook/react';

import { IntlProvider } from 'react-intl';

import Repository from './';

const currentUser = 'alexander-elgin';

const currentUserRepository = {
  id: 52143857,
  name: 'ta-maxlength',
  full_name: 'alexander-elgin/ta-maxlength',
  owner: {
    login: 'alexander-elgin',
  },
  html_url: 'https://github.com/alexander-elgin/ta-maxlength',
  open_issues_count: 3,
};

const anotherUserRepository = {
  id: 33667892,
  name: 'meetermaid',
  full_name: 'rasp3175/meetermaid',
  owner: {
    login: 'rasp3175',
  },
  html_url: 'https://github.com/rasp3175/meetermaid',
  open_issues_count: 0,
};

storiesOf('Repository', module)
  .addDecorator((story) => (
    <IntlProvider locale="en">
      {story()}
    </IntlProvider>
  ))
  .add('current user\'s repository', () => (
    <Repository currentUser={currentUser} repository={currentUserRepository} />
  ))
  .add('another user\'s repository', () => (
    <Repository currentUser={currentUser} repository={anotherUserRepository} />
  ))
;
