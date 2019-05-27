import * as React from 'react';
import { MemoryRouter } from 'react-router-dom'

import { mount } from 'enzyme';
import * as renderer from 'react-test-renderer';

import IncAppHeader from './IncAppHeader';


describe('IncAppHeader', () => {

    let node: any;
    let comp: any;

    beforeEach(() => {
        node = (
            <IncAppHeader
                logo="/test/logo.png"
                title="Lorem Ppsum"
                subtitle="dolor sit amet..."
                />
        );
        comp = mount(<MemoryRouter>{ node }</MemoryRouter>);
    });

    it('should render the component', () => {
        expect(comp.length).toBe(1);
    });

    it('should match a snapshot', () => {
        const snapshot = renderer
            .create(<MemoryRouter>{ node }</MemoryRouter>)
            .toJSON();
        expect(snapshot).toMatchSnapshot();
    });

});
