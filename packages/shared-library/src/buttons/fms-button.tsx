import React, { FunctionComponent, MouseEventHandler, ReactNode } from "react";
import { Button } from "antd";
import classes from "./styles.module.css";

export type ButtonTypes = "primary" | "secondary" | "traity" | "link" | "danger" | "move";

interface fmsButtonProps {
  children: ReactNode;
  disabled?: boolean;
  borderRadius?: 0 | 8 | 32;
  type?: ButtonTypes;
  size?: "small" | "middle" | "large";
  onClick?: MouseEventHandler<HTMLAnchorElement> &
    MouseEventHandler<HTMLButtonElement>;
}

const FmsButton: FunctionComponent<fmsButtonProps> = ({
  children,
  borderRadius = 0,
  type = "primary",
  size = "middle",
  onClick = () => {},
  disabled = false,
}) => {
  return (
    <Button
      data-testid="fms-button"
      className={`${classes.button} ${classes?.[type]} ${classes?.[size]} ${
        classes?.[`radius-${borderRadius}`]
      }`}
      size={size}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </Button>
  );
};

export default FmsButton;
