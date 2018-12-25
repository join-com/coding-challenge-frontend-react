import React from "react";
import { shallow } from "enzyme";
import Component from "./Header";

describe("Header component test", () => {
  it("should match snapshot ", () => {
    expect(shallow(<Component />)).toMatchSnapshot();
  });
});
