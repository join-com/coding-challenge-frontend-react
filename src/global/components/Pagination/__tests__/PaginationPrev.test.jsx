import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import PaginationPrev from '../PaginationPrev';

const props = {
  totalPages: 3,
  pageNumber: 2,
};

describe('PaginationPrev', () => {
  it('should render the component for totalPages > 1 & pageNumber > 1', () => {
    const tree = shallow(<PaginationPrev {...props} />);
    expect(shallowToJson(tree)).toMatchSnapshot();
  });

  it('should not render the component for pageNumber = 1', () => {
    const tree = shallow(<PaginationPrev {...props} pageNumber={1} />);
    expect(shallowToJson(tree)).toMatchSnapshot();
  });

  it('should not render the component for totalPages = 1', () => {
    const tree = shallow(<PaginationPrev {...props} totalPages={1} />);
    expect(shallowToJson(tree)).toMatchSnapshot();
  });
});
