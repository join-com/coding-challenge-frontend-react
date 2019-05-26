import * as React from 'react';
import { Link } from 'react-router-dom';

import { shallow } from 'enzyme';

import ComHyperlink from './ComHyperlink';


it('renders the heading', () => {
    const res = shallow(<ComHyperlink to="/">Test Link</ComHyperlink>).contains(<Link to="/" />);
    //console.log(' ++++++ ' + res.contains(<Link to="/">Test Link</Link>));
    expect(res).toBeTruthy();
});
