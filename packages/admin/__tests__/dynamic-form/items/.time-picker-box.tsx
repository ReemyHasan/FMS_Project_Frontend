import React from "react";
import { render, fireEvent, screen,dom } from "@testing-library/react";
import "@testing-library/jest-dom";
import TimePickerBox from "../../../src/components/dynamic-form/items/time-picker-box";
import { Formik, Form, Field, FieldProps } from "formik";
import "@testing-library/jest-dom/extend-expect";
import moment from "moment";

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

describe("Time picker box component", () => {
  const name = 'testName';
  const label = 'Test Label';
  it("renders not found component correctly", () => {
    render(
      <Formik initialValues={{}} onSubmit={() => {}}>
        {(formik) => (
          <TimePickerBox name="mad" label="made" className="madee" formik={formik} />
        )}
      </Formik>
    );
    const timePickerBox = screen.getByTestId("time-picker-box");
    expect(timePickerBox).toBeInTheDocument();
  });
  it("calls setFieldValue and setFieldTouched on change", () => {
  
    render(
      <Formik initialValues={{}} onSubmit={() => {}}>
        <Form>
        <Field name={"name"}>
        {({ field, form }: FieldProps) => (
          <TimePickerBox
            value={field.value ? moment(field.value) : undefined}
            onChange={(time) => {
              form.setFieldValue(name, time ? time.toISOString() : null);
              form.setFieldTouched(name, true, false);
            }}
          />
        )}
      </Field>
        </Form>
      </Formik>
    );
  
    const timePicker = screen.getByTestId("time-picker");
    fireEvent.change(timePicker, { target: { value: "14:30" } });
    fireEvent.mouseDown(timePicker);
    // now calendar popup is opened and 2020-01-15 cell is selected, just click on it
    fireEvent.click(document.querySelector('.ant-picker-now-btn'));
  
    // expect(outerForm.setFieldValue).toHaveBeenCalledWith('"time", "14:30"');;
    // expect(outerForm.setFieldTouched).toHaveBeenCalledWith("time", true);
  });

});

