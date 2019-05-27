import * as React from 'react';
import { MemoryRouter } from 'react-router-dom'

import { mount } from 'enzyme';
import * as sinon from 'sinon';
import * as renderer from 'react-test-renderer';

import ComIncidents from './ComIncidents';

import * as mocks from '../../../mocks';


describe('ComIncidents', () => {

    let node, comp, onNavigate;

    beforeEach(() => {
        onNavigate = sinon.spy();
        node = (
            <ComIncidents 
                data={{ pagination: {...mocks.pagination, page_size: 4}, collection: [mocks.incident, mocks.incident, mocks.incident, mocks.incident] }}
                base="/test"
                onNavigate={ onNavigate }
                />
        );
        comp = mount(<MemoryRouter>{ node }</MemoryRouter>);
    });

    it('should render the component', () => {
        expect(comp.length).toBe(1);
        expect(comp.find('.IncIncident').length).toBe(4);
    });

    it('should render passed incidents', () => {
       expect(comp.find('.IncIncident').length).toBe(4);
    });

    it('should navigate to other page', () => {
        const element = comp.find('li.page-item.link').at(2).find('a');
        window.scrollTo = () => {};
        element.simulate('click');
        expect(element.length).toBe(1);
        expect(onNavigate.calledOnceWith('/test/1')).toBeTruthy();
    });

    it('should match a snapshot', () => {
        const snapshot = renderer
            .create(<MemoryRouter>{ node }</MemoryRouter>)
            .toJSON();
        expect(snapshot).toMatchSnapshot();
    });

});
