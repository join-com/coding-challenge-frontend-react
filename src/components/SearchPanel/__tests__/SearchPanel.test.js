/* eslint-env jest */

// Core
import React from 'react';

// Test utilities
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

// Component
import SearchPanel from '../SearchPanel';

describe('Component SearchPanel:', () => {
  test('Must match snapshot:', () => {
    const searchPanel = renderer
      .create(<SearchPanel isDataLoading={false} onFind={jest.fn} />)
      .toJSON();

    expect(searchPanel).toMatchSnapshot();
  });

  test('Search function mut be called on click button "Find cases"',
    () => {
      const onButtonClick = jest.fn();
      const event = { preventDefault: () => {} };

      const wrapper = shallow(<SearchPanel isDataLoading={false} onFind={onButtonClick} />);
      wrapper.find('form').simulate('submit', event);
      expect(onButtonClick).toBeCalled();
    });

  test('Must be shown error message if data From greater than date To ',
    () => {
      const onButtonClick = jest.fn();
      const event = { preventDefault: () => {} };
      const wrapper = shallow(<SearchPanel isDataLoading={false} onFind={onButtonClick} />);
      wrapper.find('input').at(1).simulate('change', { target: { value: '2019-04-02', name: 'dateFrom' } });
      wrapper.find('input').at(2).simulate('change', { target: { value: '2019-01-03', name: 'dateTo' } });
      wrapper.find('form').simulate('submit', event);
      expect(wrapper.text().includes('"From" date is greater than date "To"')).toBe(true);
    });
});
