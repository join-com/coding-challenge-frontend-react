import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import Home from './Home';

afterEach(cleanup);

describe('<Home> specs', () => {
  test('can render with defaults', () => {
    const getIncidentsMock = jest.fn();
    const { getByText } = render(<Home getIncidents={getIncidentsMock} />);

    expect(getIncidentsMock).toHaveBeenCalled();
    expect(getByText('POLICE DEPARTMENT')).toBeTruthy();
  });

  test('can search with title & date start & date end', () => {
    const getIncidentsMock = jest.fn();
    const paramsMock = {
      incident_type: 'theft',
      occurred_after: undefined,
      occurred_before: undefined,
      page: 1,
      per_page: 10,
      proximity: 'Berlin',
      proximity_square: 30,
      query: 'Bi'
    };
    const { getByText, getByPlaceholderText } = render(
      <Home getIncidents={getIncidentsMock} />
    );

    const titleNode = getByPlaceholderText(/Title/i);
    const fromDateNode = getByPlaceholderText(/From date/i);
    const endDateNode = getByPlaceholderText(/End date/i);
    const submitNode = getByText(/Search/i);

    titleNode.value = 'Bi';
    fromDateNode.value = new Date().getTime();
    endDateNode.value = new Date().getTime();

    fireEvent.click(submitNode);

    expect(getIncidentsMock).toHaveBeenCalled();
    expect(getIncidentsMock).toHaveBeenCalledWith(paramsMock);
  });
});
