import React from 'react';
import { shallow, mount } from 'enzyme';
import BikeDetail from './bikeDetail';
import { Helmet } from "react-helmet";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();
const store = mockStore({
    bikeList: {
        stolenBikeDetail: {},
        stolenBikeMap: {}
    }
});
const match = {
    params: {
        id: 23
    }
}

describe('Bike Details', () => {
    it('Bike Details should render correctly', () => {
        const component = mount(
            <Provider store={store}>
                <BikeDetail match={match} />
            </Provider>
        );
        expect(component).toMatchSnapshot();
    });
});