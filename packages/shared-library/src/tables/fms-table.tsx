import React, { FunctionComponent} from "react";
import {
  Table,
  Tag,
} from "antd";
import classes from "./styles.module.css";
import FmsButton from "../buttons/fms-button";
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
}) => {
 
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
        scroll={{ x: 1000 }}
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
