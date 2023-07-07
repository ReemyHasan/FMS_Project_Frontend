import React from "react";
import { render } from "@testing-library/react";
import TestAvatarIcon from "../../assets/icons/test-avatar-icon";

describe("TestAvatarIcon", () => {
  it("renders correctly", () => {
    const { container } = render(<TestAvatarIcon />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders with custom props", () => {
    const { container } = render(<TestAvatarIcon width={20} height={20} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
