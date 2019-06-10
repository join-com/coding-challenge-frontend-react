import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Form from './Form';
import FormItem from './Form.Item';
import Input from '../../ui-kits/Input/Input';

it('calls "onSubmit" prop on button click', () => {
  const onSubmit = jest.fn();
  const { getByTestId, getByText } = render(
    <Form onSubmit={onSubmit}>
      <FormItem>
        <Input
          data-testid="username-input"
          placeholder="Username..."
          name="username"
        />
      </FormItem>
      <button type="submit">Submit</button>
    </Form>
  );

  const inputNode = getByTestId(/username-input/i);
  const submitButtonNode = getByText(/submit/i);

  inputNode.value = 'Jack';
  fireEvent.click(submitButtonNode);
  expect(onSubmit).toHaveBeenCalled();
  expect(onSubmit).toHaveBeenCalledWith(
    { username: 'Jack' },
    expect.any(Function)
  );
});
