import { TimePicker } from "antd";
import { Fragment } from "react";
import { InputBoxDto } from "@/src/components/dynamic-form/dtos/input-box.dto";
import { Field, FieldProps, form } from "formik";
import moment from "moment";
const TimePickerBox = ({ name, className, label, ...rest }: InputBoxDto) => {
  return (
    <div data-testid="time-picker-box">
      <div>{label}</div>
      {/*// @ts-ignore*/}
      <Field name={name}>
        {({ field, form }: FieldProps) => (
          <TimePicker
            {...rest}
            data-testid="time-picker"
            className={`fullContent ${className}`}
            value={field.value ? moment(field.value) : undefined}
            onChange={(time:any) => {
              form.setFieldValue(name, time ? time.toISOString() : null);
              form.setFieldTouched(name, true, false);
            }}
          />
        )}
      </Field>
    </div>
  );
};

export default TimePickerBox;
