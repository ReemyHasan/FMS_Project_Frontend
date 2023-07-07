import React, { FunctionComponent } from "react";
import Icon from "@ant-design/icons";
import { CustomIconComponentProps } from "@ant-design/icons/lib/components/Icon";

const TrsahIcon: FunctionComponent<Partial<CustomIconComponentProps>> = (
  props
) => {
  return (
    <Icon
      component={() => (
        <svg
          width={props.width}
          height={props.height}
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="64" height="64" rx="32" fill="#F2F4F7" />
          <path
            d="M42.6666 44C42.6666 42.1392 42.6666 41.2089 42.4369 40.4518C41.9199 38.7473 40.586 37.4134 38.8814 36.8963C38.1244 36.6667 37.194 36.6667 35.3332 36.6667H28.6666C26.8058 36.6667 25.8755 36.6667 25.1184 36.8963C23.4139 37.4134 22.08 38.7473 21.5629 40.4518C21.3333 41.2089 21.3333 42.1392 21.3333 44M37.9999 26C37.9999 29.3137 35.3136 32 31.9999 32C28.6862 32 25.9999 29.3137 25.9999 26C25.9999 22.6863 28.6862 20 31.9999 20C35.3136 20 37.9999 22.6863 37.9999 26Z"
            stroke="#475467"
            strokeWidth="2.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
      {...props}
    />
  );
};

export default TrsahIcon;
