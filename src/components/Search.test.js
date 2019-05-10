import React from "react";
import { shallow } from "enzyme";
import Search from "./Search";

// import { itemsPerPage } from "../data/dummyData";

// const props = { itemsPerPage };

const searchWrapper = shallow(
    <Search />
);

describe("Search", () => {
    const testem = 'Berlin';
    beforeEach(() => {
        const input = searchWrapper.find('input').first()
        input.simulate('change', {
            target: { value: testem }
        });
    });
    it('should update the state property `testem`', () => {
        expect(searchWrapper.state().testem).toEqual(testem)
    });
    it("renders correctly", () => {
        expect(searchWrapper).toMatchSnapshot();
    });


});