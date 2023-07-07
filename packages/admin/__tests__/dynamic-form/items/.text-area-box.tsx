import React from "react";
import { render, fireEvent,userEvent, screen,waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

import TextAreaBox from "../components/dynamic-form/items/text-area-box/index";
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

describe("TextAreaBox", () => {
  test("renders label and text area", () => {
    render(
      <Formik initialValues={{}} onSubmit={() => {}}>
        
          <TextAreaBox name="message" label="Message" className="my-class" onChange={() => {}} />
        
      </Formik>
    );

    expect(screen.getByText("Message")).toBeInTheDocument();
    expect(screen.getByTestId("textArea")).toBeInTheDocument();
  });

  test("calls onChange handler when text is entered", async () => {
    const handleChange = jest.fn();
    render(
      <Formik initialValues={{}} onSubmit={() => {}}>
        
          <TextAreaBox name="message" label="Message" className="my-class" onChange={handleChange} />
        
      </Formik>
    );

    const textArea = screen.getByTestId("textArea");
    const inputValue = "Hello, world!";
    fireEvent.change(textArea, { target: { value: inputValue } });
    expect(handleChange).toHaveBeenCalledWith(inputValue, expect.any(Object));
  });
});
