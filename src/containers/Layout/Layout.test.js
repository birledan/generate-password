import React from "react";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import { getByTestId } from "@testing-library/jest-dom";
import Layout from "./Layout";
import store from "../../modules";

it("render Layout without crashing", () => {
  const div = document.createElement("div");
  render(
    <Provider store={store}>
      <Layout />
    </Provider>,
    div
  );
  
});


