import React from 'react';
import { mount } from 'enzyme';

import { IncidentTextBlock } from './IncidentTextBlock';

describe('IncidentTextBlock', () => {
    it('should render correctly', () => {
        const component = <IncidentTextBlock />;

        const container = mount(component);
        expect(container).toMatchSnapshot();
        container.unmount();
    });
});
