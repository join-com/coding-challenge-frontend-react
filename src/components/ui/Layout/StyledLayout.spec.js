import React from "react";
import renderer from "react-test-renderer";
import { Container, Row, PageWrapper } from "./StyledLayout";

describe("Styled Container component", () => {
  it("should match snapshot ", () => {
    expect(renderer.create(<Container />).toJSON()).toMatchSnapshot();
  });
});

describe("Styled Row component", () => {
  it("should match snapshot ", () => {
    expect(renderer.create(<Row />).toJSON()).toMatchSnapshot();
  });
});

describe("Styled PageWrapper component", () => {
  it("should match snapshot ", () => {
    expect(renderer.create(<PageWrapper />).toJSON()).toMatchSnapshot();
  });
});
