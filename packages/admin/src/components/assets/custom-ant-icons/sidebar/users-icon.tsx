import React from "react";
import Icon from "@ant-design/icons";

const CommunicationsIcon = (props: any) => {
  const CommunicationsSvg = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 4.23338C17.4817 4.96974 18.5 6.49876 18.5 8.26562C18.5 10.0325 17.4817 11.5615 16 12.2979M18 17.532C19.5115 18.216 20.8725 19.3306 22 20.7656M2 20.7656C3.94649 18.2882 6.58918 16.7656 9.5 16.7656C12.4108 16.7656 15.0535 18.2882 17 20.7656M14 8.26562C14 10.7509 11.9853 12.7656 9.5 12.7656C7.01472 12.7656 5 10.7509 5 8.26562C5 5.78034 7.01472 3.76562 9.5 3.76562C11.9853 3.76562 14 5.78034 14 8.26562Z"
        stroke="#fadb14"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  return <Icon component={CommunicationsSvg} {...props} />;
};
export default CommunicationsIcon;
