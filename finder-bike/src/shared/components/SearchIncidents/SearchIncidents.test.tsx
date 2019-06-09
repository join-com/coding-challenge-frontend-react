import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import FormItem from './SearchIncidents';

describe('<SearchIncidents /> spec', () => {
  it('calls "onSubmit" prop on button click', () => {
    const mockData = { occurred_after: '', occurred_before: '', query: 'Bi' };
    const onSubmit = jest.fn();
    const { getByPlaceholderText, getByText } = render(
      <FormItem onSubmit={onSubmit} />
    );

    const titleNode = getByPlaceholderText(/Title/i);
    const occurredAfterNode = getByPlaceholderText(/From date/i);
    const occurredBeforeNode = getByPlaceholderText(/End date/i);
    const submitButtonNode = getByText(/Search/i);

    titleNode.value = 'Bi';
    occurredAfterNode.value = '07/07/2017';
    occurredBeforeNode.value = '01/01/2019';

    fireEvent.click(submitButtonNode);
    expect(onSubmit).toHaveBeenCalled();
    expect(onSubmit).toHaveBeenCalledWith(mockData, expect.any(Function));
  });
});
