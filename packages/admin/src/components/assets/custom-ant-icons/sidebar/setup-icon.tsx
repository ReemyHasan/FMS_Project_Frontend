import React from "react";
import Icon from "@ant-design/icons";

const SetupIcon = (props: any) => {
  const SetupSvg = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 8.76562L15 8.76563M15 8.76563C15 10.4225 16.3431 11.7656 18 11.7656C19.6569 11.7656 21 10.4225 21 8.76562C21 7.10877 19.6569 5.76562 18 5.76562C16.3431 5.76562 15 7.10877 15 8.76563ZM9 16.7656L21 16.7656M9 16.7656C9 18.4225 7.65685 19.7656 6 19.7656C4.34315 19.7656 3 18.4225 3 16.7656C3 15.1088 4.34315 13.7656 6 13.7656C7.65685 13.7656 9 15.1088 9 16.7656Z"
        stroke="#fadb14"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  return <Icon component={SetupSvg} {...props} />;
};
export default SetupIcon;
