import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import { StyledHeader } from "./StylesHeader";

describe("StyledHeader component", () => {
  it("should match snapshot", () => {
    expect(renderer.create(<StyledHeader />).toJSON()).toMatchSnapshot();
  });
});
