import React from "react";
import { shallow } from "enzyme";
import Component from "./IncidentsList";
import incidentMock from "../../mocks/incidentMock";

describe("IncidentsList component test", () => {
  const defaultProps = {
    items: [incidentMock],
    itemsPerPage: 10,
    changeShowItemsPerPage: jest.fn(),
    totalIncidentsLength: 23
  };

  const getWrapper = (testProps = {}) => {
    const props = { ...defaultProps, ...testProps };
    return shallow(<Component {...props} />);
  };

  it("should match snapshot ", () => {
    const wrapper = getWrapper();
    expect(wrapper).toMatchSnapshot();
  });

  it("should match snapshot with empty items", () => {
    const wrapper = getWrapper({ items: [] });
    expect(wrapper).toMatchSnapshot();
  });
});
