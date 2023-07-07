import React, {Fragment, Input} from "react";
import { InputBoxDto } from "@/src/components/dynamic-form/dtos/input-box.dto";
import { Field, FieldProps } from "formik";

const TextAreaBox = ({ name, className, label }: InputBoxDto) => {
  return (
    <Fragment>
      <div>{label}</div>
      <Field name={name}>
        {({ field }: FieldProps) => (
          <Input.TextArea {...field} className={`fullContent ${className}`} />
        )}
      </Field>
    </Fragment>
  );
};

export default TextAreaBox;
