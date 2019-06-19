import { act, render } from "@testing-library/react";
import "jest-dom/extend-expect";
import "jest-styled-components";
import React from "react";
import { fetchCaseDetails } from "../helpers/Api";

import { withMockProviders } from "../helpers/MockProviders";
import ICase from "../models/ICase";
import Case from "./Case";

// Arrange
jest.mock("../helpers/Api", () => {

    const data: ICase = {
        address: "",
        description: "",
        id: 0,
        location_description: "",
        location_type: "",
        media: {
            image_thumb: "thumb",
            image_url: "image_uel",
        },
        occurred_at: Date.now(),
        source: {
            html_url: "",
            name: "",
        },
        title: "title",
        updated_at: Date.now(),
        url: "url",
    };
    return ({fetchCaseDetails: jest.fn(() => data)});
});

describe("Case view", () => {
    // Act
    const { getByText, getByTestId } = render(withMockProviders(<Case />));
    // Assert
    it("should contain correctData", () => {
        getByText("title");
    });
});
