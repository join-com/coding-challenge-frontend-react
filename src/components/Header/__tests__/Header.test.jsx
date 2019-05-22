import React from 'react';
import { mount } from 'enzyme';
import { Header } from '../Header';

describe('Header', () => {
    it('should render correctly', () => {
        const button = <Header />;

        const mounted = mount(button);
        expect(mounted).toMatchSnapshot();
        mounted.unmount();
    });
});
