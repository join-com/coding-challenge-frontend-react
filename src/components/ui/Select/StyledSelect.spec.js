import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";

import { StyledSelect, Label } from "./StyledSelect";

describe("StyledSelect component", () => {
  const defaultProps = {
    disabled: false
  };

  const getWrapper = (testProps = {}) => {
    const props = { ...defaultProps, ...testProps };
    return renderer.create(<StyledSelect {...props} />).toJSON();
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

describe("Styled Label component", () => {
  it("should match snapshot ", () => {
    expect(renderer.create(<Label />).toJSON()).toMatchSnapshot();
  });
});
