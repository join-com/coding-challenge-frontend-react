// Core
import React from 'react';

// Test utilities
import renderer from 'react-test-renderer';

// Component
import Case from '../Case';

describe('Component Case:', () => {
  test('Must match snapshot:', () => {
    const caseComponent = renderer
      .create(<Case />)
      .toJSON();

    expect(caseComponent).toMatchSnapshot();
  });
});
