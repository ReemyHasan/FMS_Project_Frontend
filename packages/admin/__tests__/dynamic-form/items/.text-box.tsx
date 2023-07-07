import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import TextBox from "../../../src/components/dynamic-form/items/text-box";
import "@testing-library/jest-dom";
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

describe("Text box component", () => {
  it("renders not found component correctly", () => {
    render(
      <Formik initialValues={{}} onSubmit={() => {}}>
        {(formik) => (
          <TextBox name="mad" label="made" className="madee" formik={formik} />
        )}
      </Formik>
    );
    const textBox = screen.getByTestId("text-box");
    expect(textBox).toBeInTheDocument();
  });
  test("passes field props to input", () => {
    render(
      <Formik initialValues={{}} onSubmit={() => {}}>
      {(formik) => (
    <TextBox name="username" label="Username" className="my-class" />
    )}
      </Formik>
      );
    const input = screen.getByRole("textbox");
    expect(input.getAttribute("name")).toBe("username");
    expect(input.getAttribute("class")).toContain("fullContent");
  });

  test("calls onChange handler when text is entered", () => {
    const handleChange = jest.fn();
    render(
      <Formik initialValues={{}} onSubmit={() => {}}>
      {(formik) => (
    <TextBox name="username" label="Username" className="my-class" onChange={handleChange} />
    )}
      </Formik>
    );

    const input = screen.getByRole("textbox");
    const inputValue = "Hello world!";
    fireEvent.change(input, { target: { value: inputValue } });

    expect(handleChange).toHaveBeenCalledWith(inputValue, expect.any(Object));
  });
});
