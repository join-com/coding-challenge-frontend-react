import { fireEvent, render } from "@testing-library/react";
import React from "react";
import { withMockProviders } from "../helpers/MockProviders";
import Pagination from "./Pagination";

describe("Pagniate component", () => {
    // Arrange

    const setCurrentPage = jest.fn();

    // Act
    const { getByText } = render(
      withMockProviders(<Pagination pageCount={10} currentPage={1} setCurrentPage={setCurrentPage} />),
    );

    // Assert
    it("should contain middle element range", () => {
       getByText("5");
    });
    it("should call setCurrentPage on Click", () => {
      fireEvent.click(getByText("1"));
      expect(setCurrentPage.mock.calls).toMatchSnapshot();
    });
});
