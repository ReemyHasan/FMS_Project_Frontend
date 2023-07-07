import React from "react";
import Icon from "@ant-design/icons";

const ArrowLeftIcon = (props: any) => {
  const ArrowLeftSvg = () => (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.8333 6.99996H1.16667M1.16667 6.99996L7 12.8333M1.16667 6.99996L7 1.16663"
        stroke="#344054"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  return <Icon data-testid="arrow-left-icon" component={ArrowLeftSvg} {...props} />;
};
export default ArrowLeftIcon;
