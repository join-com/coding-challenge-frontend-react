import React from 'react';
import { mount } from 'enzyme';

import { Error } from '../Error';

describe('Error', () => {
    it('should render correctly', () => {
        const component = <Error />;

        const container = mount(component);
        expect(container).toMatchSnapshot();
        container.unmount();
    });
});
