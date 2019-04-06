/* eslint-env jest */

// Core
import React from 'react';

// Test utilities
import renderer from 'react-test-renderer';

// Component
import Header from '../Header';

describe('Component Header:', () => {
  test('Must match snapshot:', () => {
    const header = renderer
      .create(<Header />)
      .toJSON();

    expect(header).toMatchSnapshot();
  });
});
