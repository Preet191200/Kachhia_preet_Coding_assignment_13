import { render, screen } from "@testing-library/react";
import Img from "./Img";

test("Image is visible", () => {
  render(<Img src="https://via.placeholder.com/150" alt="Test" />);
  expect(screen.getByAltText("Test")).toBeVisible();
});

export {};
