import React from 'react';
import { mount, shallow } from 'enzyme';
import { Button } from '../Button';

describe('MyComponent', () => {
    it('should render correctly', () => {
        const button = <Button text={'Button test'} onClick={() => {}} />;

        const mounted = mount(button);
        expect(mounted).toMatchSnapshot();
        mounted.unmount();

        const clickFn = jest.fn();

        const component = shallow(<Button id={'button-id'} onClick={clickFn} />);
        component.find('#button-id').simulate('click');
        expect(clickFn).toHaveBeenCalled();
    });
});
