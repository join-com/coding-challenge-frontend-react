import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import UnauthorizedRoute from './';

Enzyme.configure({ adapter: new Adapter() });

const routerMock = require('react-router-dom');
routerMock.Redirect = (props) => <redirect {...props} />;
routerMock.Route = (props) => <route {...props} />;

describe('<UnauthorizedRoute />', () => {
  let component;
  let wrapper;
  const dummyName = 'dummy-name';
  const Dummy = (props) => (<dummy {...props}>Dummy content</dummy>);

  describe('NOT authenticated', () => {
    const dummyClass = 'dummy-class';

    beforeEach(() => {
      wrapper = shallow(<UnauthorizedRoute authenticated={false} component={Dummy} name={dummyName} />);
      component = shallow(wrapper.prop('render')({ className: dummyClass }));
    });

    it('renders the component', () => {
      expect(component.type()).toBe('dummy');
      expect(component.prop('name')).toBe(dummyName);
      expect(component.prop('className')).toBe(dummyClass);
    });
  });

  describe('authenticated', () => {
    const location = 'current location';

    beforeEach(() => {
      wrapper = shallow(<UnauthorizedRoute authenticated name={dummyName} />);
      component = shallow(wrapper.prop('render')({ location }));
    });

    it('redirects to the home page', () => {
      expect(component.type()).toBe('redirect');
      expect(component.prop('to')).toEqual({
        pathname: '/',
        state: { from: location },
      });
    });
  });

  afterEach(() => {
    expect(wrapper.type()).toEqual(routerMock.Route);
    expect(wrapper.prop('name')).toBe(dummyName);
  });
});
