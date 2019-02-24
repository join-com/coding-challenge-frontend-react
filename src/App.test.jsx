import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { shallow } from "enzyme";

import App from './App';

const AppWithRouter = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

describe("The main app component", () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AppWithRouter />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should render the routes correctly', () => {
    const tree = shallow(<App />);
    const paths = tree.find(Route).reduce((map, route) => {
      const pathMap = { ...map };
      const componentProp = route.props().component;
      if (componentProp) {
        // The component is passed to Route as a component prop
        pathMap[route.prop('path')] = componentProp.name;
      } else {
        // The component is passed to Route as a render prop with routerProps as first argument
        const routerProps = {
          match: { params: { id: '94547' } },
          history: {},
          location: {},
        };
        const renderProp = route.props().render(routerProps);
        pathMap[route.prop('path')] = renderProp.type.name;
      }

      return pathMap;
    }, {});

    expect(paths['/']).toBe('MasterPage');
    expect(paths['/:id(\\d+)']).toBe('DetailPage');
    expect(paths['/:else']).toBe('NotFound');
  });
});
