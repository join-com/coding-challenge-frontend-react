import React from 'react';
import renderer from 'react-test-renderer';

import { IntlProvider } from 'react-intl';

import FeatureListPage from './';

describe('<FeatureListPage />', () => {
  it('renders the Features List page', () => {
    expect(
      renderer.create(
        <IntlProvider locale="en">
          <FeatureListPage />
        </IntlProvider>
      ).toJSON()
    ).toMatchSnapshot();
  });
});
