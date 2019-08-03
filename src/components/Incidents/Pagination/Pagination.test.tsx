import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import 'jest-styled-components';

import { Pagination, BoundButton, IProps, NumberButton, CurrentPageButton } from './Pagination';
import { Button } from 'ui/Button';

describe('Pagination', () => {
    let component: React.ReactElement;
    let container: ReactWrapper;

    const inititalProps: IProps = {
        totalPages: 15,
        currentPage: 7,
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

    describe('Pagination count of buttons when totalPage is zero', () => {
        beforeEach(() => {
            initComponent({ ...inititalProps, totalPages: 0 });
            container = mount(component);
        });

        test('should render 1 simple buttons', () => {
            expect(container.find(Button).length).toEqual(1);
        });

        test('should render 0 number buttons', () => {
            expect(container.find(NumberButton).length).toEqual(0);
        });

        test('should render 1 current page button', () => {
            expect(container.find(CurrentPageButton).length).toEqual(1);
        });

        test('should render 0 bound buttons', () => {
            expect(container.find(BoundButton).length).toEqual(0);
        });
	});

    describe('Pagination count of buttons a few pages', () => {
        beforeEach(() => {
            initComponent({ ...inititalProps, currentPage: 1, totalPages: 2 });
            container = mount(component);
        });

        test('should render 4 simple buttons', () => {
            expect(container.find(Button).length).toEqual(4);
        });

        test('should render 1 number buttons', () => {
            expect(container.find(NumberButton).length).toEqual(1);
        });

        test('should render 1 current page button', () => {
            expect(container.find(CurrentPageButton).length).toEqual(1);
        });

        test('should render 1 bound buttons', () => {
            expect(container.find(BoundButton).length).toEqual(1);
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

        test('should render 4 number buttons', () => {
            expect(container.find(NumberButton).length).toEqual(4);
        });

        test('should render 1 current page button', () => {
            expect(container.find(CurrentPageButton).length).toEqual(1);
        });

        test('should render 2 bound buttons', () => {
            expect(container.find(BoundButton).length).toEqual(2);
        });
    });

    describe('Pagination count of buttons in the begin', () => {
        beforeEach(() => {
            initComponent({ ...inititalProps, currentPage: 1 });
            container = mount(component);
        });

        it('should render 5 simple buttons', () => {
            expect(container.find(Button).length).toEqual(5);
        });

        test('should render 2 number buttons', () => {
            expect(container.find(NumberButton).length).toEqual(2);
        });

        test('should render 1 current page button', () => {
            expect(container.find(CurrentPageButton).length).toEqual(1);
        });

        it('should render 1 bound buttons', () => {
            expect(container.find(BoundButton).length).toEqual(1);
        });
    });

    describe('Pagination count of buttons in the end', () => {
        beforeEach(() => {
            initComponent({ ...inititalProps, currentPage: 15 });
            container = mount(component);
        });

        it('should render 5 simple buttons', () => {
            expect(container.find(Button).length).toEqual(5);
        });

        test('should render 2 number buttons', () => {
            expect(container.find(NumberButton).length).toEqual(2);
        });

        test('should render 1 current page button', () => {
            expect(container.find(CurrentPageButton).length).toEqual(1);
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

            expect(clickFn.mock.calls[0][1]).toBe(1);
        });

        it('should change to last page', () => {
            container
                .find(BoundButton)
                .at(1)
                .simulate('click');

            expect(clickFn.mock.calls.length).toBe(1);

            expect(clickFn.mock.calls[0][1]).toBe(15);
        });

        it('should change to 5 number page', () => {
            container
                .find(NumberButton)
                .at(0)
                .simulate('click');

            expect(clickFn.mock.calls.length).toBe(1);

            expect(clickFn.mock.calls[0][1]).toBe(5);
        });

        it('should change to 9 number page', () => {
            container
                .find(NumberButton)
                .at(3)
                .simulate('click');

            expect(clickFn.mock.calls.length).toBe(1);

            expect(clickFn.mock.calls[0][1]).toBe(9);
        });

        it("should don't change number page", () => {
            container
                .find(CurrentPageButton)
                .at(0)
                .simulate('click');

            expect(clickFn.mock.calls.length).toBe(0);
        });
    });
});
