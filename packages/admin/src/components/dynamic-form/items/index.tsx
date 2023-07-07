import { Fragment } from "react";
import { FormItemDto, FormItemTypes } from "../dtos/form-item.dto";
import TextBox from "./text-box";
import TextAreaBox from "./text-area-box";
import SelectBox from "./select-box";
import NumberBox from "./number-box";
import DatePickerBox from "@/src/components/dynamic-form/items/date-picker-box";
import TimePickerBox from "@/src/components/dynamic-form/items/time-picker-box";
import MultiSelectBox from "@/src/components/dynamic-form/items/multi-select-box";
import SwitchBox from "@/src/components/dynamic-form/items/switch-box";

const DynamicFormItem = ({
  className,
  name,
  label,
  type,
  options = [],
}: FormItemDto) => {
  return (
    <Fragment>
      {((type: FormItemTypes) => {
        switch (type) {
          case FormItemTypes.Text:
            return <TextBox name={name} label={label} className={className} />;

          case FormItemTypes.TextArea:
            return (
              <TextAreaBox name={name} label={label} className={className} />
            );

          case FormItemTypes.Select:
            return (
              <SelectBox
                name={name}
                label={label}
                options={options}
                className={className}
              />
            );

          case FormItemTypes.MultiSelect:
            return (
              <MultiSelectBox
                name={name}
                label={label}
                options={options}
                className={className}
              />
            );

          case FormItemTypes.Number:
            return (
              <NumberBox className={className} name={name} label={label} />
            );

          case FormItemTypes.DatePicker:
            return (
              <DatePickerBox className={className} name={name} label={label} />
            );

          case FormItemTypes.TimePicker:
            return (
              <TimePickerBox className={className} name={name} label={label} />
            );

          case FormItemTypes.Switch:
            return (
              <SwitchBox className={className} name={name} label={label} />
            );

          default:
            return null;
        }
      })(type)}
    </Fragment>
  );
};

export default DynamicFormItem;
