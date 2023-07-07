import { render, screen } from "@testing-library/react";
import fmsAvatar, {
  AvatarSize,
  fmsAvatarProps,
} from "../../src/avatars/fms-avatar";
import "@testing-library/jest-dom";
import React from "react";

window.matchMedia =
  window.matchMedia ||
  (() => ({
    matches: false,
    addListener: () => {},
    removeListener: () => {},
  }));

describe("fmsAvatar", () => {
  it("should render an Avatar with the correct props", () => {
    const props: fmsAvatarProps = {
      size: AvatarSize.md,
      imageSrc: "https://example.com/avatar.jpg",
      testImage: false,
      dot: true,
      focused: true,
      dotType: "default" as const,
      characters: "AB",
    };

    render(<fmsAvatar {...props} />);

    const badge = screen.getByTestId("avatar-badge");
    const dotElement = badge.children[1];
    expect(dotElement).toHaveClass("ant-badge-dot");
    expect(badge).toHaveClass(
      `avatar-${AvatarSize[props.size]}-badge-container`
    );
    expect(badge).toHaveClass(`${props.dotType}Dot`);

    const avatar = screen.getByTestId("avatar");
    const imageElement = avatar.children[0];
    expect(imageElement).toHaveAttribute("src", props.imageSrc);
    expect(imageElement).toHaveAttribute("alt", props.characters);
    expect(avatar).not.toHaveAttribute("icon");

    const div = screen.getByTestId("avatar-border");
    expect(div).toHaveClass("avatarBorder");
    expect(div).toHaveClass("gray100Background");
    expect(div).not.toHaveClass("gray200Background");
  });

  it("should render the TestAvatarIcon when testImage is true", () => {
    render(<fmsAvatar size={AvatarSize.sm} testImage />);
    const avatar = screen.getByTestId("avatar");
    const icon = avatar.children[0];
    expect(icon).toHaveAttribute("width", AvatarSize.sm.toString());
    expect(icon).toHaveAttribute("height", AvatarSize.sm.toString());
  });

  it("should render the AvatarPlaceHolderIcon when imageSrc is not provided", () => {
    render(<fmsAvatar size={AvatarSize.sm} />);
    const avatar = screen.getByTestId("avatar");
    const icon = avatar.children[0];
    expect(icon).toHaveAttribute("width", AvatarSize.sm.toString());
    expect(icon).toHaveAttribute("height", AvatarSize.sm.toString());
  });

  it("should render the characters prop when it is provided", () => {
    render(<fmsAvatar size={AvatarSize.sm} characters="AB" />);
    const avatar = screen.getByTestId("avatar");
    expect(avatar).toHaveTextContent("AB");
    const div = screen.getByTestId("avatar-border");
    expect(div).not.toHaveClass("gray100Background");
    expect(div).not.toHaveClass("gray200Background");
    expect(div).toHaveClass("transparentBackground");
  });

  it("should render the TestAvatarIcon when testImage and focused is true ", () => {
    render(<fmsAvatar size={AvatarSize.sm} testImage focused />);
    const div = screen.getByTestId("avatar-border");
    expect(div).toHaveClass("gray100Background");
    expect(div).not.toHaveClass("gray200Background");
  });

  it("should render the TestAvatarIcon when imageSrc and focused is true", () => {
    render(
      <fmsAvatar
        size={AvatarSize.sm}
        imageSrc={"https://example.com/avatar.jpg"}
        focused
      />
    );
    const div = screen.getByTestId("avatar-border");
    expect(div).toHaveClass("gray100Background");
    expect(div).not.toHaveClass("gray200Background");
  });

  it("should render the TestAvatarIcon when imageSrc and focused is true", () => {
    render(<fmsAvatar size={AvatarSize.sm} focused />);
    const div = screen.getByTestId("avatar-border");
    expect(div).not.toHaveClass("gray100Background");
    expect(div).toHaveClass("gray200Background");
  });
});
