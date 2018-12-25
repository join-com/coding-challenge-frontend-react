import React from "react";
import { shallow } from "enzyme";
import Component from "./index";

describe("Input component test", () => {
  const defaultProps = {
    value: "",
    placeholder: "",
    disabled: false,
    uppercase: false,
    type: "text",
    size: "normal",
    name: "name",
    id: "id",
    onChange: jest.fn()
  };

  const getWrapper = (testProps = {}) => {
    const props = { ...defaultProps, ...testProps };
    return shallow(<Component {...props} />);
  };

  it("should match snapshot", () => {
    const wrapper = getWrapper();
    expect(wrapper).toMatchSnapshot();
  });

  it("should trigger change event", () => {
    const wrapper = getWrapper();
    const options = { target: { value: "new value" } };
    wrapper.simulate("change", options);
    expect(defaultProps.onChange).toHaveBeenCalledTimes(1);
    expect(defaultProps.onChange).toHaveBeenCalledWith(options);
  });
});
