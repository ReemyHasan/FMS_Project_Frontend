import Icon from "@ant-design/icons";

const MenuIcon = (props: any) => {
  const MenuSvg = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 12H21M3 6H21M3 18H15"
        stroke="#667085"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  return <Icon data-testid="menu-icon" component={MenuSvg} {...props} />;
};
export default MenuIcon;
