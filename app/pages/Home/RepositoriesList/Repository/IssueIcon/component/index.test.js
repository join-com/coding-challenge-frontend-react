import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import IssueIcon from './';

Enzyme.configure({ adapter: new Adapter() });

describe('<IssueIcon />', () => {
  const className = 'issue-icon';
  let component;

  beforeEach(() => {
    component = shallow(<IssueIcon className={className} />);
  });

  it('renders a SVG', () => expect(component.type()).toBe('svg'));
  it('sets the width', () => expect(component.prop('width')).toBe('0.875em'));
  it('sets the height', () => expect(component.prop('height')).toBe('1em'));
  it('sets the height', () => expect(component.prop('className')).toBe(className));
});
