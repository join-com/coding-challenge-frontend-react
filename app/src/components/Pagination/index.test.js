import React from 'react';
import toJson from 'enzyme-to-json';

import Pagination from './index.js';

/* global shallow, jest, mount */
describe('<Pagination />', () => {
    const pages = 5;

    it('should render component', () => {
        const wrapper = mount(<Pagination pages={pages} />);

        expect(wrapper.find('.c-paginator').exists()).toBe(true);
    });

    it('should NOT render component', () => {
        const wrapper = mount(<Pagination />);

        expect(wrapper.find('PaginatorItem')).toHaveLength(0);
    });

    it('should render all Items and Next', () => {
        const wrapper = mount(<Pagination pages={pages} />);

        expect(wrapper.find('PaginatorItem')).toHaveLength(pages + 1);
    });

    it('should render all Items, Prev and Next', () => {
        const wrapper = mount(
            <Pagination
                pages={pages}
                activePage={2}
            />
        );

        expect(wrapper.find('PaginatorItem')).toHaveLength(pages + 2);
    });

    it('should render all Items only', () => {
        const wrapper = mount(
            <Pagination
                isNavigation={false}
                pages={pages}
                activePage={2}
            />
        );

        expect(wrapper.find('PaginatorItem')).toHaveLength(pages);
    });

    it('should set activePage as expected', () => {
        const wrapper = mount(
            <Pagination
                pages={pages}
                activePage={pages}
            />
        );

        expect(wrapper.find('.is-active').text()).toBe(String(pages));
    });

    it('should matches the snapshot', () => {
        const tree = mount(<Pagination pages={pages} />);
        expect(toJson(tree)).toMatchSnapshot();
    });
});
