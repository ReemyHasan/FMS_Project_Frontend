import React from "react";
import { render, screen } from "@testing-library/react";
import StockForm from "@/src/features/inventory/stock-form";
import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";

window.matchMedia =
  window.matchMedia ||
  (() => ({
    matches: false,
    addListener: () => {},
    removeListener: () => {},
  }));

describe("StockForm component", () => {
  it("renders the component", () => {
    render(<StockForm />);
    const stockComponent = screen.getByTestId("new-stock-form");
    expect(stockComponent).toBeInTheDocument();
  });
});
