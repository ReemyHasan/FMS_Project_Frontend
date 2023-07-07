import React from "react";
import { List, Dropdown, Menu, Row, Col, Badge } from "antd";
import BellIcon from "@/src/components/assets/custom-ant-icons/bell-icon";
import useTranslation from "next-translate/useTranslation";
import { TranslationFiles } from "@/src/data/core";
const AppNotifications = () => {
  const { t } = useTranslation(TranslationFiles.COMMON); 
  const menu = (
    <Menu className="notify-header-message">
      <Menu.Item className="header">
        <Row align="middle" justify={"space-between"}>
          <Col>
            <span className="Name-notifications">{t("notifications")}</span>
            <span className="count-notifications"></span>
          </Col>
        </Row>
      </Menu.Item>
      <List
        className="notify-list scrollRow"
        dataSource={[]}
        renderItem={(item: any) => {
          return "";
        }}
      />
      <Menu.Item onClick={() => {}}>
        <p className="seeNotifications">{t("see-more")}</p>
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown
      onVisibleChange={(open: boolean) => {}}
      overlay={menu}
      placement={"bottomRight"}
      trigger={["click"]}
    >
      <a className="notify-link" onClick={(e) => e.preventDefault()}>
        <Badge count={0} size="small">
          <span className="notify-icon">
            <BellIcon />
          </span>
        </Badge>
      </a>
    </Dropdown>
  );
};

export default AppNotifications;
