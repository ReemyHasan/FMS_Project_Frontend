import React from "react";
import { render } from "@testing-library/react";
import TrsahIcon from "../../assets/icons/avatar-placeholder-icon";

describe("TrsahIcon", () => {
  it("renders correctly", () => {
    const { container } = render(<TrsahIcon />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders with custom props", () => {
    const { container } = render(<TrsahIcon width={20} height={20} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
