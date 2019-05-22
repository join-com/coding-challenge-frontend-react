import React from 'react';
import { mount } from 'enzyme';
import { HeaderTextContainer } from '../HeaderTextContainer';

describe('HeaderTextContainer', () => {
    it('should render correctly', () => {
        const button = <HeaderTextContainer />;

        const mounted = mount(button);
        expect(mounted).toMatchSnapshot();
        mounted.unmount();
    });
});
