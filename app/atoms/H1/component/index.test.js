import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import H1 from './';

Enzyme.configure({ adapter: new Adapter() });

describe('<H1 />', () => {
  it('should render a prop', () => {
    const id = 'testId';
    const renderedComponent = shallow(
      <H1 id={id} />
    );
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should render its text', () => {
    const children = 'Text';
    const renderedComponent = shallow(
      <H1>{children}</H1>
    );
    expect(renderedComponent.contains(children)).toBe(true);
  });
});
