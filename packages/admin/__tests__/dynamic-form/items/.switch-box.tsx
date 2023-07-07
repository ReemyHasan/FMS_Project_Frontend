import React from "react";
import { render, fireEvent, screen, act } from "@testing-library/react";
import SwitchBox from "../components/dynamic-form/items/switch-box/index";
import "@testing-library/jest-dom";
import { Formik,Form } from "formik";
import "@testing-library/jest-dom/extend-expect";

window.matchMedia = jest.fn().mockImplementation((query) => {
  return {
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  };
});

describe("Select box component", () => {
  it("renders SelectBox component correctly", () => {
    render(
      <Formik initialValues={{}} onSubmit={() => {}}>
        {(formik) => (
          <SwitchBox
            name="switch box"
            label="switch box"
            className="switch box"
            formik={formik}
          />
        )}
      </Formik>
    );
    const switchBox = screen.getByTestId("switch-box");
    expect(switchBox).toBeInTheDocument();
  });
  it("should render an unchecked switch input by default, Test that the switch input can be toggled on and off", () => {
      render(<Formik initialValues={{}} onSubmit={() => {}}>
      {(formik) => (
        <SwitchBox
          name="switch box"
          label="switch box"
          className="switch box"
          formik={formik}
        />
      )}
    </Formik>
    );
    const switchInput = screen.getByRole('switch');
    expect(switchInput).not.toBeChecked();
    fireEvent.click(switchInput);
    expect(switchInput).toBeChecked();

    fireEvent.click(switchInput);
    expect(switchInput).not.toBeChecked();
  });
});
