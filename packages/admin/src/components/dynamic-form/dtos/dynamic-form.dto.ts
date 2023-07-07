import { FormItemDto } from "@/src/components/dynamic-form/dtos/form-item.dto";

export enum DynamicFormTypes {
  Create,
  Update,
}

export interface FormColsDto {
  span: number;
  cards: Array<{
    title: string;
    items: Array<FormItemDto>;
  }>;
}

export interface DynamicFormDto {
  title: string;
  className?: {
    formHeaderClassName?: string;
    formContentClassName?: string;
  };
  type?: DynamicFormTypes;
  initialValues: any;
  schema?: any;
  formCol: Array<FormColsDto>;
  onFinish: (values: any) => void;
  onFinishFailed?: (error: any) => void;
}
