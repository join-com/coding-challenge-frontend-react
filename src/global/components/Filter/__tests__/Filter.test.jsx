import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import Filter from '../Filter';

const props = {
  filters: [
    {
      label: 'MyFilterInputLAbel',
      name: 'myFilterInputName',
      placeholder: 'My Filter Input Placeholder',
      type: 'text',
    },
  ],
  filtersValues: {
    myFilterInputName: 'MyFilterValue',
  },
  className: 'MyFilterClassname',
};

describe('Filter', () => {
  it('should render the component correctly', () => {
    const tree = shallow(<Filter {...props} />);
    expect(shallowToJson(tree)).toMatchSnapshot();
  });
});
