import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import staticData from '../../../static/data.json';
import Master from '../Master';

const { incidents } = staticData;

const props = {
  data: incidents,
  dataLoading: '',
  dataError: '',
};

describe('Master', () => {
  it('should render the component correctly', () => {
    const tree = shallow(<Master {...props} />);
    expect(shallowToJson(tree)).toMatchSnapshot();
  });

  it('should pass the error message to the DataStateNotifier component', () => {
    const tree = shallow(<Master
      {...props}
      dataError="Oops something went wrong :("
    />);
    expect(shallowToJson(tree)).toMatchSnapshot();
  });

  it('should pass the loading message to the DataStateNotifier component', () => {
    const tree = shallow(<Master
      {...props}
      dataLoading="Loading data ..."
    />);
    expect(shallowToJson(tree)).toMatchSnapshot();
  });
});
