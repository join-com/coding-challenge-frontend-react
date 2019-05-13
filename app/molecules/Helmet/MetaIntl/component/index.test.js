import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mountWithIntl } from 'enzyme-react-intl';

import { FormattedMessage } from 'react-intl';

import MetaIntl from './';

import Meta from '../Meta';

Enzyme.configure({ adapter: new Adapter() });

describe('<MetaIntl />', () => {
  let component;
  const type = 'description';
  const message = {
    id: 'boilerplate.pages.FeatureList.metaDescription',
    defaultMessage: 'Features list of React.js Boilerplate application',
  };

  beforeEach(() => {
    component = mountWithIntl(<MetaIntl name={type} {...message} />).find(FormattedMessage).first();
  });

  it('renders a FormattedMessage component', () => {
    Object.keys(message).map((field) => expect(component.prop(field)).toEqual(message[field]));
  });

  it('renders a Title component', () => {
    const meta = component.childAt(0);
    expect(meta.type()).toEqual(Meta);
    expect(meta.prop('content')).toBe(message.defaultMessage);
    expect(meta.prop('name')).toBe(type);
  });
});
