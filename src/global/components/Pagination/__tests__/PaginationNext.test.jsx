import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import PaginationNext from '../PaginationNext';

const props = {
  totalPages: 3,
  pageNumber: 2,
};

describe('PaginationNext', () => {
  it('should render the component for totalPages > 1 & pageNumber < totalPages', () => {
    const tree = shallow(<PaginationNext {...props} />);
    expect(shallowToJson(tree)).toMatchSnapshot();
  });

  it('should not render the component for pageNumber = totalPages', () => {
    const tree = shallow(<PaginationNext {...props} pageNumber={3} />);
    expect(shallowToJson(tree)).toMatchSnapshot();
  });

  it('should not render the component for totalPages = 1', () => {
    const tree = shallow(<PaginationNext {...props} totalPages={1} />);
    expect(shallowToJson(tree)).toMatchSnapshot();
  });
});
