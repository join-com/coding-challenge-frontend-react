// Core
import React from 'react';

// Test utilities
import renderer from 'react-test-renderer';

// Component
import Map from '../Map';

describe('Component Map:', () => {
  test('Must match snapshot:', () => {
    const map = renderer
      .create(<Map center={{ lat: 45.5164386, lng: -122.6244177 }} />)
      .toJSON();

    expect(map).toMatchSnapshot();
  });
});
