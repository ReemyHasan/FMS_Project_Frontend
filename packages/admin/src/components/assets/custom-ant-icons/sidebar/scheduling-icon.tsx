import React from "react";
import Icon from "@ant-design/icons";

const SchedulingIcon = (props: any) => {
  const SchedulingSvg = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 10.7656H3M16 2.76562V6.76562M8 2.76562V6.76562M9 16.7656L11 18.7656L15.5 14.2656M7.8 22.7656H16.2C17.8802 22.7656 18.7202 22.7656 19.362 22.4386C19.9265 22.151 20.3854 21.6921 20.673 21.1276C21 20.4859 21 19.6458 21 17.9656V9.56563C21 7.88547 21 7.04539 20.673 6.40365C20.3854 5.83917 19.9265 5.38023 19.362 5.09261C18.7202 4.76562 17.8802 4.76562 16.2 4.76562H7.8C6.11984 4.76562 5.27976 4.76562 4.63803 5.09261C4.07354 5.38023 3.6146 5.83917 3.32698 6.40365C3 7.04539 3 7.88547 3 9.56562V17.9656C3 19.6458 3 20.4859 3.32698 21.1276C3.6146 21.6921 4.07354 22.151 4.63803 22.4386C5.27976 22.7656 6.11984 22.7656 7.8 22.7656Z"
        stroke="#fadb14"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  return <Icon component={SchedulingSvg} {...props} />;
};
export default SchedulingIcon;
