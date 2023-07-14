import React from "react";
import { List, Dropdown, Menu, Row, Col, Badge } from "antd";
import BellIcon from "@/src/components/assets/custom-ant-icons/bell-icon";
import useTranslation from "next-translate/useTranslation";
import { TranslationFiles } from "@/src/data/core";
import { useRouter } from "next/router";
import FmsButton from "../../../../../../../shared-library/src/buttons/fms-button";
type AppNotificationsProps = {
  data: Array<any>;
  setData: Function;
};
const AppNotifications = ({ data, setData }: AppNotificationsProps) => {
  const { t } = useTranslation(TranslationFiles.COMMON);
  const router = useRouter();
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
        dataSource={data.slice(-3)}
        renderItem={(item: any) => (
          <List.Item>
            <div className={`severity-${item.severity}`}>{item.severity}</div>
            <div>{item.agentAddress}</div>
            {/* Add more properties as required */}
          </List.Item>
        )}
      />
        <Row gutter={12}>
          {" "}
          <Col>
            <FmsButton
              // className="seeNotifications"
              size={"small"}
              type = "traity"
              onClick={() => {
                setData([]);
                router.push("/traps");
              }}
            >
              {t("see-more")}
            </FmsButton>
          </Col>
          <Col>
            <FmsButton size={"small"} type = "traity"  onClick={() => setData([])}>
              {t("confirm")}
            </FmsButton>
          </Col>
        </Row>

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
        <Badge
          count={data.length}
          size="small"
          style={{ backgroundColor: "red" }}
        >
          <span className="notify-icon">
            <BellIcon />
          </span>
        </Badge>
      </a>
    </Dropdown>
  );
};

export default AppNotifications;
