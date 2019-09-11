import React from 'react';
import { mount } from 'enzyme';

import { SearchPanel } from './SearchPanel';

describe('SearchPanel', () => {
    it('should render correctly', () => {
        const component = <SearchPanel submit={() => {}} />;

        const container = mount(component);
        expect(container).toMatchSnapshot();
        container.unmount();
    });
});
