import React from 'react';
import { shallow , mount} from 'enzyme';
import Loader from './loader';
import CircularProgress from '@material-ui/core/CircularProgress';

describe('Loader', () => {
    it('it should render correctly', () => {
        const component = shallow(<Loader />);
        expect(component).toMatchSnapshot();
    });
    
    it('props are correct ', () => {
        let testSize = 30;
        const component = mount(<Loader size={testSize}/>);
        expect(component.props().size).toEqual(testSize);
    });

    it('renders `in-place-loader',()=>{
        const component = shallow(<Loader />);
        expect(component.find('.in-place-loader').length).toBe(1)
    })

    it('renders `<CircularProgress />',()=>{
        const component = shallow(<Loader />);
        expect(component.find(CircularProgress).length).toBe(1)
    })
    
});