import { Input } from "antd";
import { InputBoxDto } from "@/src/components/dynamic-form/dtos/input-box.dto";
import { Field, FieldProps } from "formik";
import React from "react";
const TextAreaBox = ({ name, className, label }: InputBoxDto) => {
  return (
    <div data-testid="text-box">
      <Field name={name}>
        {({ field }: FieldProps) => (
          <div>
            <label htmlFor={name}>{label}</label>
            <Input.TextArea
              {...field}
              placeholder={label}
              className={`fullContent ${className}`}
            />
          </div>
        )}
      </Field>
    </div>
  );
};

export default TextAreaBox;
