import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('<Button /> spec', () => {
  it('renders the component', () => {
    const component = render(<Button color="primary">Hello</Button>);
    expect(component).toMatchSnapshot();
  });

  it('calls "onClick" prop on button click', () => {
    // Render new instance in every test to prevent leaking state
    const onClick = jest.fn();
    const { getByText } = render(
      <Button color="primary" onClick={onClick}>
        Hello with click
      </Button>
    );

    fireEvent.click(getByText(/Hello with click/i));
    expect(onClick).toHaveBeenCalled();
  });
});
