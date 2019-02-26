import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import FilterDateRange from '../index';

const props = {
  filter: {
    label: 'MyFilterInputLabel',
    name: 'myFilterInputName',
    placeholder: 'My Filter Input Placeholder',
    type: 'date',
  },
  value: 'MyFilterValue',
  className: 'MyFilterClassname',
  handleFiltersChange: () => {},
};

describe('FilterDateRange', () => {
  it('should render the component correctly', () => {
    const tree = shallow(<FilterDateRange {...props} />);
    expect(shallowToJson(tree)).toMatchSnapshot();
  });
});
