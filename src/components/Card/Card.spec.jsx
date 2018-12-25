import React from "react";
import { shallow } from "enzyme";
import Component from "./index";
import incidentMock from "../../mocks/incidentMock";

describe("Button component test", () => {
  const defaultProps = {
    item: incidentMock
  };

  const getWrapper = (testProps = {}) => {
    const props = { ...defaultProps, ...testProps };
    return shallow(<Component {...props} />);
  };

  it("should match snapshot", () => {
    const wrapper = getWrapper();
    expect(wrapper).toMatchSnapshot();
  });

  it("should match snapshot without description and image", () => {
    const wrapper = getWrapper({
      item: {
        ...defaultProps.item,
        description: null,
        media: {}
      }
    });
    expect(wrapper).toMatchSnapshot();
  });
});
