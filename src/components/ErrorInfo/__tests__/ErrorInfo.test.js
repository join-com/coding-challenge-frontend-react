// Core
import React from 'react';

// Test utilities
import renderer from 'react-test-renderer';

// Component
import ErrorInfo from '../ErrorInfo';

describe('Component ErrorInfo:', () => {
  test('Must match snapshot:', () => {
    const errorInfo = renderer
      .create(<ErrorInfo />)
      .toJSON();

    expect(errorInfo).toMatchSnapshot();
  });
});
