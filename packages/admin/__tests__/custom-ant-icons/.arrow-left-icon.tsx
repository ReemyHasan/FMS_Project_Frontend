import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import ArrowLeftIcon from "../../src/components/assets/custom-ant-icons/arrow-left-icon"
import React from "react";

describe("ArrowLeftIcon", () => {
  test("renders the ArrowLeftIcon", () => {
    const { getByTestId } = render(<ArrowLeftIcon />);
    const arrowLeftIcon = getByTestId("arrow-left-icon");
    expect(arrowLeftIcon).toBeInTheDocument();
  });
});