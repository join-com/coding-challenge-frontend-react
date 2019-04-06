/* eslint-env jest */

// Core
import React from 'react';

// Test utilities
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { allOperationsOver } from '../../../utils/__mocks__/allOperationsOver';

// Components
import Main from '../Main';

jest.mock('../../ErrorInfo/ErrorInfo');

describe('Component Main:', () => {
  test('Must match snapshot with "Loading...":', () => {
    const component = shallow(<Main />);

    expect(toJSON(component)).toMatchSnapshot();
  });

  test('Must match snapshot with component "IncidentList":', async () => {
    const component = await shallow(<Main />);

    await allOperationsOver();

    expect(toJSON(component)).toMatchSnapshot();
  });


  test('Must shown the error component if error on call API', async () => {
    global.fetchResponseStatus = 404;

    const component = shallow(<Main />);
    await allOperationsOver();
    expect(component.text().includes('ErrorInfoMock')).toBe(true);

    global.fetchResponseStatus = 200;
  });
});
