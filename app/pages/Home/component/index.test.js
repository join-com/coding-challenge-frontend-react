import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import RepositoriesList from '../RepositoriesList';
import CriteriaForm from '../CriteriaForm';
import { MetaIntl, TitleIntl } from '../../../molecules/Helmet';
import HomePage from './';

Enzyme.configure({ adapter: new Adapter() });

describe('<Home />', () => {
  let component;

  beforeEach(() => {
    component = shallow(
      <HomePage loading error={false} repos={[]} />
    );
  });

  it('renders the repositories list', () => {
    expect(component.contains(<RepositoriesList loading error={false} repos={[]} />)).toBe(true);
  });

  it('renders the centered section', () => expect(component.find('.centered-section').length).toBe(1));
  it('renders the criteria form', () => expect(component.find(CriteriaForm).length).toBe(1));
  it('renders the section', () => expect(component.find('.section').length).toBe(1));

  it('sets the page title', () => {
    const title = component.find(TitleIntl).first();
    expect(title.prop('id')).toBe('boilerplate.pages.Home.metaTitle');
    expect(title.prop('defaultMessage')).toBe('Home');
  });

  it('sets the page description', () => {
    const description = component.find(MetaIntl).first();
    expect(description.prop('name')).toBe('description');
    expect(description.prop('id')).toBe('boilerplate.pages.Home.metaDescription');
    expect(description.prop('defaultMessage')).toBe('The React.js Boilerplate application homepage');
  });
});
