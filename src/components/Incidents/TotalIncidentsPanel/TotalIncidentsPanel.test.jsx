import React from 'react';
import { mount } from 'enzyme';

import { TotalIncidentsPanel } from './TotalIncidentsPanel';

describe('TotalIncidentsPanel', () => {
    it('should render correctly', () => {
        const component = <TotalIncidentsPanel totalIncidents={18} />;

        const container = mount(component);
        expect(container).toMatchSnapshot();
        container.unmount();
    });
});
