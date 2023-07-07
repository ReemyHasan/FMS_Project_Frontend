import React from "react";
import Icon from "@ant-design/icons";

const AddUserIcon = (props: any) => {
  const CustomerSvg = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 20.7656C5.33579 18.2882 8.50702 16.7656 12 16.7656C15.493 16.7656 18.6642 18.2882 21 20.7656M16.5 8.26562C16.5 10.7509 14.4853 12.7656 12 12.7656C9.51472 12.7656 7.5 10.7509 7.5 8.26562C7.5 5.78034 9.51472 3.76562 12 3.76562C14.4853 3.76562 16.5 5.78034 16.5 8.26562Z"
        stroke="#fadb14"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  return <Icon data-testid="customer-icon" component={CustomerSvg} {...props} />;
};
export default AddUserIcon;
