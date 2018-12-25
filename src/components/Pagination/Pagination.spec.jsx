import React from "react";
import { shallow, mount } from "enzyme";
import Component from "./Pagination";
import Button from "../ui/Button/Button";

describe("Pagination component test", () => {
  const defaultProps = {
    pages: [1, 2, 3],
    currentPage: 0,
    changeUi: jest.fn()
  };

  const getWrapper = (testProps = {}) => {
    const props = { ...defaultProps, ...testProps };
    return shallow(<Component {...props} />);
  };

  it("should match snapshot ", () => {
    const wrapper = getWrapper();
    expect(wrapper).toMatchSnapshot();
  });

  it("should correct handle pagination buttons click only on not disabled buttons", () => {
    const changeUi = jest.fn();
    const props = { ...defaultProps, changeUi };
    const wrapper = mount(<Component {...props} />);

    const buttons = wrapper.find(Button);
    expect(buttons).toHaveLength(7);
    expect(buttons.at(0).props().disabled).toBeTruthy();
    expect(buttons.at(1).props().disabled).toBeTruthy();
    expect(buttons.at(2).props().disabled).toBeTruthy();
    expect(buttons.at(3).props().disabled).toBeFalsy();
    expect(buttons.at(4).props().disabled).toBeFalsy();
    expect(buttons.at(5).props().disabled).toBeFalsy();
    expect(buttons.at(6).props().disabled).toBeFalsy();

    // shouldn't handle click on disabled button
    buttons.at(0).simulate("click");
    expect(changeUi).toHaveBeenCalledTimes(0);

    buttons.at(3).simulate("click");
    expect(changeUi).toHaveBeenCalledTimes(1);
    expect(changeUi).toHaveBeenCalledWith({ name: "currentPage", value: 1 });
  });

  it("should disable 3 last buttons if last page selected", () => {
    const changeUi = jest.fn();
    const props = { ...defaultProps, changeUi, currentPage: 2 };
    const wrapper = mount(<Component {...props} />);

    const buttons = wrapper.find(Button);
    expect(buttons).toHaveLength(7);
    expect(buttons.at(0).props().disabled).toBeFalsy();
    expect(buttons.at(1).props().disabled).toBeFalsy();
    expect(buttons.at(2).props().disabled).toBeFalsy();
    expect(buttons.at(3).props().disabled).toBeFalsy();
    expect(buttons.at(4).props().disabled).toBeTruthy();
    expect(buttons.at(5).props().disabled).toBeTruthy();
    expect(buttons.at(6).props().disabled).toBeTruthy();

    // shouldn't handle click on disabled button
    buttons.at(6).simulate("click");
    expect(changeUi).toHaveBeenCalledTimes(0);

    buttons.at(1).simulate("click");
    expect(changeUi).toHaveBeenCalledTimes(1);
    expect(changeUi).toHaveBeenCalledWith({ name: "currentPage", value: 1 });
  });

  it("should disable only current page button", () => {
    const changeUi = jest.fn();
    const props = { ...defaultProps, changeUi, currentPage: 1 };
    const wrapper = mount(<Component {...props} />);

    const buttons = wrapper.find(Button);
    expect(buttons).toHaveLength(7);
    expect(buttons.at(0).props().disabled).toBeFalsy();
    expect(buttons.at(1).props().disabled).toBeFalsy();
    expect(buttons.at(2).props().disabled).toBeFalsy();
    expect(buttons.at(3).props().disabled).toBeTruthy();
    expect(buttons.at(4).props().disabled).toBeFalsy();
    expect(buttons.at(5).props().disabled).toBeFalsy();
    expect(buttons.at(6).props().disabled).toBeFalsy();

    // shouldn't handle click on disabled button
    buttons.at(3).simulate("click");
    expect(changeUi).toHaveBeenCalledTimes(0);

    buttons.at(1).simulate("click");
    expect(changeUi).toHaveBeenCalledTimes(1);
    expect(changeUi).toHaveBeenCalledWith({ name: "currentPage", value: 0 });
  });

  it("should match snapshot for empty pages ", () => {
    const wrapper = getWrapper({ pages: [] });
    expect(wrapper).toMatchSnapshot();
  });
});
