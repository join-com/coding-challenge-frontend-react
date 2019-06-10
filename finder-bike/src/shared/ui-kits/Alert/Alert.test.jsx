import React from 'react';
import { render } from '@testing-library/react';
import Alert from './Alert';

describe('<Alert /> spec', () => {
  it('renders the component', () => {
    const component = render(<Alert color="primary">Hello</Alert>);
    expect(component).toMatchSnapshot();
  });
});
