import React from "react";
import renderer from "react-test-renderer";
import { Container, PageWrapper } from "./StyledLayout";

describe("Styled Container component", () => {
  it("should match snapshot ", () => {
    expect(renderer.create(<Container />).toJSON()).toMatchSnapshot();
  });
});

describe("Styled PageWrapper component", () => {
  it("should match snapshot ", () => {
    expect(renderer.create(<PageWrapper />).toJSON()).toMatchSnapshot();
  });
});
