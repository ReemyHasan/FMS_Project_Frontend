import { render } from '@testing-library/react';
import React from "react";
import CustomerIcon from '../../../src/components/assets/custom-ant-icons/sidebar/customer-icon';
import "@testing-library/jest-dom";


describe("CommunicationsIcon", () => {
  test("renders the  icon", () => {
    const { getByTestId } = render(<CustomerIcon />);
    const customer = getByTestId("customer-icon");
    expect(customer).toBeInTheDocument();
  });
});