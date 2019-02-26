import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import FilterDateRange from '../index';

const props = {
  filter: {
    name: 'myPropertyName',
    type: 'date',
    from: 'myParamNameFrom',
    to: 'myParamNameTo',
    format: 'YYYY-MM-DD',
    labelFrom: 'MyFilterInputLabel From',
    labelTo: 'MyFilterInputLabel To',
    placeholderFrom: 'My Filter Input Placeholder From',
    placeholderTo: 'My Filter Input Placeholder To',
  },
  value: {
    from: 1543309200,
    to: 1553309200,
  },
  className: 'MyFilterClassname',
  handleFiltersChange: () => {},
};

describe('FilterDateRange', () => {
  it('should render the component correctly', () => {
    const tree = shallow(<FilterDateRange {...props} />);
    expect(shallowToJson(tree)).toMatchSnapshot();
  });
});
