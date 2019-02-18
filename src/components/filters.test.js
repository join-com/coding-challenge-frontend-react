import Filters from './Filters';
import renderer from 'react-test-renderer';
import React from 'react';

describe('<Fillters> tests', () => {
  let props;
  beforeEach(() => {
    props = {
      onUpdateSearchParams: jest.fn(),
      occurred_after: 1540400215, //Wed Oct 24 2018 22:26:55 GMT+0530 (India Standard Time)
      occurred_before: 1550501335, //Mon Feb 18 2019 20:18:55 GMT+0530 (India Standard Time)
      query: ''
    };
    Date.now = jest.fn(() => 1550501335275);
  });
  it('should match with the snapshot', () => {
    const component = renderer.create(<Filters props={props} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    tree.props.query = 'hello world';
    expect(tree).toMatchSnapshot();
  });
});
