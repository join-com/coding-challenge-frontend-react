import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Helmet } from 'react-helmet';

import Title from './';

Enzyme.configure({ adapter: new Adapter() });

describe('<Title />', () => {
  let component;
  const content = 'The title';

  beforeEach(() => {
    component = shallow(<Title content={content} />);
  });

  it('renders a Helmet component', () => expect(component.type()).toEqual(Helmet));

  it('renders a title tag', () => {
    const title = component.childAt(0);
    expect(title.type()).toBe('title');
    expect(title.childAt(0).text()).toBe(content);
  });
});
