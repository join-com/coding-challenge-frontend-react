import React from 'react';
import { shallow } from 'enzyme';

import { Header } from './Header';

describe('Header', () => {
    it('should render correctly', () => {
        const component = <Header />;

        const container = shallow(component);
        expect(container).toMatchSnapshot();
        container.unmount();
    });
});
