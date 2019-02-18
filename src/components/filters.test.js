import Filters from './Filters';
import renderer from 'react-test-renderer';
import React from 'react';

describe('<Fillters> tests', () => {
  const props = {
    onUpdateSearchParams: undefined,
    occurred_after: undefined,
    occurred_before: undefined,
    query: undefined
  };
  beforeEach(() => {
    props.onUpdateSearchParams = jest.fn();
    props.occurred_after = 1540400215; //Wed Oct 24 2018 22:26:55 GMT+0530 (India Standard Time)
    props.occurred_before = 1550501335; //Mon Feb 18 2019 20:18:55 GMT+0530 (India Standard Time)
    props.query = '';

    Date.now = jest.fn(() => 1550501335275);
  });
  it('should match with the snapshot', () => {
    const component = renderer.create(
      <Filters
        onUpdateSearchParams={props.onUpdateSearchParams}
        occurred_after={props.occurred_after}
        occurred_before={props.occurred_before}
        query={props.query}
      />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    tree.props.query = 'hello world';
    expect(tree).toMatchSnapshot();
  });

  it('should call the update handler', () => {
    const component = renderer.create(
      <Filters
        onUpdateSearchParams={props.onUpdateSearchParams}
        occurred_after={props.occurred_after}
        occurred_before={props.occurred_before}
        query={props.query}
      />,
      {
        createNodeMock: element => {
          if (element.type === 'input') {
            return {
              current: {
                value: 1234
              }
            };
          }
        }
      }
    );
    let tree = component.root;

    tree
      .find(element => element.type === 'form')
      .props.onSubmit({ preventDefault: jest.fn() });

    expect(props.onUpdateSearchParams).toHaveBeenCalled();
  });
});
