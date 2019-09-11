import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import { IncidentDetailsScene } from '../IncidentDetailsScene';

describe('IncidentDetailsScene', () => {
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
        const container = shallow(<IncidentDetailsScene match={{ params: { id: 4 } }} store={store} />);
        expect(container).toMatchSnapshot();
        container.unmount();
    });
});
