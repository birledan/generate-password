import React from "react";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import store from "../../modules";
import Header from "./Header";

it("render Header info", () => {
  const { getByText } = render(
    <Provider store={store}>
      <Header />
    </Provider>
  );
  const appName = getByText(/generate-password/i);
  expect(appName).toBeInTheDocument();
  const appAuthor = getByText(/Dan Bîrle/i);
  expect(appAuthor).toBeInTheDocument();
});
