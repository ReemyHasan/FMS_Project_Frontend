import React from "react";
import { Layout, Row, Col } from "antd";
import AppLanguageSwitcher from "./app-language-switcher";
import AppNotifications from "./app-notifications";
import UserInfo from "./user-info";
import MenuIcon from "@/src/components/assets/custom-ant-icons/menu-icon";
const { Header } = Layout;

type AppHeaderProps = {
  toggleCollapse: Function;
};
const AppHeader = ({ toggleCollapse }: AppHeaderProps) => {
  return (
    <Header className="app-header-mini-sidebar">
      <Row justify={"space-between"} align={"middle"} className={"fullContent"}>
        <Col span={12}>
          <Row align={"middle"}>
            <Col>
              <MenuIcon onClick={() => toggleCollapse()} />
            </Col>
          </Row>
        </Col>
        <Col span={12}>
          <Row gutter={8} align={"middle"} justify={"end"}>
            <Col className={"app-language-switcher"}>
              <AppLanguageSwitcher />
            </Col>
            <Col className={"app-notifications"}>
              <AppNotifications />
            </Col>
            <Col className={"app-user-info"}>
              <UserInfo />
            </Col>
          </Row>
        </Col>
      </Row>
    </Header>
  );
};

export default AppHeader;
