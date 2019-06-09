import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Input from './Input';

describe('<Input /> spec', () => {
  it('renders the component', () => {
    const component = render(<Input onChange={jest.fn} defaultValue="hello" />);
    expect(component).toMatchSnapshot();
  });

  it('calls "onChange" prop on button click', () => {
    // Render new instance in every test to prevent leaking state
    const onChange = jest.fn();
    const { getByTestId } = render(
      <Input onChange={onChange} data-testid="username" />
    );

    const usernameText = getByTestId(/username/i);
    fireEvent.change(usernameText, { target: { value: 'Jack' } });
    expect(usernameText.value).toEqual('Jack');
  });
});
