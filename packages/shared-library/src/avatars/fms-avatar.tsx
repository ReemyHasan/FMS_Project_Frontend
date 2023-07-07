import React, { FunctionComponent } from "react";
import classes from "./styles.module.css";
import { Avatar, Badge } from "antd";
import TestAvatarIcon from "../../assets/icons/test-avatar-icon";
import AvatarPlaceHolderIcon from "../../assets/icons/avatar-placeholder-icon";

export enum AvatarSize {
  xs = 24,
  sm = 32,
  md = 40,
  lg = 48,
  xl = 56,
  xxl = 64,
}

export type AvatarDotType = "default" | "company" | "verified";

export interface fmsAvatarProps {
  size: AvatarSize;
  imageSrc?: string;
  testImage?: boolean;
  dot?: boolean;
  focused?: boolean;
  dotUrl?: string;
  dotType?: AvatarDotType;
  characters?: string;
}

const fmsAvatar: FunctionComponent<fmsAvatarProps> = ({
  size,
  imageSrc,
  testImage = false,
  dot = false,
  focused = false,
  dotType,
  characters,
}) => {
  return (
    <Badge
      data-testid="avatar-badge"
      dot={dot}
      className={`avatar-${
        AvatarSize[size]
      }-badge-container ${`${dotType}Dot`}`}
    >
      <div
        data-testid="avatar-border"
        className={`${classes.avatarBorder} ${
          focused
            ? testImage || imageSrc
              ? classes.gray100Background
              : classes.gray200Background
            : classes.transparentBackground
        }`}
      >
        <Avatar
          data-testid="avatar"
          className={classes.avatar}
          size={size}
          src={imageSrc}
          alt={characters}
          icon={
            characters ? (
              false
            ) : testImage ? (
              <TestAvatarIcon width={size} height={size} />
            ) : (
              <AvatarPlaceHolderIcon width={size} height={size} />
            )
          }
        >
          {characters}
        </Avatar>
      </div>
    </Badge>
  );
};

export default fmsAvatar;
