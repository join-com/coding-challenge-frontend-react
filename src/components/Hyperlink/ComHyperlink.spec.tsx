import * as React from 'react';

import { shallow } from 'enzyme';

import ComHyperlink from './ComHyperlink';


it('renders the heading', () => {
    const res = shallow(<ComHyperlink to="/">Test Link</ComHyperlink>);
    //console.log(' ++++++ ' + res.contains(<Link to="/">Test Link</Link>));
    expect(res).toBeTruthy();
});
