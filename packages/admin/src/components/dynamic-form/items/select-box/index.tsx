import { Select } from "antd";
import React from "react";
import { SelectBoxDto } from "@/src/components/dynamic-form/dtos/select-box.dto";
import { Field, FieldProps } from "formik";

const SelectBox = ({ name, className, label, options = [] }: SelectBoxDto) => {
  return (
    <Field name={name} as={Select}>
      {({ field, form }: FieldProps) => (
        <div>
          <label htmlFor={name}>{label}</label>
          <Select
            {...field}
            placeholder={label}
            onChange={(value: any) => form.setFieldValue(name, value)}
            className={`fullContent ${className}`}
            options={options}
          />
        </div>
      )}
    </Field>
  );
};

export default SelectBox;
