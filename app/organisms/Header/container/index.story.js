import React from 'react';
import { storiesOf } from '@storybook/react';

import { BrowserRouter } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';

import Header from './';
import configureStore from '../../../utils/store';
import authReducer from '../../../store/auth/reducer';
import { setSignInData, signOut } from '../../../store/auth/actions';

const store = configureStore({
  auth: authReducer,
});

storiesOf('Header', module)
  .addDecorator((story) => (
    <Provider store={store}>
      <IntlProvider locale="en">
        <BrowserRouter>
          {story()}
        </BrowserRouter>
      </IntlProvider>
    </Provider>
  ))
  .add('not authenticated', () => {
    store.dispatch(signOut());
    return (<Header />);
  })
  .add('authenticated', () => {
    store.dispatch(setSignInData({
      user: { name: 'Dummy User', email: 'dummy@gmail.com' },
      token: 'dummy token',
    }));
    return (<Header />);
  })
;
