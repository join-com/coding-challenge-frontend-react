/* eslint-env jest */

// Core
import React from 'react';

// Test utilities
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

// Component
import Pagination from '../Pagination';

describe('Component Pagination:', () => {
  test('Must match snapshot:', () => {
    const pagination = renderer
      .create(<Pagination
        totalRecords={3}
        currentPage={1}
        openPage={jest.fn}
      />)
      .toJSON();

    expect(pagination).toMatchSnapshot();
  });

  it('Should handle click button "<< First" and call method with correct page number', () => {
    const jestSpy = jest.fn();
    const pagination = shallow(
      <Pagination totalRecords={25} currentPage={3} openPage={jestSpy} />,
    );

    pagination.find({ name: 'button-first' }).simulate('click');

    expect(jestSpy).toBeCalledWith(1);
  });

  it('Should handle click button "< Prev" and call method correct page number', () => {
    const jestSpy = jest.fn();
    const CURRENT_PAGE_NUMBER = 3;
    const pagination = shallow(
      <Pagination totalRecords={25} currentPage={CURRENT_PAGE_NUMBER} openPage={jestSpy} />,
    );

    pagination.find({ name: 'button-prev' }).simulate('click');

    expect(jestSpy).toBeCalledWith(CURRENT_PAGE_NUMBER - 1);
  });

  it('Should handle click button "Next >" and call method correct page number', () => {
    const jestSpy = jest.fn();
    const CURRENT_PAGE_NUMBER = 1;
    const pagination = shallow(
      <Pagination totalRecords={25} currentPage={CURRENT_PAGE_NUMBER} openPage={jestSpy} />,
    );

    pagination.find({ name: 'button-next' }).simulate('click');

    expect(jestSpy).toBeCalledWith(CURRENT_PAGE_NUMBER + 1);
  });

  it('Should handle click button "Last >>" and call method correct page number', () => {
    const jestSpy = jest.fn();
    const pagination = shallow(
      <Pagination totalRecords={25} currentPage={1} openPage={jestSpy} />,
    );

    pagination.find({ name: 'button-last' }).simulate('click');

    expect(jestSpy).toBeCalledWith(3);
  });
});
