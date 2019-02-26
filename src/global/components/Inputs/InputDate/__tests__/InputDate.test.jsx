import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import InputDate from '../InputDate';

const props = {
  className: 'MyInputClass',
  name: 'myInputName',
  label: 'My Input Label',
  value: 'My Date Value',
  onChange: () => {},
  onBlur: () => {},
};

describe('InputDate', () => {
  it('should render the component correctly with type date', () => {
    const tree = shallow(<InputDate {...props} />);
    expect(shallowToJson(tree)).toMatchSnapshot();
  });
});
