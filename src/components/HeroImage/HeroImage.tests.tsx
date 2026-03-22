import { render, screen } from "@testing-library/react";
import HeroImage from "./HeroImage";

test("HeroImage visible", () => {
  render(<HeroImage src="https://via.placeholder.com/1200x400" alt="Test" />);
  expect(screen.getByAltText("Test")).toBeVisible();
});

export {};
