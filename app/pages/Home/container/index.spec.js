import React from 'react';
import renderer from 'react-test-renderer';

import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';

import MainPage from './';
import configureStore from '../../../utils/store';
import reducer from '../../../store/bikeWise/reducer';
import loadingReducer from '../../../store/loading/reducer';

const store = configureStore({
  bikeWise: reducer,
  loading: loadingReducer,
});

describe('<MainPage />', () => {
  it('renders an empty main page', () => {
    expect(
      renderer.create(
        <Provider store={store}>
          <IntlProvider locale="en">
            <MainPage />
          </IntlProvider>
        </Provider>
      ).toJSON()
    ).toMatchSnapshot();
  });
});
