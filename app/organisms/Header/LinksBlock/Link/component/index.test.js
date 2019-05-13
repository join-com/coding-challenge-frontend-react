import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { FaUser as ICON } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import AuthLink from './';

Enzyme.configure({ adapter: new Adapter() });

describe('<AuthLink />', () => {
  let component;
  const URI = '/path';
  const CHILDREN = 'the children';

  beforeEach(() => {
    component = shallow(<AuthLink icon={ICON} uri={URI}>{ CHILDREN }</AuthLink>);
  });

  it('renders the wrapper', () => {
    expect(component.type()).toBe('span');
    expect(component.prop('className')).toBe('auth-link-block');
  });

  it('renders an icon', () => expect(component.childAt(0).type()).toEqual(ICON));

  it('renders a link', () => {
    const link = component.childAt(1);
    expect(link.type()).toEqual(Link);
    expect(link.prop('to')).toBe(URI);
    expect(link.prop('children')).toBe(CHILDREN);
  });
});
