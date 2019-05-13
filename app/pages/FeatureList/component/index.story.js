import React from 'react';
import { storiesOf } from '@storybook/react';

import { IntlProvider } from 'react-intl';

import FeatureListPage from './';

storiesOf('FeatureListPage', module)
  .addDecorator((story) => (
    <IntlProvider locale="en">
      {story()}
    </IntlProvider>
  ))
  .add('default', () => <FeatureListPage />)
;
