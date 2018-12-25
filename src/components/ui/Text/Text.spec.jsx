import React from "react";
import { shallow } from "enzyme";
import Component from "./index";

describe("Text component test", () => {
  const defaultProps = {
    size: "normal",
    bold: false,
    uppercase: false,
    children: "Text"
  };

  const getWrapper = (testProps = {}) => {
    const props = { ...defaultProps, ...testProps };
    return shallow(<Component {...props} />);
  };

  it("should match snapshot", () => {
    const wrapper = getWrapper();
    expect(wrapper).toMatchSnapshot();
  });
});
