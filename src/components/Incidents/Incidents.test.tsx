import React from 'react';
import { shallow } from 'enzyme';

import { Incidents } from './Incidents';
import { incidents } from './__mocks__/incidents';

describe('Incidents', () => {
    it('should render correctly', () => {
        const component = <Incidents incidents={incidents} />;

        const container = shallow(component);
        expect(container).toMatchSnapshot();
        container.unmount();
    });
});
