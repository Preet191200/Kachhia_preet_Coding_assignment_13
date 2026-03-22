import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Dropdown from "./Dropdown";

test("Dropdown is visible", () => {
  render(<Dropdown options={["A"]} />);
  expect(screen.getByRole("combobox")).toBeVisible();
});
test("Dropdown is grey when disabled", () => {
  render(<Dropdown options={["A"]} disabled />);
  expect(screen.getByRole("combobox")).toHaveStyle("background-color: grey");
});

export {};
