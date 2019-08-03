import React from 'react';
import { mount } from 'enzyme';

import { HeaderTextBlock } from './HeaderTextBlock';

describe('HeaderTextBlock', () => {
    it('should render correctly', () => {
        const component = <HeaderTextBlock />;

        const container = mount(component);
        expect(container).toMatchSnapshot();
        container.unmount();
    });
});
