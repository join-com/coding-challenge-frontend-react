import { shallow } from 'enzyme';
import React from 'react';

import { CasesListUI, handlePageChange, renderItem } from './cases-list';

const mockProps = {
  data: {
    loading: false,
    value: {
      list: [],
      total: 0,
    },
  },
  page: { value: 1, set: jest.fn() },
  pageSize: 3,
};

it('renders without crashing', () => {
  const wrapper = shallow(<CasesListUI {...mockProps} />);
  expect(wrapper).toMatchSnapshot();
});

it('renders with error state', () => {
  const props = { ...mockProps, data: { ...mockProps.data, value: undefined, error: new Error() } };
  const wrapper = shallow(<CasesListUI {...props} />);
  expect(wrapper).toMatchSnapshot();
});

it('renders item', () => {
  const props = { id: 1, image: 'url', title: 'title', description: 'desc', content: 'address' };
  const wrapper = shallow(renderItem(props));
  expect(wrapper).toMatchSnapshot();
});

it('handlePageChange calls setPage', () => {
  const mockSetPage = jest.fn();
  const handleChange = handlePageChange(mockSetPage);

  handleChange(3);
  expect(mockSetPage).toBeCalledWith(3);
});
