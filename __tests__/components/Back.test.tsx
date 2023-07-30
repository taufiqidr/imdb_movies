import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // For additional matchers
import Back from "~/components/Back";

// Mock the useRouter hook to avoid errors during testing
jest.mock("next/router", () => ({
  useRouter: () => ({ back: jest.fn() }),
}));

describe("Back Component", () => {
  test("renders without errors", () => {
    const { getByText } = render(<Back />);
    const backButton = getByText("Back");
    expect(backButton).toBeInTheDocument();
  });

  test("clicking the Back button calls router.back()", () => {
    const { getByText } = render(<Back />);
    const backButton = getByText("Back");
    fireEvent.click(backButton);
    expect(require("next/router").useRouter().back).toHaveBeenCalledTimes(1);
  });
});
