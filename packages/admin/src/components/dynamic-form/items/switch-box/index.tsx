import { Switch } from "antd";
import { Fragment } from "react";
import { InputBoxDto } from "@/src/components/dynamic-form/dtos/input-box.dto";
import { Field, FieldProps } from "formik";
import styles from "../../index.module.css";
const SwitchBox = ({ name, className, label }: InputBoxDto) => {
  return (
    <div data-testid="switch-box">
      <Field name={name}>
        {({ field, form }: FieldProps) => (
          <div className={styles.switchItemContainer}>
            <Switch
              className={className}
              checked={field.value}
              onChange={(checked: boolean) => {
                form.setFieldValue(name, checked);
                form.setFieldTouched(name, true, false);
              }}
            />
            <span>{label}</span>
          </div>
        )}
      </Field>
    </div>
  );
};

export default SwitchBox;
