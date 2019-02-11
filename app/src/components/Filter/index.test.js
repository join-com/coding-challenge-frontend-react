import React from 'react';
import toJson from 'enzyme-to-json';

import Filter from './index';

/* global shallow, jest, mount */
describe('<Filter />', () => {
    it('should render Filter', () => {
        const wrapper = mount(<Filter />);

        expect(wrapper.find('Filter')).toHaveLength(1);
    });

    it('should submit form', () => {
        let formData;
        const handleSubmit = jest.fn(d => formData = d);
        const wrapper = mount(<Filter onSubmit={handleSubmit} />);

        wrapper.find('input[name="query"]').simulate('change', {
            target: {
                name: 'query',
                value: 'query'
            }
        });
        wrapper.find('input[name="occurred_after"]').simulate('change', {
            target: {
                name: 'occurred_after',
                value: 'occurred_after'
            }
        });
        wrapper.find('input[name="occurred_before"]').simulate('change', {
            target: {
                name: 'occurred_before',
                value: 'occurred_before'
            }
        });

        wrapper.find('form').simulate('submit');

        expect(handleSubmit).toHaveBeenCalled();
        expect(formData).toEqual({
            query: 'query',
            occurred_after: 'occurred_after',
            occurred_before: 'occurred_before'
        });
    });

    it('should matches the snapshot', () => {
        const tree = mount(<Filter />);

        expect(toJson(tree)).toMatchSnapshot();
    });
});
