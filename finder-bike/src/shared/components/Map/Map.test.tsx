import React from 'react';
import { render } from '@testing-library/react';
import { Map } from './Map';

describe('<Map /> spec', () => {
  it('renders the component', () => {
    const component = render(<Map coordinates={{ lat: 10, lng: 10 }} />);
    expect(component).toMatchSnapshot();
  });
});
