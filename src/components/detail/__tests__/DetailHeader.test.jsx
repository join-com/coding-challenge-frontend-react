import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import staticData from '../../../static/data.json';
import DetailHeader from '../DetailHeader';

const { incidents } = staticData;

const props = {
  item: incidents[0],
};

describe('DetailHeader', () => {
  it('should render the component correctly', () => {
    const tree = shallow(<DetailHeader {...props} />);
    expect(shallowToJson(tree)).toMatchSnapshot();
  });

  it('should not render the component if no item', () => {
    const tree = shallow(<DetailHeader {...props} item={null} />);
    expect(shallowToJson(tree)).toMatchSnapshot();
  });
});
