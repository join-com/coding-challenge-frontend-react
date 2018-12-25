import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";

import StyledText, { StyledErrorText } from "./StyledText";

describe("StyledText component", () => {
  const defaultProps = {
    disabled: false
  };

  const getWrapper = (testProps = {}) => {
    const props = { ...defaultProps, ...testProps };
    return renderer.create(<StyledText {...props} />).toJSON();
  };

  it("should match snapshot ", () => {
    const wrapper = getWrapper();
    expect(wrapper).toMatchSnapshot();
  });

  it("should match snapshot for different size prop ", () => {
    const wrapper = getWrapper({ size: "large" });
    expect(wrapper).toMatchSnapshot();
  });

  it("should match snapshot for uppercase prop ", () => {
    const wrapper = getWrapper({ uppercase: true });
    expect(wrapper).toMatchSnapshot();
  });

  it("should match snapshot for textAlign prop ", () => {
    const wrapper = getWrapper({ textAlign: "center" });
    expect(wrapper).toMatchSnapshot();
  });
});

describe("StyledErrorText component", () => {
  it("should match snapshot ", () => {
    expect(renderer.create(<StyledErrorText />).toJSON()).toMatchSnapshot();
  });
});
