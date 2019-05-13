import React from 'react';
import { storiesOf } from '@storybook/react';

import { IntlProvider } from 'react-intl';

import SignOut from './';

storiesOf('Sign Out', module)
  .add('default', () => (
    <IntlProvider locale="en">
      <SignOut signOut={() => {}} />
    </IntlProvider>
  ))
;
