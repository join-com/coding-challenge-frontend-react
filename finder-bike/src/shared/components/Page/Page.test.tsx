import React from 'react';
import { render } from '@testing-library/react';
import Page from './Page';

describe('<Page /> spec', () => {
  it('renders the component', () => {
    const component = render(
      <Page
        pageSize={10}
        currentPage={5}
        totalItems={100}
        maxPages={5}
        onClick={jest.fn}
      />
    );
    expect(component).toMatchSnapshot();
  });
});
