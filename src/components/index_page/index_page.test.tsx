import React from "react";
import ReactDOM from "react-dom";
import IndexPage from "./index_page";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<IndexPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
