import React from 'react';
import { storiesOf } from '@storybook/react';

import { IntlProvider } from 'react-intl';

import UsernameField from './';

storiesOf('UsernameField', module)
  .addDecorator((story) => (
    <IntlProvider locale="en">
      {story()}
    </IntlProvider>
  ))
  .add('empty', () => <UsernameField description="empty field" prefix="@" />)
  .add('with value', () => <UsernameField description="not empty field" prefix="@" value="name" />)
;
