import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Route, Switch } from 'react-router-dom';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import DefaultTemplate from '../../../templates/default';

import NotFoundPage from '../../../pages/404-NotFound';
import HomePage from '../../../pages/Home';

import App from './';

Enzyme.configure({ adapter: new Adapter() });

const reactIcons = require('react-icons');
const defaultTheme = require('../defaultTheme');

describe('<App />', () => {
  const DUMMY_THEME = { dummyField: 'Dummy Theme' };
  let app;

  beforeEach(() => {
    reactIcons.IconContext = { Provider: 'iconContextProvider' };
    defaultTheme.default = DUMMY_THEME;
    app = shallow(<App />);
  });

  it('renders Material UI Theme Provider', () => {
    expect(app.type()).toEqual(MuiThemeProvider);
    expect(app.prop('theme')).toEqual(DUMMY_THEME);
  });

  it('sets the React icons default vertical alignment', () => {
    const iconContextProvider = app.find(reactIcons.IconContext.Provider).first();
    expect(iconContextProvider.prop('value')).toEqual({ style: { verticalAlign: 'middle' } });
  });

  describe('routes', () => {
    let routeSwitch;

    beforeEach(() => {
      routeSwitch = app.find(Switch).first();
    });

    const checkRoute = (description, index, path, isExactPathRequired, ContentComponent, RouteType) => {
      describe(description, () => {
        const className = 'component-class';
        let route;
        let template;

        beforeEach(() => {
          route = routeSwitch.childAt(index);
          const Template = route.prop('component');
          template = shallow(<Template className={className} />);
        });

        it('passes props to the content component', () => expect(template.prop('className')).toBe(className));
        it('uses the default template', () => expect(template.type()).toEqual(DefaultTemplate));
        it('uses a particular route type', () => expect(route.type()).toEqual(RouteType));
        it('renders on custom path', () => expect(route.prop('path')).toBe(path));
        it('renders the page content', () => expect(template.prop('component')).toEqual(ContentComponent));

        it(isExactPathRequired ? 'is activated on exact path match only' : 'does not require exact path match', () => {
          expect(route.prop('exact'))[isExactPathRequired ? 'toBeDefined' : 'toBeUndefined']();
        });
      });
    };

    checkRoute('home', 0, '/', true, HomePage, Route);
    checkRoute('not found', 1, '', false, NotFoundPage, Route);
  });
});
