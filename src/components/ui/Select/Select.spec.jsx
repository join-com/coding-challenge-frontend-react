import React from "react";
import { shallow, mount } from "enzyme";
import Component from "./index";

describe("Select component test", () => {
  const defaultProps = {
    label: "",
    options: [{ value: 1, label: "1" }],
    value: "",
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

  it("should match snapshot with label", () => {
    const wrapper = getWrapper({ label: "label" });
    expect(wrapper).toMatchSnapshot();
  });

  it("should trigger change event", () => {
    const wrapper = mount(<Component {...defaultProps} />);
    wrapper.find("select").simulate("change");
    expect(defaultProps.onChange).toBeCalledTimes(1);
  });
});
