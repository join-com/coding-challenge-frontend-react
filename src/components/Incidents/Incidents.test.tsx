import React from 'react';
import { shallow } from 'enzyme';

import { Incidents } from './Incidents';

describe('Incidents', () => {
    it('should render correctly', () => {
        const component = <Incidents incidents={[]} />;

        const container = shallow(component);
        expect(container).toMatchSnapshot();
        container.unmount();
    });
});
