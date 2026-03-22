import { render, screen } from "@testing-library/react";
import Button from "./Button";

test("Button is visible", () => {
  render(<Button label="Test" />);
  expect(screen.getByText("Test")).toBeVisible();
});

test("Button disabled state", () => {
  render(<Button label="Test" disabled />);
  const btn = screen.getByText("Test");
  expect(btn).toHaveStyle("opacity: 0.5");
  expect(btn).toHaveAttribute("disabled");
});
