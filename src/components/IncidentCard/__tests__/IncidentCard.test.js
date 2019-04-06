/* eslint-env jest */

// Core
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// Test utilities
import renderer from 'react-test-renderer';
import { IncidentModel } from '../../../utils/__mocks__/testData';

// Component
import IncidentCard from '../IncidentCard';

describe('Component IncidentCard:', () => {
  test('Must match snapshot:', () => {
    const { incident } = new IncidentModel({ id: 83629 });

    const incidentCard = renderer
      .create(
        <BrowserRouter>
          <IncidentCard incident={incident} />
        </BrowserRouter>,
      )
      .toJSON();

    expect(incidentCard).toMatchSnapshot();
  });
});
