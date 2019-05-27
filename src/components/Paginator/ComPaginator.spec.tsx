import * as React from 'react';
import { MemoryRouter } from 'react-router-dom'

import { mount } from 'enzyme';
import * as sinon from 'sinon';
import * as renderer from 'react-test-renderer';

import ComPaginator from './ComPaginator';

import * as mocks from '../../../mocks';


describe('ComPaginator', () => {

    let node: any;
    let comp: any;
    let onNavigate: any;

    beforeEach(() => {
        onNavigate = sinon.spy();
        node = (
            <ComPaginator
                urlPattern="/test/{page}"
                pagination={ mocks.pagination }
                onNavigate={ onNavigate }
            />
        );
        comp = mount(<MemoryRouter>{ node }</MemoryRouter>);
    });

    it('should render the component', () => {
        expect(comp.length).toBe(1);
    });

    it('should navigate to other page', () => {
        const element = comp.find('li.page-item.link').at(2).find('a');
        window.scrollTo = () => {};
        element.simulate('click');
        expect(element.length).toBe(1);
        expect(onNavigate.calledOnceWith(1)).toBeTruthy();
    });

    it('should match a snapshot', () => {
        const snapshot = renderer
            .create(<MemoryRouter>{ node }</MemoryRouter>)
            .toJSON();
        expect(snapshot).toMatchSnapshot();
    });

});
