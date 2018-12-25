import React from "react";
import { shallow } from "enzyme";
import Component from "./index";

describe("Heading component test", () => {
  const defaultProps = {
    children: "Heading text",
    level: 1,
    uppercase: false,
    bold: false
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
