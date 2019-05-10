import React from "react";
import { shallow } from "enzyme";
import IncidentList from "./IncidentList";

import { itemsPerPage } from "../data/dummyData";

const props = { itemsPerPage };

const itemsListWrapper = shallow(
    <IncidentList {...props} />
);

describe("App", () => {
    it("renders correctly", () => {
        expect(itemsListWrapper).toMatchSnapshot();
    });
    it("should generate correct number of incidents", () => {
        expect(itemsListWrapper.find('img').length).toEqual(itemsPerPage.length);
    });
    it("should titles the incident correctly", () => {
        itemsListWrapper.find('a').forEach((incidentTitle, index) => {
            expect(incidentTitle.text()).toEqual(itemsPerPage[index].title ? itemsPerPage[index].title : "Title Not Available");
        });

    });


})

