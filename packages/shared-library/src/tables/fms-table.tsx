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
  pageSizeOptions:Array<string>;
  defaultPageSize:any;
  className?: string;
  scroll?: any;
}
const FmsTable: FunctionComponent<fmsTableProps> = ({
  title,
  data,
  columns,
  t,
  setData,
  setColumns,
  rowSelection,
  pageSizeOptions,
  defaultPageSize,
  className,
  scroll
}) => {
  const combinedClassName = `fms-table ${className || ""}`;
  return (
    <div data-testid="fms-table">
      <div className={classes.tableTitleContainer}>
        {title}
        <Tag
          data-testid="fms-table-total-count"
          className={classes.totalCountTag}
        >
          {data && `${data.length} row`}
        </Tag>
   
      </div>
      <Table
        className="fms-table"
        columns={columns}
        dataSource={data}
        rowSelection = {rowSelection}
        bordered
        scroll={{ x: scroll }}
        pagination={{ position: ['bottomLeft'], 
        pageSizeOptions: pageSizeOptions,
        showSizeChanger: true, locale: { items_per_page: "" },
        defaultPageSize:defaultPageSize , }}
        rowKey={"id"}
        // onChange={onChange}
      />
    </div>
  );
};

export default FmsTable;
