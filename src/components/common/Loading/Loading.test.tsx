import React from 'react';
import { mount } from 'enzyme';

import { Loading } from './Loading';

describe('Loading', () => {
    it('should render correctly', () => {
        const component = <Loading />;

        const container = mount(component);
        expect(container).toMatchSnapshot();
        container.unmount();
    });
});
