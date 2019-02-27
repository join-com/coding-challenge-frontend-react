import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import staticData from '../../../static/data.json';
import DetailInfos from '../DetailInfos';

const { incidents } = staticData;

const props = {
  item: incidents[0],
};

describe('DetailInfos', () => {
  it('should render the component correctly', () => {
    const tree = shallow(<DetailInfos {...props} />);
    expect(shallowToJson(tree)).toMatchSnapshot();
  });

  it('should not render the component if no item', () => {
    const tree = shallow(<DetailInfos {...props} item={null} />);
    expect(shallowToJson(tree)).toMatchSnapshot();
  });
});
