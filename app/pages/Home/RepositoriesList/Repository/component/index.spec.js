import React from 'react';
import renderer from 'react-test-renderer';

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

describe('<Repository />', () => {
  it('hides the repository owner name if it matches the current user name', () => {
    expect(renderer.create(
      <IntlProvider locale="en">
        <Repository currentUser={currentUser} repository={currentUserRepository} />
      </IntlProvider>
    ).toJSON()).toMatchSnapshot();
  });

  it('shows the repository owner name if it does not match the current user name', () => {
    expect(renderer.create(
      <IntlProvider locale="en">
        <Repository currentUser={currentUser} repository={anotherUserRepository} />
      </IntlProvider>
    ).toJSON()).toMatchSnapshot();
  });
});
