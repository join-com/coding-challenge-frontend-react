import React from 'react';
import { render } from '@testing-library/react';
import Input from './Input';

describe('<Input /> spec', () => {
  it('renders the component', () => {
    const component = render(<Input onChange={jest.fn} defaultValue="hello" />);
    expect(component).toMatchSnapshot();
  });
});
