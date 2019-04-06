/* eslint-env jest */

// Core
import React from 'react';

// Test utilities
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { allOperationsOver } from '../../../utils/__mocks__/allOperationsOver';

// Component
import Case from '../Case';

describe('Component Case:', () => {
  test('Must match snapshot:', async () => {
    const component = shallow(<Case match={{ params: { id: 97572 } }} />);
    await allOperationsOver();
    component.update();
    expect(toJSON(component)).toMatchSnapshot();
  });
});
