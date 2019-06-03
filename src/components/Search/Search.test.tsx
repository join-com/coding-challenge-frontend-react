import React from 'react';
import { mount } from 'enzyme';

import { Search } from './Search';

describe('Search', () => {
    it('should render correctly', () => {
        const component = <Search submit={() => {}} />;

        const container = mount(component);
        expect(container).toMatchSnapshot();
        container.unmount();
    });
});
