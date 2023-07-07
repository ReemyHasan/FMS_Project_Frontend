import { render, screen, fireEvent } from "@testing-library/react";
import NotFound from "../../src/features/404-page";
import "@testing-library/jest-dom";
import router from "next/router";

window.matchMedia =
  window.matchMedia ||
  (() => ({
    matches: false,
    addListener: () => {},
    removeListener: () => {},
  }));

jest.mock("next/router", () => ({
  back: jest.fn(),
  push: jest.fn(),
}));

describe("NotFound component", () => {
  it("should render correctly", () => {
    const { getByTestId } = render(<NotFound />);
    expect(getByTestId("not-found-component")).toBeInTheDocument();
  });

  it("should go back when the 'Go Back' button is clicked", () => {
    const { getByText } = render(<NotFound />);
    const goBackButton = getByText("go-back");
    fireEvent.click(goBackButton);
    expect(router.back).toHaveBeenCalledTimes(1);
  });

  it("should go to the home page when the 'Take Me Home' button is clicked", () => {
    const { getByText } = render(<NotFound />);
    const takeMeHomeButton = getByText("take-me-home");
    fireEvent.click(takeMeHomeButton);
    expect(router.push).toHaveBeenCalledWith("/");
  });
});
