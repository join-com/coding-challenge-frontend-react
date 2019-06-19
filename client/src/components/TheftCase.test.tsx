import { fireEvent, render } from "@testing-library/react";
import "jest-dom/extend-expect";
import "jest-styled-components";
import React from "react";
import { withMockProviders } from "../helpers/MockProviders";
import ICase from "../models/ICase";
import TheftCase from "./TheftCase";

describe("Pagniate component", () => {
    // Arrange

    const DUMMY_ADDRESS = "Adress 123";
    const DUMMY_TITLE = "Title 123";
    const DUMMY_DESCRIPTION = "Name 123";
    const DUMMY_THUMB = "Thumb 123";
    const DUMMY_IMAGEURL = "url 123";

    const data: ICase = {
        address: DUMMY_ADDRESS,
        description: DUMMY_DESCRIPTION,
        media: {
            image_thumb: DUMMY_THUMB,
            image_url: DUMMY_IMAGEURL,
        },
        occurred_at: Date.now(),
        title: DUMMY_TITLE,
        updated_at: Date.now(),
    };
    // Act
    const { getByText, getByTestId } = render(withMockProviders(<TheftCase data={data} />));

    // Assert
    it("should contain correctData", () => {
       getByText(DUMMY_TITLE);
       expect(getByTestId("image")).toHaveStyle(`background-image: url(${DUMMY_THUMB})`);
       getByText(DUMMY_DESCRIPTION);
    });
});
