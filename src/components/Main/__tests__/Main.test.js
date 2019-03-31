// Core
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// Test utilities
import renderer from 'react-test-renderer';

// Component
import Main from '../Main';

describe('Component Main:', () => {
  test('Must match snapshot:', () => {
    const main = renderer
      .create(
        <BrowserRouter>
          <Main />
        </BrowserRouter>,
      )
      .toJSON();

    expect(main).toMatchSnapshot();
  });
});
