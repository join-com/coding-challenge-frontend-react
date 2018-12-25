import React from "react";
import { shallow } from "enzyme";
import Component from "./index";

describe("Button component test", () => {
  const defaultProps = {
    children: "Button text",
    onClick: jest.fn(),
    uppercase: false,
    size: "normal",
    type: "button",
    disabled: false
  };

  const getWrapper = (testProps = {}) => {
    const props = { ...defaultProps, ...testProps };
    return shallow(<Component {...props} />);
  };

  it("should match snapshot", () => {
    const wrapper = getWrapper();
    expect(wrapper).toMatchSnapshot();
  });

  it("should trigger click event", () => {
    const wrapper = getWrapper();
    wrapper.simulate("click");
    expect(defaultProps.onClick).toHaveBeenCalledTimes(1);
  });
});
