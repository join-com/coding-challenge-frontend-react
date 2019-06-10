import React from 'react';
import { render } from '@testing-library/react';
import FormItem from './Form.Item';

describe('<FormItem /> spec', () => {
  it('renders the component', () => {
    const component = render(<FormItem>Hello</FormItem>);
    expect(component).toMatchSnapshot();
  });
});
