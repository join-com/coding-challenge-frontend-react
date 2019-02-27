import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import Pagination from '../Pagination';

const props = {
  dataPagination: {
    totalPages: 3,
    page: 1,
  },
};

describe('Pagination', () => {
  it('should render the component and pass the totalPages & page props correctly', () => {
    const tree = shallow(<Pagination {...props} />);
    expect(shallowToJson(tree)).toMatchSnapshot();
  });
});
