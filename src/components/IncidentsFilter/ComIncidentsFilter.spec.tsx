import * as React from 'react';
import { MemoryRouter } from 'react-router-dom'

import { mount } from 'enzyme';
import * as sinon from 'sinon';
import * as renderer from 'react-test-renderer';

import ComIncidentsFilter from './ComIncidentsFilter';

import * as CONFIG from '../../config';
import * as mocks from '../../../mocks';


describe('ComIncidentsFilter', () => {

    let node, comp, onSearch;

    beforeEach(() => {
        onSearch = sinon.spy();
        node = (
            <ComIncidentsFilter
                onSearch={ onSearch }
            />
        );
        comp = mount(<MemoryRouter>{ node }</MemoryRouter>);
    });

    it('should render the component', () => {
        expect(comp.length).toBe(1);
    });

    it('should perform a search for a given criteria', () => {
        comp.find('input[type="text"]').at(0).simulate('change', { target: { value: 'Lorem ipsum dolor sit amet' } });
        comp.find('input[type="text"]').at(1).simulate('change', { target: { value: '05/01/2019' } });
        comp.find('input[type="text"]').at(2).simulate('change', { target: { value: '05/30/2019' } });
        comp.find('button').simulate('click');

        expect(onSearch.calledOnceWith({
            page: 1,
            per_page: CONFIG.INCIDENTS_PAGE_SIZE,
            query: 'Lorem ipsum dolor sit amet',
            occurred_after: (new Date('05/01/2019')).getTime() / 1000,
            occurred_before: (new Date('05/30/2019')).getTime() / 1000
        })).toBeTruthy();
    });

    it('should match a snapshot', () => {
        const snapshot = renderer
            .create(<MemoryRouter>{ node }</MemoryRouter>)
            .toJSON();
        expect(snapshot).toMatchSnapshot();
    });

});
