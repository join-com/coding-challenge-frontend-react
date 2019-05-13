import React from 'react';
import renderer from 'react-test-renderer';

import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';

import configureStore from '../../../../utils/store';
import { setRepositories } from '../../../../store/github/actions';
import reducer from '../../../../store/github/reducer';

import RepositoriesList from './';

describe('<RepositoriesList />', () => {
  it('renders a loading spinner if the loading flag is set', () => {
    expect(renderer.create(<RepositoriesList loading />).toJSON()).toMatchSnapshot();
  });

  it('renders an error message if an error occurred', () => {
    expect(
      renderer.create(
        <IntlProvider locale="en">
          <RepositoriesList error repos={false} />
        </IntlProvider>
      ).toJSON()
    ).toMatchSnapshot();
  });

  it('renders nothing if the repository list is empty', () => {
    expect(renderer.create(<RepositoriesList error={false} repos={false} />).toJSON()).toMatchSnapshot();
  });

  it('renders the repository list if the list is not empty', () => {
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

    const currentUser = 'alexander-elgin';
    const store = configureStore({
      github: reducer,
    });
    store.dispatch(setRepositories(repositories, currentUser));

    expect(renderer.create(
      <Provider store={store}>
        <IntlProvider locale="en">
          <RepositoriesList error={false} repos={repositories} />
        </IntlProvider>
      </Provider>
    ).toJSON()).toMatchSnapshot();
  });
});
