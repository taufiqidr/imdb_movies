// layout.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import Layout from "~/components/Layout";

jest.mock("next/router", () => ({
  useRouter: () => ({ back: jest.fn() }),
}));

describe("Layout Component", () => {
  test("renders children", () => {
    const childElement = <div>Test Content</div>;

    render(<Layout>{childElement}</Layout>);

    const renderedChild = screen.getByText("Test Content");
    expect(renderedChild).toBeInTheDocument();
  });

  test("renders the title from Head", () => {
    render(<Layout>Test Content</Layout>);

    const titleElement = screen.getByText("IMDb Movies");
    expect(titleElement).toBeInTheDocument();
  });

  test("renders the TopBar component", () => {
    render(<Layout>Test Content</Layout>);

    const topBarElement = screen.getByTestId("top-bar");
    expect(topBarElement).toBeInTheDocument();
  });
});
