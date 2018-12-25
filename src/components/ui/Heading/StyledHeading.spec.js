import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";

import StyledHeading from "./StyledHeading";

describe("Styled StyledHeading component", () => {
  const defaultProps = {
    level: 1,
    uppercase: false,
    bold: false
  };

  const getWrapper = (testProps = {}) => {
    const props = { ...defaultProps, ...testProps };
    return renderer.create(<StyledHeading {...props} />).toJSON();
  };

  it("should match snapshot with different level prop", () => {
    for (let index = 1; index < 6; index++) {
      const wrapper = getWrapper({ level: index });
      expect(wrapper).toMatchSnapshot();
    }
  });

  it("should match snapshot with bold prop", () => {
    const wrapper = getWrapper({ bold: true });
    expect(wrapper).toMatchSnapshot();
  });

  it("should match snapshot with uppercase prop", () => {
    const wrapper = getWrapper({ uppercase: true });
    expect(wrapper).toMatchSnapshot();
  });
});
