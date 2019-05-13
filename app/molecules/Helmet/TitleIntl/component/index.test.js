import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mountWithIntl } from 'enzyme-react-intl';

import { FormattedMessage } from 'react-intl';

import TitleIntl from './';

import Title from '../Title';

Enzyme.configure({ adapter: new Adapter() });

describe('<TitleIntl />', () => {
  let component;
  const message = {
    id: 'boilerplate.pages.FeatureList.metaTitle',
    defaultMessage: 'Features List',
  };

  beforeEach(() => {
    component = mountWithIntl(<TitleIntl {...message} />).find(FormattedMessage).first();
  });

  it('renders a FormattedMessage component', () => {
    Object.keys(message).map((field) => expect(component.prop(field)).toEqual(message[field]));
  });

  it('renders a Title component', () => {
    const title = component.childAt(0);
    expect(title.type()).toEqual(Title);
    expect(title.prop('content')).toBe(message.defaultMessage);
  });
});
