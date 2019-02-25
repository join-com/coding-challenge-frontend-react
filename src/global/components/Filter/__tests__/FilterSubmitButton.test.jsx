import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import FilterSubmitButton from '../FilterSubmitButton';

const props = {
  className: 'MyFilterSubmitButtonClassname',
};

describe('FilterSubmitButton', () => {
  it('should render the component correctly', () => {
    const tree = shallow(<FilterSubmitButton {...props} />);
    expect(shallowToJson(tree)).toMatchSnapshot();
  });
});
