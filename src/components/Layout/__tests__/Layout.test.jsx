import React from 'react';
import { mount } from 'enzyme';
import { Layout } from '../Layout';

describe('Layout', () => {
    it('should render correctly', () => {
        const layout = (
            <Layout>
                <div>Layout test</div>
            </Layout>
        );

        const mounted = mount(layout);
        expect(mounted).toMatchSnapshot();
        mounted.unmount();
    });
});
