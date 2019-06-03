import React from 'react';
import { mount } from 'enzyme';

import { TotalPages } from './TotalPages';

describe('TotalPages', () => {
    it('should render correctly', () => {
        const component = <TotalPages />;

        const container = mount(component);
        expect(container).toMatchSnapshot();
        container.unmount();
    });
});
