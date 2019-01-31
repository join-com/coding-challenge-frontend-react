import React from 'react';
import { shallow,mount } from 'enzyme';
import SearchFinters from './searchFilters';
import Grid from '@material-ui/core/Grid';
import DatePicker from "react-datepicker";
import DateRange from '@material-ui/icons/DateRange';
import SearchIcon from '@material-ui/icons/Search';

describe('Search Filters', () => {
    it('it should render correctly', () => {
        const component = shallow(<SearchFinters />);
        expect(component).toMatchSnapshot();
    });
    it('renders `datePicker',()=>{
        const component = mount(<SearchFinters />);
        expect(component.find('.datePicker').length).toBe(4)
    })
    it('renders `<Grid />',()=>{
        const component = mount(<SearchFinters />);
        expect(component.find(Grid).length).toBe(7)
    })
    it('renders `<DatePicker />',()=>{
        const component = mount(<SearchFinters />);
        expect(component.find(DatePicker).length).toBe(2)
    })
    it('renders `<DateRange />',()=>{
        const component = mount(<SearchFinters />);
        expect(component.find(DateRange).length).toBe(2)
    })
    it('renders `<SearchIcon />',()=>{
        const component = mount(<SearchFinters />);
        expect(component.find(SearchIcon).length).toBe(1)
    })

});