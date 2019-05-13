import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { IntlProvider } from 'react-intl';

import List from '../../../../atoms/List';
import LoadingIndicator from '../../../../molecules/LoadingIndicator';

import RepositoriesList from './';

Enzyme.configure({ adapter: new Adapter() });

describe('<RepositoriesList />', () => {
  it('should render the loading indicator when its loading', () => {
    const renderedComponent = shallow(
      <RepositoriesList loading />
    );
    expect(renderedComponent.contains(<LoadingIndicator />)).toEqual(true);
  });

  it('should render an error if loading failed', () => {
    const renderedComponent = mount(
      <IntlProvider locale="en">
        <RepositoriesList
          loading={false}
          error={{ message: 'Loading failed!' }}
          repos={false}
        />
      </IntlProvider>
    );
    expect(renderedComponent.text()).toMatch(/Something went wrong/);
  });

  it('should render the repositories if loading was successful', () => {
    const repos = [{
      owner: {
        login: 'alexander-elgin',
      },
      html_url: 'https://github.com/alexander-elgin/ta-maxlength',
      name: 'ta-maxlength',
      open_issues_count: 3,
      full_name: 'alexander-elgin/ta-maxlength',
    }];
    const renderedComponent = shallow(
      <RepositoriesList
        repos={repos}
        error={false}
      />
    );

    expect(renderedComponent.find(List).length > 0).toEqual(true);
  });

  it('should not render anything if nothing interesting is provided', () => {
    const renderedComponent = shallow(
      <RepositoriesList
        repos={false}
        error={false}
        loading={false}
      />
    );

    expect(renderedComponent.html()).toEqual(null);
  });
});
