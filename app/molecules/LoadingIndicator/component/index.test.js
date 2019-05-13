import React from 'react';
import Enzyme, { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import LoadingIndicator from './';

Enzyme.configure({ adapter: new Adapter() });

describe('<LoadingIndicator />', () => {
  it('should render 12 divs', () => {
    const renderedComponent = render(
      <LoadingIndicator />
    );
    expect(renderedComponent.find('div').length).toBe(12);
  });
});
