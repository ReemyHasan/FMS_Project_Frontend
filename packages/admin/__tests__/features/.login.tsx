import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Login from "../../src/features/login";
import "@testing-library/jest-dom";

window.matchMedia =
  window.matchMedia ||
  (() => ({
    matches: false,
    addListener: () => {},
    removeListener: () => {},
  }));

jest.mock("next/router", () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

jest.mock("react-cookie", () => ({
  useCookies: () => {
    const setCookie = (key: string, value: any) => {
      document.cookie = `${key}=${value}`;
    };
    return [{}, setCookie];
  },
}));

const errorSpy = jest.spyOn(console, "error");
errorSpy.mockImplementation(() => {});

describe("Login component", () => {
  it("renders the component", () => {
    render(<Login />);
    const loginComponent = screen.getByTestId("login-component");
    expect(loginComponent).toBeInTheDocument();
  });

  it("submits the form with email and password values",async () => {
    render(<Login />);
    const emailInput = screen.getByTestId("email");
    const passwordInput = screen.getByTestId("password");
    const submitButton = screen.getByTestId("submit-button");
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "test123" } });
    fireEvent.click(submitButton);
  });
});
