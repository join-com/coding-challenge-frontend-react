import React from "react";
import { shallow } from "enzyme";
import Component from "./DetailsPage";
import incidentMock from "../../mocks/incidentMock";

describe("DetailsPage component test", () => {
  const defaultProps = {
    fetchIncidentById: jest.fn(),
    match: {
      params: {
        id: incidentMock.id
      }
    },
    item: incidentMock,
    isLoading: false,
    error: null
  };

  const getWrapper = (testProps = {}) => {
    const props = { ...defaultProps, ...testProps };
    return shallow(<Component {...props} />);
  };

  it("should match snapshot and call fetchIncidentById prop function", () => {
    const wrapper = getWrapper();
    expect(wrapper).toMatchSnapshot();
    expect(defaultProps.fetchIncidentById).toHaveBeenCalledTimes(1);
  });

  it("should match snapshot for loading state", () => {
    const wrapper = getWrapper({ isLoading: true, item: {} });
    expect(wrapper).toMatchSnapshot();
  });

  it("should match snapshot for loading state", () => {
    const wrapper = getWrapper({ error: "error message" });
    expect(wrapper).toMatchSnapshot();
  });
});
