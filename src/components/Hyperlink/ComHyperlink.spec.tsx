import * as React from 'react';
import { MemoryRouter } from 'react-router-dom'

import { mount } from 'enzyme';
import * as sinon from 'sinon';
import * as renderer from 'react-test-renderer';

import ComHyperlink from './ComHyperlink';


describe('ComHyperlink', () => {

    let node: any;
    let comp: any;

    beforeEach(() => {
        node = (<ComHyperlink to="/test">Test Link</ComHyperlink>);
        comp = mount(<MemoryRouter>{ node }</MemoryRouter>);
    });

    it('should render the component', () => {
        expect(comp.length).toBe(1);
    });

    it('should contain <a> element with a proper "href"', () => {
        const element = comp.find('a[href="/test"]');
        expect(element.length).toBe(1);
        expect(element.text()).toEqual('Test Link');
    });

    it('should scroll to window top when clicked', () => {
        const onClick = sinon.spy();
        const element = comp.find('a[href="/test"]');
        window.scrollTo = onClick;
        element.simulate('click');
        expect(onClick.calledOnceWith(0, 0)).toBeTruthy();
    });

    it('should match a snapshot', () => {
        const snapshot = renderer
            .create(<MemoryRouter>{ node }</MemoryRouter>)
            .toJSON();
        expect(snapshot).toMatchSnapshot();
    });

});
