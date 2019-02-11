import React from 'react';
import toJson from 'enzyme-to-json';

import Input from './index';

/* global shallow, jest, mount */
describe('<Input />', () => {
    it('should render Input', () => {
        const wrapper = mount(<Input type="text" />);

        expect(wrapper.find('input')).toHaveLength(1);
    });

    it('should render Input type  but not :) text', () => {
        const wrapper = mount(<Input type="date" />);

        expect(wrapper.find('input').prop('type')).toBe('text');
    });

    it('should matches the snapshot', () => {
        const tree = mount(<Input />);

        expect(toJson(tree)).toMatchSnapshot();
    });
});
