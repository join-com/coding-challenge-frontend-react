import React from "react";
import { shallow } from "enzyme";
import Component from "./HomePage";
import incidentMock from "../../mocks/incidentMock";

describe("HomePage component test", () => {
  const defaultProps = {
    incidents: [incidentMock],
    searchValue: "",
    itemsPerPage: 10,
    isLoading: false,
    error: null,
    totalIncidentsLength: 22,
    fetchIncidents: jest.fn(),
    changeUi: jest.fn()
  };

  const getWrapper = (testProps = {}) => {
    const props = { ...defaultProps, ...testProps };
    return shallow(<Component {...props} />);
  };

  it("should match snapshot and call fetchIncidents prop function", () => {
    const wrapper = getWrapper();
    expect(wrapper).toMatchSnapshot();
    expect(defaultProps.fetchIncidents).toHaveBeenCalledTimes(1);
  });

  it("should match snapshot for loading state", () => {
    const wrapper = getWrapper({ isLoading: true });
    expect(wrapper).toMatchSnapshot();
  });

  it("should match snapshot with error", () => {
    const wrapper = getWrapper({ error: "error message" });
    expect(wrapper).toMatchSnapshot();
  });

  it("should match snapshot empty results", () => {
    const wrapper = getWrapper({ totalIncidentsLength: 0, incidents: [] });
    expect(wrapper).toMatchSnapshot();
  });

  it("should correct handle changeSearchValue", () => {
    const changeUi = jest.fn();
    const event = { target: { value: 1 } };
    const wrapper = getWrapper({ changeUi });
    wrapper.instance().changeSearchValue(event);
    expect(changeUi).toBeCalledTimes(2);
    expect(changeUi).toHaveBeenNthCalledWith(1, { name: "searchValue", value: 1 });
    expect(changeUi).toHaveBeenNthCalledWith(2, { name: "currentPage", value: 0 });
  });

  it("should correct handle changeShowItemsPerPage", () => {
    const changeUi = jest.fn();
    const wrapper = getWrapper({ changeUi });
    const event = { target: { value: 10 } };
    wrapper.instance().changeShowItemsPerPage(event);
    expect(changeUi).toBeCalledTimes(2);
    expect(changeUi).toHaveBeenNthCalledWith(1, { name: "itemsPerPage", value: 10 });
    expect(changeUi).toHaveBeenNthCalledWith(2, { name: "currentPage", value: 0 });
  });
});
