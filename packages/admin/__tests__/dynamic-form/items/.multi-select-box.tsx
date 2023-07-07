import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MultiSelectBox from "../components/dynamic-form/items/multi-select-box/index";
import { Formik } from "formik";
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

describe("multi select box component", () => {
  it("renders not found component correctly", () => {
    render(
      <Formik initialValues={{}} onSubmit={() => {}}>
        {(formik) => (
          <MultiSelectBox name="mad" label="made" className="madee" formik={formik} />
        )}
      </Formik>
    );
    const multiSelectBox = screen.getByTestId("multiSelectBox");
    expect(multiSelectBox).toBeInTheDocument();
  });
});
