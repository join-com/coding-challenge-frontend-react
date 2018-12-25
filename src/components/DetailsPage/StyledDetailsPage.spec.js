import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import { DetailsInfo } from "./StyledDetailsPage";

describe("DetailsInfo component", () => {
  const getWrapper = (testProps = {}) => {
    return renderer.create(<DetailsInfo />).toJSON();
  };

  it("should match snapshot", () => {
    const wrapper = getWrapper();
    expect(wrapper).toMatchSnapshot();
  });
});
