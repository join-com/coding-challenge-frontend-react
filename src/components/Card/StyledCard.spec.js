import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import { StyledCard, BikeTitle, BikeImage, BikeInfo } from "./StyledCard";

describe("StyledCard component", () => {
  it("should match snapshot", () => {
    expect(renderer.create(<StyledCard />).toJSON()).toMatchSnapshot();
  });
});

describe("BikeTitle component", () => {
  it("should match snapshot", () => {
    expect(renderer.create(<BikeTitle />).toJSON()).toMatchSnapshot();
  });
});

describe("BikeImage component", () => {
  it("should match snapshot", () => {
    expect(renderer.create(<BikeImage />).toJSON()).toMatchSnapshot();
  });
});

describe("BikeInfo component", () => {
  it("should match snapshot", () => {
    expect(renderer.create(<BikeInfo />).toJSON()).toMatchSnapshot();
  });
});
