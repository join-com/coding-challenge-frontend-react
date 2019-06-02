import React from 'react';
import { mount } from 'enzyme';

import { IncidentImage } from './IncidentImage';

describe('IncidentImage', () => {
    it('should render correctly', () => {
        const component = <IncidentImage />;

        const container = mount(component);
        expect(container).toMatchSnapshot();
        container.unmount();
    });
});
