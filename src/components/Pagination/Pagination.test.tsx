import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import 'jest-styled-components';

import { Pagination, BoundButton, IProps, NumberButton } from './Pagination';
import { Button } from 'ui/Button';

describe('Pagination', () => {
    let component: React.ReactElement;
    let container: ReactWrapper;

    const inititalProps: IProps = {
        totalPages: 18,
        current: 7,
        changePage: () => {},
    };

    function initComponent(props: IProps) {
        component = <Pagination {...props} />;
    }

    afterEach(() => {
        container.unmount();
    });

    describe('common', () => {
        test('should render correctly', () => {
            initComponent(inititalProps);
            container = mount(component);
            expect(container).toMatchSnapshot();
        });
    });

    describe('Pagination count of buttons in the middle', () => {
        beforeEach(() => {
            initComponent(inititalProps);
            container = mount(component);
        });

        test('should render 9 simple buttons', () => {
            expect(container.find(Button).length).toEqual(9);
        });

        test('should render 5 number buttons', () => {
            expect(container.find(NumberButton).length).toEqual(5);
        });

        test('should render 2 bound buttons', () => {
            expect(container.find(BoundButton).length).toEqual(2);
        });
    });

    describe('Pagination count of buttons in the begin', () => {
        beforeEach(() => {
            initComponent({ ...inititalProps, current: 1 });
            container = mount(component);
        });

        it('should render 5 simple buttons', () => {
            expect(container.find(Button).length).toEqual(5);
        });

        test('should render 3 number buttons', () => {
            expect(container.find(NumberButton).length).toEqual(3);
        });

        it('should render 1 bound buttons', () => {
            expect(container.find(BoundButton).length).toEqual(1);
        });
    });

    describe('Pagination count of buttons in the end', () => {
        beforeEach(() => {
            initComponent({ ...inititalProps, current: 18 });
            container = mount(component);
        });

        it('should render 5 simple buttons', () => {
            expect(container.find(Button).length).toEqual(5);
        });

        test('should render 3 number buttons', () => {
            expect(container.find(NumberButton).length).toEqual(3);
        });

        it('should render 1 bound buttons', () => {
            expect(container.find(BoundButton).length).toEqual(1);
        });
    });

    describe('Pagination check clicks', () => {
        let clickFn: jest.Mock;

        beforeEach(() => {
            clickFn = jest.fn();
            initComponent({ ...inititalProps, changePage: clickFn });
            container = mount(component);
        });

        it('should change to first page', () => {
            container
                .find(BoundButton)
                .at(0)
                .simulate('click');

            expect(clickFn.mock.calls.length).toBe(1);

            expect(clickFn.mock.calls[0][0]).toBe(1);
        });

        it('should change to last page', () => {
            container
                .find(BoundButton)
                .at(1)
                .simulate('click');

            expect(clickFn.mock.calls.length).toBe(1);

            expect(clickFn.mock.calls[0][0]).toBe(18);
        });

        it('should change to 6 number page', () => {
            container
                .find(BoundButton)
                .at(0)
                .simulate('click');

            expect(clickFn.mock.calls.length).toBe(1);

            expect(clickFn.mock.calls[0][0]).toBe(1);
        });

        it('should change to 5 number page', () => {
            container
                .find(NumberButton)
                .at(0)
                .simulate('click');

            expect(clickFn.mock.calls.length).toBe(1);

            expect(clickFn.mock.calls[0][0]).toBe(5);
        });

        it('should change to 9 number page', () => {
            container
                .find(NumberButton)
                .at(4)
                .simulate('click');

            expect(clickFn.mock.calls.length).toBe(1);

            expect(clickFn.mock.calls[0][0]).toBe(9);
        });

        it("should don't change number page", () => {
            container
                .find(NumberButton)
                .at(2)
                .simulate('click');

            expect(clickFn.mock.calls.length).toBe(0);
        });
    });
});
