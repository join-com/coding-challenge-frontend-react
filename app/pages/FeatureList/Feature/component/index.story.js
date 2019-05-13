import React from 'react';
import { storiesOf } from '@storybook/react';

import { IntlProvider } from 'react-intl';

import Feature from './';

const description = {
  id: 'boilerplate.pages.FeatureList.network.message',
  defaultMessage: `
      The next frontier in performant web apps: availability without a
      network connection from the instant your users load the app.
  `,
};
const header = {
  id: 'boilerplate.pages.FeatureList.network.header',
  defaultMessage: 'Offline-first',
};

storiesOf('Feature', module)
  .addDecorator((story) => (
    <IntlProvider locale="en">
      {story()}
    </IntlProvider>
  ))
  .add('default', () => <Feature description={description} header={header} />)
;
