import React from "react";
import { shallow } from "enzyme";
import Component from "./Filter";
import Input from "../ui/Input";

describe("Filter component test", () => {
  const defaultProps = {
    onChange: jest.fn(),
    changeShowItemsPerPage: jest.fn(),
    value: "",
    disableInput: false,
    totalIncidentsLength: 23
  };

  const getWrapper = (testProps = {}) => {
    const props = { ...defaultProps, ...testProps };
    return shallow(<Component {...props} />);
  };

  it("should match snapshot ", () => {
    const wrapper = getWrapper();
    expect(wrapper).toMatchSnapshot();

    wrapper.find(Input).simulate("change");
    expect(defaultProps.onChange).toHaveBeenCalledTimes(1);
  });
});
