import React from 'react';
import { render } from '@testing-library/react';
import Icon from './Icon';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

describe('<Icon /> spec', () => {
  it('renders the component', () => {
    const component = render(<Icon icon={faCalendarAlt} />);
    expect(component).toMatchSnapshot();
  });
});
