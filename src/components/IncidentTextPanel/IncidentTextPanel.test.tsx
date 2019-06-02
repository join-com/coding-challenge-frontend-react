import React from 'react';
import { mount } from 'enzyme';

import { IncidentTextPanel } from './IncidentTextPanel';

describe('IncidentTextPanel', () => {
    it('should render correctly', () => {
        const component = <IncidentTextPanel />;

        const container = mount(component);
        expect(container).toMatchSnapshot();
        container.unmount();
    });
});
