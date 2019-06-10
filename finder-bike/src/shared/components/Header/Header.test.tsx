import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

describe('<Header /> spec', () => {
  it('renders the component', () => {
    const component = render(<Header />);
    expect(component).toMatchSnapshot();
  });
});
