import { render } from '@testing-library/react';
import BellIcon from "../../src/components/assets/custom-ant-icons/bell-icon"
import React from "react";

describe("BellIcon", () => {
  test("renders the bell icon", () => {
    const { getByTestId } = render(<BellIcon />);
    const bellIcon = getByTestId("bell-icon");
    expect(bellIcon).toBeInTheDocument();
  });
});