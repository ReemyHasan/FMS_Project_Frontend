import React from "react";
import { render, screen } from "@testing-library/react";
import fmsTable from "../../src/tables/fms-table";
import "@testing-library/jest-dom";

window.matchMedia =
  window.matchMedia ||
  (() => ({
    matches: false,
    addListener: () => {},
    removeListener: () => {},
  }));

describe("fmsTable component", () => {
  const columns = [
    {
      key: "ID",
      title: "ID",
      dataIndex: "id",
      render: (id: number) => String(id),
    },
    { key: "Name", title: "Name", dataIndex: "name" },
  ];
  const props = {
    title: "Test Table",
    data: {
      dataSource: [
        { id: 1, name: "John" },
        { id: 2, name: "Jane" },
      ],
      total: 2,
    },
    columns: columns,
  };

  it("renders without crashing", () => {
    render(<fmsTable {...props} />);
  });

  it("renders the title", () => {
    const { getByText } = render(<fmsTable {...props} />);
    expect(getByText("Test Table")).toBeInTheDocument();
  });

  it("renders the total count tag", () => {
    const { getByTestId } = render(<fmsTable {...props} />);
    expect(getByTestId("fms-table-total-count")).toHaveTextContent(
      "2 Test Table"
    );
  });

  it("renders the table columns and data", () => {
    const { getByRole } = render(<fmsTable {...props} />);
    const table = getByRole("table");
    const columnHeaders = table.querySelectorAll("th");
    const cells = screen.getAllByRole("cell");
    expect(columnHeaders).toHaveLength(3);
    expect(columnHeaders[1]).toHaveTextContent("ID");
    expect(columnHeaders[2]).toHaveTextContent("Name");
    expect(cells).toHaveLength(6);
    expect(cells[1]).toHaveTextContent("1");
    expect(cells[2]).toHaveTextContent("John");
    expect(cells[4]).toHaveTextContent("2");
    expect(cells[5]).toHaveTextContent("Jane");
  });

  it("renders the pagination component", () => {
    const { getByTestId } = render(<fmsTable {...props} />);
    expect(getByTestId("fms-pagination")).toBeInTheDocument();
  });

});
