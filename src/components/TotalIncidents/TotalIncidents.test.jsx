import React from 'react';
import { mount } from 'enzyme';

import { TotalIncidents } from './TotalIncidents';

describe('TotalIncidents', () => {
    it('should render correctly', () => {
        const component = <TotalIncidents totalIncidents={18} />;

        const container = mount(component);
        expect(container).toMatchSnapshot();
        container.unmount();
    });
});
