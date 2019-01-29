import React from 'react';
import { shallow } from 'enzyme';
import Header from './header';

describe('MyComponent', () => {
    it('Header should render correctly', () => {
        const component = shallow(<Header />);

        expect(component).toMatchSnapshot();
    });
});