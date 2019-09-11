import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import { IncidentsScene } from '../IncidentsScene';

describe('IncidentsScene', () => {
    const initialState = {
        incidents: {
            incidents: {},
            requesting: false,
            error: false,
            currentPage: 1,
        },
    };
    const mockStore = configureStore();

    it('should render correctly', () => {
        const store = mockStore(initialState);
        // @ts-ignore
        const container = shallow(<IncidentsScene store={store} />);
        expect(container).toMatchSnapshot();
        container.unmount();
    });
});
