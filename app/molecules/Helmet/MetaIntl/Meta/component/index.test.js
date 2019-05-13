import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Helmet } from 'react-helmet';

import Meta from './';

Enzyme.configure({ adapter: new Adapter() });

describe('<Meta />', () => {
  let component;
  const content = 'The description';
  const type = 'description';

  beforeEach(() => {
    component = shallow(<Meta content={content} name={type} />);
  });

  it('renders a Helmet component', () => expect(component.type()).toEqual(Helmet));

  it('renders a meta tag', () => {
    const meta = component.childAt(0);
    expect(meta.type()).toBe('meta');
    expect(meta.prop('name')).toBe(type);
    expect(meta.prop('content')).toBe(content);
  });
});
