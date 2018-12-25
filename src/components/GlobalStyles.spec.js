import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import { globalStyles } from "./GlobalStyles";

describe("globalStyles css", () => {
  it("should match snapshot", () => {
    expect(globalStyles).toMatchSnapshot();
  });
});
