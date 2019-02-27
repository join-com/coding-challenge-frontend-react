import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import staticData from '../../../static/data.json';
import Detail from '../Detail';

const { incidents } = staticData;

const props = {
  item: incidents[0],
};

describe('Detail', () => {
  it('should render the component correctly', () => {
    const tree = shallow(<Detail {...props} />);
    expect(shallowToJson(tree)).toMatchSnapshot();
  });

  it('should pass the error message to the DataStateNotifier component', () => {
    const tree = shallow(<Detail
      {...props}
      dataError="Oops something went wrong :("
    />);
    expect(shallowToJson(tree)).toMatchSnapshot();
  });

  it('should pass the loading message to the DataStateNotifier component', () => {
    const tree = shallow(<Detail
      {...props}
      dataLoading="Loading data ..."
    />);
    expect(shallowToJson(tree)).toMatchSnapshot();
  });
});
