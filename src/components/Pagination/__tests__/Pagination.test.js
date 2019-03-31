// Core
import React from 'react';

// Test utilities
import renderer from 'react-test-renderer';

// Component
import Pagination from '../Pagination';

describe('Component Pagination:', () => {
  test('Must match snapshot:', () => {
    const pagination = renderer
      .create(<Pagination
        totalRecords={3}
        currentPage={1}
        openPage={jest.fn}
      />)
      .toJSON();

    expect(pagination).toMatchSnapshot();
  });
});
