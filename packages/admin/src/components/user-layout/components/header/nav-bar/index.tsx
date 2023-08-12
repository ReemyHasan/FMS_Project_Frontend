import React, { Fragment } from "react";
import { Menu } from "antd";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import { TranslationFiles } from "@/src/data/core";
import { ExceptionOutlined, ExclamationCircleOutlined, FundOutlined, MenuOutlined, UserOutlined } from "@ant-design/icons";
const NavBar = () => {
  const router = useRouter();
  const { t } = useTranslation(TranslationFiles.COMMON);

  return (
    <Fragment>
          <Menu 
        mode="horizontal" 
        onSelect={(selectedItem:any) => {
          router.push(`/user/${selectedItem.key}`);
        }}
        overflowedIndicator={<MenuOutlined style={{ fontSize: "20px", color: "#000" }}
        className={"ExclamationCircleOutlined "}/>} >
        <Menu.Item key="landing" icon={<ExclamationCircleOutlined 
        style={{ fontSize: "20px", color: "#000" }}
        className={"ExclamationCircleOutlined "}/>}>
          {t("about")}
        </Menu.Item>
        <Menu.Item key="dashboard"  icon={<FundOutlined 
        style={{ fontSize: "20px", color: "#000" }}
        className={"ExclamationCircleOutlined "}/>}>
          {t("dashborad")}
        </Menu.Item>
        <Menu.Item key="traps"  icon={<ExceptionOutlined 
        style={{ fontSize: "20px", color: "#000" }}
        className={"ExclamationCircleOutlined "}/>}>
          {("trap-data")}
        </Menu.Item>
        <Menu.Item key="profile"  icon={<UserOutlined 
        style={{ fontSize: "20px", color: "#000" }}
        className={"ExclamationCircleOutlined "}/>}
        >
          {t("profile")}
        </Menu.Item>
        
      </Menu>
    </Fragment>
  );
};

export default NavBar;
