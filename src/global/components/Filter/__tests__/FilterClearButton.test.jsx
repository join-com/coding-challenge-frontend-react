import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import FilterClearButton from '../FilterClearButton';

const props = {
  className: 'MyFilterClearButtonClassname',
  handleClearFilters: () => {},
};

describe('FilterClearButton', () => {
  it('should render the component correctly', () => {
    const tree = shallow(<FilterClearButton {...props} />);
    expect(shallowToJson(tree)).toMatchSnapshot();
  });
});
