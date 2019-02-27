import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import Button from '../Button';

const props = {
  className: 'myClassname',
  onClick: () => {},
};
const text = 'Mytext';

describe('Button', () => {
  it('should render the component correctly with text', () => {
    const tree = shallow(<Button {...props} text={text} />);
    expect(shallowToJson(tree)).toMatchSnapshot();
  });

  it('should render the component for disabled state', () => {
    const tree = shallow(<Button {...props} text={text} disabled />);
    expect(shallowToJson(tree)).toMatchSnapshot();
  });

  it('should not render the component if text is undefined', () => {
    const tree = shallow(<Button {...props} />);
    expect(shallowToJson(tree)).toMatchSnapshot();
  });

  it('should not render the component if text is blank', () => {
    const tree = shallow(<Button {...props} text="" />);
    expect(shallowToJson(tree)).toMatchSnapshot();
  });

  it('should render the component if onClick is undefined and type is submit', () => {
    const tree = shallow(<Button {...props} text={text} onClick={undefined} type="submit" />);
    expect(shallowToJson(tree)).toMatchSnapshot();
  });

  it('should not render the component if onClick is undefined and type not submit', () => {
    const tree = shallow(<Button {...props} text={text} onClick={undefined} type="button" />);
    expect(shallowToJson(tree)).toMatchSnapshot();
  });
});
