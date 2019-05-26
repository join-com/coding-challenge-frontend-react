import React from 'react';
import { mount } from 'enzyme';

import { HeaderTextContainer } from '../HeaderTextContainer';

describe('HeaderTextContainer', () => {
    it('should render correctly', () => {
        const component = <HeaderTextContainer />;

        const container = mount(component);
        expect(container).toMatchSnapshot();
        container.unmount();
    });
});
