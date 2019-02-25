import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import InputText from '../InputText';

const props = {
  className: 'MyInputClass',
  name: 'myInputName',
  label: 'My Input Label',
  type: 'text',
  value: 'My String Value',
  onChange: () => {},
  onBlur: () => {},
};

describe('InputText', () => {
  it('should render the component correctly with type text', () => {
    const tree = shallow(<InputText {...props} />);
    expect(shallowToJson(tree)).toMatchSnapshot();
  });
});
