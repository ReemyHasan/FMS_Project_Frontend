import Icon from "@ant-design/icons";

const BellIcon = (props: any) => {
  const BellSvg = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.79514 17.4993C8.38275 18.018 9.15462 18.3327 10 18.3327C10.8454 18.3327 11.6172 18.018 12.2048 17.4993M15 6.66602C15 5.33993 14.4732 4.06816 13.5355 3.13048C12.5978 2.1928 11.3261 1.66602 10 1.66602C8.67391 1.66602 7.40214 2.1928 6.46446 3.13048C5.52678 4.06816 5 5.33993 5 6.66602C5 9.24117 4.35039 11.0043 3.62472 12.1705C3.0126 13.1542 2.70654 13.6461 2.71777 13.7833C2.73019 13.9352 2.76238 13.9932 2.88481 14.084C2.99538 14.166 3.49382 14.166 4.49071 14.166H15.5093C16.5062 14.166 17.0046 14.166 17.1152 14.084C17.2376 13.9932 17.2698 13.9352 17.2822 13.7833C17.2934 13.6461 16.9874 13.1542 16.3753 12.1705C15.6496 11.0043 15 9.24117 15 6.66602Z"
        stroke="#667085"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  return <Icon data-testid="bell-icon" component={BellSvg} {...props} />;
};
export default BellIcon;
