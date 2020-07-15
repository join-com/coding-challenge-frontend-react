import * as React from 'react';

import { shallow } from 'enzyme';
import * as renderer from 'react-test-renderer';

import ComPreloader from './ComPreloader';


describe('ComPreloader', () => {

    let comp: any;
    let node: any;

    beforeEach(() => {
        node = (<ComPreloader loading={false} />);
        comp = shallow(node);
    });

    it('should render an empty component', () => {
        expect(comp.length).toBe(1);
        expect(comp.html()).toBe(null);
    });

    it('should match a snapshot', () => {
        const snapshot = renderer
            .create(<ComPreloader loading={true} />)
            .toJSON();
        expect(snapshot).toMatchSnapshot();
    });

});
