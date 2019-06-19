import React from 'react';
import Pagination from './Pagination';
import { render, fireEvent } from '@testing-library/react';
import { withMockProviders } from '../helpers/MockProviders';

describe('Pagniate component', () => {
    const setCurrentPage = jest.fn(() => {})
    const { getByText } = render(
      withMockProviders(<Pagination pageCount={10} currentPage={1} setCurrentPage={setCurrentPage} />)
    )
    it('should contain middle element range', () => {
       getByText('5');
    })
    it('should call setCurrentPage on Click', () => {
      fireEvent.click(getByText('1'));
      expect(setCurrentPage.mock.calls).toMatchSnapshot();
    })
})