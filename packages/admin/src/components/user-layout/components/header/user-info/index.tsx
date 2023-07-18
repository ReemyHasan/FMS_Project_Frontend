import React, { Fragment } from "react";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Menu, Dropdown } from "antd";
import ConfirmPopup from "./confirm-popup";

const UserInfo = () => {
  const menu = (
    <Menu>
      <Menu.Item>
        <ConfirmPopup />
      </Menu.Item>
    </Menu>
  );
  return (
    <Fragment>
      <Dropdown
        overlay={menu}
        trigger={["click"]}
        overlayStyle={{ zIndex: 1052 }}
      >
        <Avatar
          className="user-info-avatar"
          size={40}
          icon={<UserOutlined />}
        />
      </Dropdown>
    </Fragment>
  );
};
export default UserInfo;
