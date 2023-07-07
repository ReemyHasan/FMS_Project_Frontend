import { DatePicker, DatePickerProps } from "antd";
import React, { Fragment } from "react";
import { InputBoxDto } from "@/src/components/dynamic-form/dtos/input-box.dto";
import { Field, FieldProps } from "formik";
import moment from "moment";
const DatePickerBox = ({ name, className, label, ...rest }: InputBoxDto) => {
  return (
    <div >
      <div>{label}</div>
        {/*// @ts-ignore*/} 
      <Field name={name}>
        {({ field, form }: FieldProps) => (
         <DatePicker
          data-testid="datepicker"
            {...rest}
            className={`fullContent ${className}`}
            value={field.value ? moment(field.value) : null}
            onChange={(date) => {
              form.setFieldValue(name, date ? date.toISOString() : null);
              form.setFieldTouched(name, true, false);
            }}
          />
        )}
      </Field>
    </div>
  );
};

export default DatePickerBox;
