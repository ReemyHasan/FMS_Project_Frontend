import { InputNumber } from "antd";
import React from "react";
import { InputBoxDto } from "@/src/components/dynamic-form/dtos/input-box.dto";
import { Field, FieldProps } from "formik";

const InputNumberBox = ({ name, className, label }: InputBoxDto) => {
  return (
    <Field name={name}>
      {({ field, form }: FieldProps) => (
        <div>
          <label htmlFor={name}>{label}</label>
          <InputNumber
            {...field}
            placeholder={label}
            onChange={(value: any) => form.setFieldValue(name, value)}
            className={`fullContent ${className}`}
          />
        </div>
      )}
    </Field>
  );
};

export default InputNumberBox;
