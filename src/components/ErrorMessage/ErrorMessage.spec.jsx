import React from "react";
import { shallow } from "enzyme";
import ErrorMessage from "./ErrorMessage";

describe("ErrorMessage component test", () => {
  it("should match snapshot", () => {
    expect(shallow(<ErrorMessage message="error message" />)).toMatchSnapshot();
  });
});
