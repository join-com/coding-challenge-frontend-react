import React from 'react';
import toJson from 'enzyme-to-json';

import Button from 'app/components/Button';

/* global shallow, jest */
describe('<Button />', () => {
    it('should render Button', () => {
        const wrapper = shallow(<Button />);
        expect(wrapper.find('button').exists()).toBe(true);
    });

    it('should render Button type button by default', () => {
        const wrapper = shallow(<Button />);
        expect(wrapper.find('button').prop('type')).toBe('button');
    });

    it('should render Button type submit', () => {
        const wrapper = shallow(<Button type="submit" />);
        expect(wrapper.find('button').prop('type')).toBe('submit');
    });

    it('should render Button type reset', () => {
        const wrapper = shallow(<Button type="reset" />);
        expect(wrapper.find('button').prop('type')).toBe('reset');
    });

    it('should render Button type reset', () => {
        const testText = 'test text';
        const wrapper = shallow(<Button>{ testText }</Button>);
        expect(wrapper.find('button').text()).toBe(testText);
    });

    it('should matches the snapshot', () => {
        const testText = 'test text for snapshot';
        const tree = shallow(<Button>{ testText }</Button>);
        expect(toJson(tree)).toMatchSnapshot();
    });

    it('should onClick works', () => {
        const handleClick = jest.fn();
        const wrapper = shallow(<Button onClick={handleClick} />);

        wrapper.find('button').simulate('click');
        expect(handleClick).toHaveBeenCalled();
    });
});