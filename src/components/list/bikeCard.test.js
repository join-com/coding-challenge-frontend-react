import React from 'react';
import { shallow , mount} from 'enzyme';
import BikeCard from './bikeCard';

describe('BikeCard', () => {
    it('it should render correctly', () => {
        const component = shallow(<BikeCard />);
        expect(component).toMatchSnapshot();
    });
})