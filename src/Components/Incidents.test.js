import React from 'react';
import Incidents from './Incidents';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const component = renderer.create(<Incidents />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
