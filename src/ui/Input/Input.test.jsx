import React from 'react';
import { mount } from 'enzyme';

import { Input } from './Input';

describe('Input', () => {
    test('should render correctly', () => {
        const component = <Input placeholder={'Enter your first name'} />;

        const mounted = mount(component);
        expect(mounted).toMatchSnapshot();
        mounted.unmount();
    });

    test('should expected value', () => {
        const component = <Input placeholder={'Enter your first name'} value={'Dmitry'} onChange={() => {}} />;
        const mounted = mount(component);
        expect(mounted.find('input').props().value).toEqual('Dmitry');
    });
});
