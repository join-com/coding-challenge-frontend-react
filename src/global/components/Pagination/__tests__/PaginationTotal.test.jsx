import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import PaginationTotal from '../PaginationTotal';

const props = {
  dataPagination: {
    totalElements: 23,
  },
};

describe('PaginationTotal', () => {
  it('should render the component correctly', () => {
    const tree = shallow(<PaginationTotal {...props} />);
    expect(shallowToJson(tree)).toMatchSnapshot();
  });
});
