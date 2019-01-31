import React from 'react';
import { shallow , mount} from 'enzyme';
import List from './list';

describe('List', () => {
    it('it should render correctly', () => {
        const component = shallow(<List />);
        expect(component).toMatchSnapshot();
    });
})