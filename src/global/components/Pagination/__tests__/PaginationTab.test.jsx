import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import PaginationTab from '../PaginationTab';

const props = {
  currentPageNumber: 3,
  pageNumber: 2,
};

describe('PaginationTab', () => {
  it('should render the component correctly', () => {
    const tree = shallow(<PaginationTab {...props} />);
    expect(shallowToJson(tree)).toMatchSnapshot();
  });

  it('should render a Button component with active state for pageNumber === currentNumber', () => {
    const tree = shallow(<PaginationTab {...props} pageNumber={3} />);
    expect(shallowToJson(tree)).toMatchSnapshot();
  });
});
