import React from 'react';
import { render } from '@testing-library/react';
import Text from './Text';

describe('<Text /> spec', () => {
  it('renders the component', () => {
    const component = render(<Text>Hello</Text>);
    expect(component).toMatchSnapshot();
  });
});
