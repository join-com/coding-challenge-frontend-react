import React from 'react';
import { mount } from 'enzyme';

import { Button } from './Button';

describe('MyComponent', () => {
    test('should render correctly', () => {
        const button = <Button onClick={() => {}}>Next page</Button>;

        const mounted = mount(button);
        expect(mounted).toMatchSnapshot();
        mounted.unmount();
    });

    test('should clicked', () => {
        const clickFn = jest.fn();
        const component = mount(<Button onClick={clickFn} />);
        component.find(Button).simulate('click');
        expect(clickFn).toHaveBeenCalled();
    });
});
