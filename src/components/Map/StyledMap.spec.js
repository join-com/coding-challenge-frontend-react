import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import { MapElement, MapContainerElement } from "./StyledMap";

describe("MapElement component", () => {
  const getWrapper = (testProps = {}) => {
    return renderer.create(<MapElement />).toJSON();
  };

  it("should match snapshot", () => {
    const wrapper = getWrapper();
    expect(wrapper).toMatchSnapshot();
  });
});
describe("MapContainerElement component", () => {
  const getWrapper = (testProps = {}) => {
    return renderer.create(<MapContainerElement />).toJSON();
  };

  it("should match snapshot", () => {
    const wrapper = getWrapper();
    expect(wrapper).toMatchSnapshot();
  });
});
