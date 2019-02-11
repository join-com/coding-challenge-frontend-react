import React from 'react';
import toJson from 'enzyme-to-json';

import Counter from './index';

/* global shallow, jest, mount */
describe('<Counter />', () => {
    const testText = 0;

    it('should render Counter', () => {
        const wrapper = mount(<Counter>{ testText }</Counter>);

        expect(wrapper.text()).toEqual(`Total: ${testText}`);
    });

    it('should has appropriate className', () => {
        const wrapper = mount(<Counter>{ testText }</Counter>);

        expect(wrapper.find('div.c-counter').exists()).toBe(true);
    });

    it('should not render empty component', () => {
        const wrapper = shallow(<Counter />);

        expect(wrapper.type()).toBe(null);
    });

    it('should matches the snapshot', () => {
        const tree = mount(<Counter>{ testText }</Counter>);

        expect(toJson(tree)).toMatchSnapshot();
    });
});
