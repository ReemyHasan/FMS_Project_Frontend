import React, { FunctionComponent, useState, useEffect } from "react";
import {
  Table,
  Tag,
  Dropdown,
  Menu,
  Modal,
  Checkbox,
  Input,
  Col,
  Row,
} from "antd";
import FmsButton from "../buttons/fms-button";
import { MoreOutlined, SearchOutlined } from "@ant-design/icons";
import classes from "./styles.module.css";
interface fmsTableProps {
  title: string;
  columns: Array<any>;
  data: {
    dataSource: Array<any>;
    total: number;
  };
  t: Function;
  setData: Function;
  setColumns: Function;
}
const FmsTable: FunctionComponent<fmsTableProps> = ({
  title,
  data,
  columns,
  t,
  setData,
  setColumns,
}) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [visibleColumns, setVisibleColumns] = useState(
    columns.map((col: any) => col.key)
  );
  const [selectedColumnKeys, setSelectedColumnKeys] = useState([]);
  const [deleteColumnModalVisible, setDeleteColumnModalVisible] =
    useState(false);
  const [searchText, setSearchText] = useState("");
  const [originalData, setOriginalData] = useState(data.dataSource);
  // useEffect(() => {
  //   // Store the original data when the component mounts
  //   setOriginalData(data.dataSource);
  // }, [data.dataSource]);

  const handleRowSelectionChange = (selectedRowKeys: any) => {
    setSelectedRowKeys(selectedRowKeys);
  };

  const handleMenuClick = (event: any) => {
    const { key } = event;

    switch (key) {
      case "delete-row":
        setData((prevData: any) => ({
          ...prevData,
          dataSource: prevData.dataSource.filter(
            (item: any) => !selectedRowKeys.includes(item.id)
          ),
        }));
        setSelectedRowKeys([]);
        break;
      case "delete-return-column":
        setDeleteColumnModalVisible(true);
        break;
      case "orderBy":
        // Code to order the table by the selected column
        break;
      default:
        break;
    }
  };

  const handleDeleteColumnModalOk = () => {
    setVisibleColumns(
      columns
        .map((col) => col.key)
        .filter((colKey) => !selectedColumnKeys.includes(colKey))
    );
    setDeleteColumnModalVisible(false);
  };

  const handleDeleteColumnModalCancel = () => {
    setDeleteColumnModalVisible(false);
  };

  const handleColumnCheckboxChange = (e: any) => {
    const colKey = e.target.value;
    const checked = e.target.checked;

    setSelectedColumnKeys((prevSelectedColumnKeys) => {
      if (checked) {
        return [...prevSelectedColumnKeys, colKey];
      } else {
        return prevSelectedColumnKeys.filter((key) => key !== colKey);
      }
    });
  };
  const handleSearchTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const handleSearch = () => {
    setData((prevData: any) => ({
      ...prevData,
      dataSource: originalData,
    }));
    const filteredData = data.dataSource.filter((item: any) =>
      Object.values(item).some(
        (value) =>
          typeof value === "string" &&
          value.toLowerCase().includes(searchText.toLowerCase())
      )
    );

    // Update the dataSource prop of the Table component with the filtered data
    setData((prevData: any) => ({
      ...prevData,
      dataSource: filteredData,
    }));
  };

  const handleResetSearch = () => {
    setSearchText("");
    setData((prevData: any) => ({
      ...prevData,
      dataSource: originalData,
    }));
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="delete-row">{t("delete-row")}</Menu.Item>
      <Menu.Item key="delete-return-column">
        {t("delete-return-column")}
      </Menu.Item>
      <Menu.Item key="orderBy">{t("order-by-column")}</Menu.Item>
    </Menu>
  );

  const deleteColumnModal = (
    <Modal
      open={deleteColumnModalVisible}
      onOk={handleDeleteColumnModalOk}
      onCancel={handleDeleteColumnModalCancel}
    >
      <p>{t("select-columns-to-delete-or-return")}</p>
      {columns.map((col) => (
        <Checkbox
          key={col.key}
          value={col.key}
          checked={selectedColumnKeys.includes(col.key)}
          onChange={handleColumnCheckboxChange}
        >
          {col.title}
        </Checkbox>
      ))}
    </Modal>
  );

  const visibleColumnsData = columns.filter((col) =>
    visibleColumns.includes(col.key)
  );

  return (
    <div data-testid="fms-table">
      <div className={classes.tableTitleContainer}>
        {title}
        <Tag
          data-testid="fms-table-total-count"
          className={classes.totalCountTag}
        >
          {`${data.total} row`}
        </Tag>
        <Row gutter={12}>
          <Col>
            <Input
              placeholder={t("search")}
              value={searchText}
              onChange={handleSearchTextChange}
              onPressEnter={handleSearch}
            />
          </Col>
          <Col>
            <FmsButton type="secondary" onClick={handleSearch}>
              <SearchOutlined />
            </FmsButton>
          </Col>
          <Col>
            <FmsButton type="primary" onClick={handleResetSearch}>
              {t("reset")}
            </FmsButton>
          </Col>

          <Col span={24}>
            <Dropdown overlay={menu} placement="bottomRight">
              <div className={classes.moreIcon}>
                <MoreOutlined />
              </div>
            </Dropdown>
          </Col>
        </Row>
      </div>
      <Table
        className="fms-table"
        columns={visibleColumnsData}
        dataSource={data.dataSource}
        rowSelection={{
          type: "checkbox",
          selectedRowKeys,
          onChange: handleRowSelectionChange,
        }}
        scroll={{ x: 1000 }}
        pagination={true}
        rowKey={"id"}
      />
      {deleteColumnModal}
    </div>
  );
};

export default FmsTable;
