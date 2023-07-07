import { render } from '@testing-library/react';
import React from "react";
import CommunicationsIcon from '../../../src/components/assets/custom-ant-icons/sidebar/communications-icon';
import "@testing-library/jest-dom";


describe("CommunicationsIcon", () => {
  test("renders the  icon", () => {
    const { getByTestId } = render(<CommunicationsIcon />);
    const communications = getByTestId("communications-icon");
    expect(communications).toBeInTheDocument();
  });
});