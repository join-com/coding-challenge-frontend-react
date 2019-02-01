import React from 'react';
import { shallow, mount } from 'enzyme';
import List from './list';
import { Helmet } from "react-helmet";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from 'redux-thunk'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares);
const store = mockStore({
    bikeList: {
        stolenBikeList: []
    }
});

describe('List', () => {
    it('List should render correctly', () => {
        const component = mount(
            <Provider store={store}>
                <List />
            </Provider>
        );
        expect(component).toMatchSnapshot();
    });
});