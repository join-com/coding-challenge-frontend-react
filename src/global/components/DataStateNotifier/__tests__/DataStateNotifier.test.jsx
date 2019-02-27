import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import DataStateNotifier from '../index';

const props = {
  dataLoading: '',
  dataError: '',
  children: <div>The Child Component</div>
};

describe('DataStateNotifier', () => {
  it('should render the child component correctly without notification', () => {
    const tree = shallow(<DataStateNotifier {...props} />);
    expect(shallowToJson(tree)).toMatchSnapshot();
  });

  it('should render an error message if dataError present', () => {
    const tree = shallow(<DataStateNotifier
      {...props}
      dataError="Oops something went wrong :("
    />);
    expect(shallowToJson(tree)).toMatchSnapshot();
  });

  it('should render a loading message if dataLoading present and dataError blank', () => {
    const tree = shallow(<DataStateNotifier
      {...props}
      dataLoading="Loading data ..."
    />);
    expect(shallowToJson(tree)).toMatchSnapshot();
  });

  it('should give priority to error over loading', () => {
    const tree = shallow(<DataStateNotifier
      {...props}
      dataLoading="Loading data ..."
      dataError="Oops something went wrong :("
    />);
    expect(shallowToJson(tree)).toMatchSnapshot();
  });
});
