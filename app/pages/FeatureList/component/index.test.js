import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { FormattedMessage } from 'react-intl';
import Adapter from 'enzyme-adapter-react-16';

import H1 from '../../../atoms/H1';
import { MetaIntl, TitleIntl } from '../../../molecules/Helmet';

import FeaturePage from './';
import messages from './messages';

Enzyme.configure({ adapter: new Adapter() });

describe('<FeatureList />', () => {
  let component;

  beforeEach(() => {
    component = shallow(
      <FeaturePage />
    );
  });

  it('renders the header', () => {
    expect(component.contains(
      <H1>
        <FormattedMessage {...messages.header} />
      </H1>
    )).toBe(true);
  });

  it('never re-renders', () => expect(component.instance().shouldComponentUpdate()).toBe(false));

  it('sets the page title', () => {
    const title = component.find(TitleIntl).first();
    expect(title.prop('id')).toBe('boilerplate.pages.FeatureList.metaTitle');
    expect(title.prop('defaultMessage')).toBe('Features List');
  });

  it('sets the page description', () => {
    const description = component.find(MetaIntl).first();
    expect(description.prop('name')).toBe('description');
    expect(description.prop('id')).toBe('boilerplate.pages.FeatureList.metaDescription');
    expect(description.prop('defaultMessage')).toBe('Features list of React.js Boilerplate application');
  });
});
