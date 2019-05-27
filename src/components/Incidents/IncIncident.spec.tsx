import * as React from 'react';
import { MemoryRouter } from 'react-router-dom'
import * as moment from 'moment';

import { shallow } from 'enzyme';
import * as renderer from 'react-test-renderer';

import IncIncident from './IncIncident';

import * as mocks from '../../../mocks';


describe('IncIncident', () => {

    let node, comp;

    beforeEach(() => {
        node = (<IncIncident item={ mocks.incident } />);
        comp = shallow(node);
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
