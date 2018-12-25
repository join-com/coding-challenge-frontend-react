import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import { StyledInput } from "./StyledInput";

describe("Styled StyledInput component", () => {
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
    return renderer.create(<StyledInput {...props} />).toJSON();
  };

  it("should match snapshot ", () => {
    const wrapper = getWrapper();
    expect(wrapper).toMatchSnapshot();
  });
  it("should match snapshot for disabled prop ", () => {
    const wrapper = getWrapper({ disabled: true });
    expect(wrapper).toMatchSnapshot();
  });
});
