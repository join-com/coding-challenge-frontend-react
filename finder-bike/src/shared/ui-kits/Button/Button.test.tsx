import React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';

describe('<Button /> spec', () => {
  it('renders the component', () => {
    const component = render(<Button color="primary">Hello</Button>);
    expect(component).toMatchSnapshot();
  });
});
