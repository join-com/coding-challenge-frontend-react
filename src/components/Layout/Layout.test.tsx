import React from 'react';
import { mount } from 'enzyme';

import { Layout } from '../Layout';

describe('Layout', () => {
    it('should render correctly', () => {
        const component = (
            <Layout>
                <div>Layout test</div>
            </Layout>
        );

        const container = mount(component);
        expect(container).toMatchSnapshot();
        container.unmount();
    });
});
