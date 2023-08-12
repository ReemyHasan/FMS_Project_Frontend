import { render, fireEvent, screen } from "@testing-library/react";
import React from "react";
import FmsButton, { ButtonTypes } from "../../src/buttons/fms-button";
import "@testing-library/jest-dom";

window.matchMedia =
  window.matchMedia ||
  (() => ({
    matches: false,
    addListener: () => {},
    removeListener: () => {},
  }));

describe("fmsButton component", () => {
  const testText = "Test Button";
  const onClickMock = jest.fn();

  beforeEach(() => {
    onClickMock.mockClear();
  });

  it("renders the button text correctly", () => {
    const { getByText } = render(
      <FmsButton type="primary">{testText}</FmsButton>
    );
    expect(getByText(testText)).toBeInTheDocument();
  });

  it.each<ButtonTypes>(["primary", "secondary", "traity", "link"])(
    "renders the button with the %p type correctly",
    (type) => {
      const { getByTestId } = render(
        <FmsButton type={type}>{testText}</FmsButton>
      );
      expect(getByTestId("fms-button")).toHaveClass(`${type}`);
    }
  );

  it.each<[0 | 8 | 32, string]>([
    [0, "radius-0"],
    [8, "radius-8"],
    [32, "radius-32"],
  ])(
    "renders the button with the %p border radius correctly",
    (borderRadius, expectedClass) => {
      const { getByTestId } = render(
        <FmsButton borderRadius={borderRadius}>{testText}</FmsButton>
      );
      expect(getByTestId("fms-button")).toHaveClass(`${expectedClass}`);
    }
  );

  it.each<"small" | "middle" | "large">(["small", "middle", "large"])(
    "renders the button with the %p size correctly",
    (size) => {
      const { getByTestId } = render(
        <FmsButton size={size}>{testText}</FmsButton>
      );
      expect(getByTestId("fms-button")).toHaveClass(`${size}`);
    }
  );

  it("calls the onClick function when the button is clicked", () => {
    const { getByTestId } = render(
      <FmsButton onClick={onClickMock}>{testText}</FmsButton>
    );
    fireEvent.click(getByTestId("fms-button"));
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it("disables the button when the disabled prop is true", () => {
    const { getByTestId } = render(
      <FmsButton disabled>{testText}</FmsButton>
    );
    expect(getByTestId("fms-button")).toBeDisabled();
  });

  it("should render with default props", () => {
    const { getByTestId } = render(<FmsButton>{testText}</FmsButton>);
    expect(getByTestId("fms-button")).toBeInTheDocument();
    expect(getByTestId("fms-button")).not.toBeDisabled();
    expect(getByTestId("fms-button")).toHaveClass("primary");
    expect(getByTestId("fms-button")).toHaveClass("middle");
    expect(getByTestId("fms-button")).toHaveClass("radius-0");
    expect(getByTestId("fms-button")).toHaveClass("button");
    fireEvent.click(getByTestId("fms-button"));
    expect(onClickMock).not.toHaveBeenCalled();
  });

  it("should render with custom props", () => {
    const { getByTestId } = render(
      <FmsButton type={"secondary"} size={"large"} borderRadius={32}>
        {testText}
      </FmsButton>
    );
    expect(getByTestId("fms-button")).toBeInTheDocument();
    expect(getByTestId("fms-button")).not.toBeDisabled();
    expect(getByTestId("fms-button")).toHaveClass("secondary");
    expect(getByTestId("fms-button")).toHaveClass("large");
    expect(getByTestId("fms-button")).toHaveClass("radius-32");
  });
});
