import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import PaginationLast from '../PaginationLast';

const props = {
  totalPages: 3,
  pageNumber: 2,
};

describe('PaginationLast', () => {
  it('should render the component for totalPages > 1 & pageNumber < totalPages', () => {
    const tree = shallow(<PaginationLast {...props} />);
    expect(shallowToJson(tree)).toMatchSnapshot();
  });

  it('should not render the component for pageNumber = totalPages', () => {
    const tree = shallow(<PaginationLast {...props} pageNumber={3} />);
    expect(shallowToJson(tree)).toMatchSnapshot();
  });

  it('should not render the component for totalPages = 1', () => {
    const tree = shallow(<PaginationLast {...props} totalPages={1} />);
    expect(shallowToJson(tree)).toMatchSnapshot();
  });
});
