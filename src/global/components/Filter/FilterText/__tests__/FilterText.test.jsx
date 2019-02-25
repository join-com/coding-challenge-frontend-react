import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import FilterText from '../index';

const props = {
  filter: {
    label: 'MyFilterInputLAbel',
    name: 'myFilterInputName',
    placeholder: 'My Filter Input Placeholder',
    type: 'text',
  },
  value: 'MyFilterValue',
  className: 'MyFilterClassname',
  handleFiltersChange: () => {},
};

describe('FilterText', () => {
  it('should render the component correctly', () => {
    const tree = shallow(<FilterText {...props} />);
    expect(shallowToJson(tree)).toMatchSnapshot();
  });
});
