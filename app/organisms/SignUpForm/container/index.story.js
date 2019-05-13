import React from 'react';
import { storiesOf } from '@storybook/react';

import { BrowserRouter } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import SignUpForm from './';
import defaultTheme from '../../App/defaultTheme';
import configureStore from '../../../utils/store';
import authReducer from '../../../store/auth/reducer';

const store = configureStore({
  auth: authReducer,
});

storiesOf('Sign Up', module)
  .addDecorator((story) => (
    <Provider store={store}>
      <IntlProvider locale="en">
        <BrowserRouter>
          <MuiThemeProvider theme={defaultTheme}>
            {story()}
          </MuiThemeProvider>
        </BrowserRouter>
      </IntlProvider>
    </Provider>
  ))
  .add('default', () =>
    <SignUpForm handleSubmit={() => {}} onSubmit={() => {}} />
  )
;
