import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import StyledButton from "./StyledButton";

describe("Styled StyledButton component", () => {
  const defaultProps = {
    uppercase: false,
    size: "normal",
    disabled: false
  };

  const getWrapper = (testProps = {}) => {
    const props = { ...defaultProps, ...testProps };
    return renderer.create(<StyledButton {...props} />).toJSON();
  };

  it("should match snapshot", () => {
    const wrapper = getWrapper();
    expect(wrapper).toMatchSnapshot();
  });

  it("should match snapshot with disabled prop", () => {
    const wrapper = getWrapper({ disabled: true });
    expect(wrapper).toMatchSnapshot();
  });
});
