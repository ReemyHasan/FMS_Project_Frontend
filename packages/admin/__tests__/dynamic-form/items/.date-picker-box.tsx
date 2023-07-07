import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import DatePickerBox from "../../../src/components/dynamic-form/items/date-picker-box/index";
import { Formik,Form,Field,FieldProps } from "formik";
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

describe("date picker box component", () => {
  it("renders not found component correctly", () => {
    render(
      <Formik initialValues={{}} onSubmit={() => {}}>
        {(formik) => (
          <DatePickerBox name="mad" label="made" className="madee" formik={formik} />
        )}
      </Formik>
    );
    const datepicker = screen.getByTestId("datepicker");
    expect(datepicker).toBeInTheDocument();
  });
  it("calls setFieldValue and setFieldTouched on change", () => {
  
    render(
      <Formik initialValues={{}} onSubmit={() => {}}>
        <Form>
        <Field name={"name"}>
        {({ field, form }: FieldProps) => (
          <DatePickerBox
            value={field.value ? moment(field.value) : undefined}
            onChange={(date) => {
              form.setFieldValue("name", date ? date.toISOString() : null);
              form.setFieldTouched("name", true, false);
            }}
          />
        )}
      </Field>
        </Form>
      </Formik>
    );
  
    const datepicker = screen.getByTestId("datepicker");
    // fireEvent.change(datepicker, { target: { value: ":" } });
    fireEvent.mouseDown(datepicker);
    // now calendar popup is opened and 2020-01-15 cell is selected, just click on it
    fireEvent.click(document.querySelector('.ant-picker-today-btn'));
    fireEvent.click(document.querySelector('.ant-picker-clear'));
    
  
    // expect(outerForm.setFieldValue).toHaveBeenCalledWith('"time", "14:30"');;
    // expect(outerForm.setFieldTouched).toHaveBeenCalledWith("time", true);
  });

});
