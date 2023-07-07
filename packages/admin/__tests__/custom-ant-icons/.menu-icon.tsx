import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";
import MenuIcon from "../../src/components/assets/custom-ant-icons/menu-icon";

describe("MenuIcon", () => {
  test("renders the bell icon", () => {
    const { getByTestId } = render(<MenuIcon />);
    const menuIcon = getByTestId("menu-icon");
    expect(menuIcon).toBeInTheDocument();
  });
});
