// Core
import React from 'react';

// Test utilities
import renderer from 'react-test-renderer';

// Component
import SearchPanel from '../SearchPanel';

describe('Component SearchPanel:', () => {
  test('Must match snapshot:', () => {
    const searchPanel = renderer
      .create(<SearchPanel isDataLoading={false} onFind={jest.fn} />)
      .toJSON();

    expect(searchPanel).toMatchSnapshot();
  });
});
