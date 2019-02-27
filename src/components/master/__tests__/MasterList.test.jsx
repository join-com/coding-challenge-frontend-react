import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import staticData from '../../../static/data.json';
import MasterList from '../MasterList';

const { incidents } = staticData;

const props = {
  data: incidents,
};

describe('MasterList', () => {
  it('should render the component correctly', () => {
    const tree = shallow(<MasterList {...props} />);
    expect(shallowToJson(tree)).toMatchSnapshot();
  });
});
