// Core
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// Test utilities
import renderer from 'react-test-renderer';
import { IncidentsModel } from '../../../utils/__mocks__/testData';

// Component
import IncidentList from '../IncidentList';

describe('Component IncidentList:', () => {
  test('Must match snapshot:', () => {
    const { incidents } = new IncidentsModel();

    const incidentList = renderer
      .create(
        <BrowserRouter>
          <IncidentList
            incidents={incidents}
            currentPage={1}
            openPage={jest.fn}
          />
        </BrowserRouter>,
      )
      .toJSON();

    expect(incidentList).toMatchSnapshot();
  });
});
