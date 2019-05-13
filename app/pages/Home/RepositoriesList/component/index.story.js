import React from 'react';
import { storiesOf } from '@storybook/react';

import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';

import configureStore from '../../../../utils/store';
import { setRepositories } from '../../../../store/github/actions';
import reducer from '../../../../store/github/reducer';

import RepositoriesList from './';

const store = configureStore({
  github: reducer,
});
const currentUser = 'alexander-elgin';
const repositories = [
  {
    id: 52143857,
    name: 'ta-maxlength',
    full_name: 'alexander-elgin/ta-maxlength',
    owner: {
      login: 'alexander-elgin',
    },
    html_url: 'https://github.com/alexander-elgin/ta-maxlength',
    open_issues_count: 3,
  },
  {
    id: 33667892,
    name: 'meetermaid',
    full_name: 'rasp3175/meetermaid',
    owner: {
      login: 'rasp3175',
    },
    html_url: 'https://github.com/rasp3175/meetermaid',
    open_issues_count: 0,
  },
];

store.dispatch(setRepositories(repositories, currentUser));

storiesOf('RepositoriesList', module)
  .add('loading', () => <RepositoriesList loading />)
  .add('error', () => (
    <IntlProvider locale="en">
      <RepositoriesList error repos={false} />
    </IntlProvider>
  ))
  .add('not empty list', () => (
    <Provider store={store}>
      <IntlProvider locale="en">
        <RepositoriesList error={false} repos={repositories} />
      </IntlProvider>
    </Provider>
  ))
;
