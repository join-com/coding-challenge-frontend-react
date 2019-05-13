import React from 'react';
import renderer from 'react-test-renderer';

import { IntlProvider } from 'react-intl';

import UsernameField from './';

describe('<UsernameField />', () => {
  it('renders an empty username field with a placeholder', () => {
    expect(
      renderer.create(
        <IntlProvider locale="en">
          <UsernameField description="empty field" prefix="@" />
        </IntlProvider>
      ).toJSON()
    ).toMatchSnapshot();
  });

  it('renders a username field with a value set', () => {
    expect(
      renderer.create(
        <IntlProvider locale="en">
          <UsernameField description="not empty field" prefix="@" value="name" />
        </IntlProvider>
      ).toJSON()
    ).toMatchSnapshot();
  });
});
