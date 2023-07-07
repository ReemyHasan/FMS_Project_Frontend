import { SelectBoxOptionsDto } from "@/src/components/dynamic-form/dtos/select-box.dto";

export enum FormItemTypes {
  Select,
  Text,
  TextArea,
  Number,
  MultiSelect,
  DatePicker,
  TimePicker,
  Switch,
}

export interface FormItemDto {
  type: FormItemTypes;
  name: string;
  label: string;
  colSpan: number;
  createMode: boolean;
  updateMode: boolean;
  className?: string;
  onChange?: Function;
  options?: Array<SelectBoxOptionsDto>;
}
