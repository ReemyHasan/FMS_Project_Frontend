import { InputBoxDto } from "./input-box.dto";
import React from "react";

export interface SelectBoxOptionsDto {
  label: React.ReactNode;
  value?: string | number | null;
}
export interface SelectBoxDto extends InputBoxDto {
  options: Array<SelectBoxOptionsDto>;
}
