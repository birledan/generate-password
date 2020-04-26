import React from "react";
import { Provider } from "react-redux";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import store from "../../modules";
import Input from "./Input";

const setup = () => {
  const utils = render(<Input />);
  const input = utils.getByLabelText("id-input");
  return {
    input,
    ...utils,
  };
};

it("render Input title", () => {
  const { getByText } = render(
    <Provider store={store}>
      <Input />
    </Provider>
  );
  const title = getByText(/Generate password for ID:/i);
  expect(title).toBeInTheDocument();
});

test("It should not allow letters to be inputted", () => {
  const { input } = setup();
  expect(input.value).toBe(""); // empty before
  fireEvent.change(input, { target: { value: "Good Day" } });
  expect(input.value).toBe(""); //empty after
});
