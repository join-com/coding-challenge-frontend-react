import React from 'react';
import { mount } from 'enzyme';

import { EmptyResults } from './EmptyResults';

describe('EmptyResults', () => {
    it('should render correctly', () => {
        const component = <EmptyResults />;

        const container = mount(component);
        expect(container).toMatchSnapshot();
        container.unmount();
    });
});
