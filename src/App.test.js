import React from "react";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import store from "./modules";
import App from "./App";

it("render without crashing", () => {
  const div = document.createElement("div");
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    div
  );
});