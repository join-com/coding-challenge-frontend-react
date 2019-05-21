import React from 'react';
import { shallow, render, mount } from 'enzyme';
import { Button } from '../Button';

describe('MyComponent', () => {
    it('should render correctly in "debug" mode', () => {
        const button = <Button text={'test buttons'} onClick={() => {}} debug />;

        expect(shallow(button)).toMatchSnapshot();
        expect(render(button)).toMatchSnapshot();

        const mounted = mount(button);
        expect(mounted).toMatchSnapshot();
        mounted.unmount();

        const clickFn = jest.fn();

        const component = shallow(<Button onClick={clickFn} />);
        component.find('#my-button-two').simulate('click');
        expect(clickFn).toHaveBeenCalled();
    });
});
