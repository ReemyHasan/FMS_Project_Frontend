import React, { FunctionComponent} from "react";
import {
  Table,
  Tag,
} from "antd";
import classes from "./styles.module.css";
interface fmsTableProps {
  title: string;
  columns: Array<any>;
  data: Array<any>;
  t: Function;
  setData: Function;
  setColumns: Function;
  rowSelection:any;
}
const FmsTable: FunctionComponent<fmsTableProps> = ({
  title,
  data,
  columns,
  t,
  setData,
  setColumns,
  rowSelection
}) => {
 
  return (
    <div data-testid="fms-table">
      <div className={classes.tableTitleContainer}>
        {title}
        <Tag
          data-testid="fms-table-total-count"
          className={classes.totalCountTag}
        >
          {`${data.length} row`}
        </Tag>
      </div>
      <Table
        className="fms-table"
        columns={columns}
        dataSource={data}
        rowSelection = {rowSelection}
        bordered
        scroll={{ x: 1000 }}
        pagination={{ position: ['bottomLeft'], 
        pageSizeOptions: ["10", "20", "50", "100"], 
        showSizeChanger: true, locale: { items_per_page: "" } }}
        rowKey={"id"}
        // onChange={onChange}
      />
    </div>
  );
};

export default FmsTable;
