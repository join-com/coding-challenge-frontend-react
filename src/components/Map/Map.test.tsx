import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import { Map } from './Map';

describe('Map', () => {
    test('should render correctly', () => {
        const container = shallow(<Map coordinates={{ lng: 13.4275004, lat: 52.4890809 }} />);
        expect(container).toMatchSnapshot();
    });
});
