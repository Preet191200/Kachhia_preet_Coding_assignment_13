import { render, screen } from "@testing-library/react";
import Label from "./Label";

test("Label is visible", () => {
  render(<Label text="Test" />);
  expect(screen.getByText("Test")).toBeVisible();
});
test("Label color changes", () => {
  render(<Label text="Test" color="red" />);
  expect(screen.getByText("Test")).toHaveStyle("color: red");
});

export {};
