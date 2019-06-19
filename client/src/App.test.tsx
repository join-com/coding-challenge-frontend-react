import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { withMockProviders } from "./helpers/MockProviders";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(withMockProviders(<App />), div);
  ReactDOM.unmountComponentAtNode(div);
});
