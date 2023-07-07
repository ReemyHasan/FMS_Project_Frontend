import React from "react";
import { Layout } from "antd";
import AppLogo from "@/src/components/layout/components/app-logo";
import AppVerticalNav from "@/src/components/layout/components/sidebar/vertical-nav";
import AppLogoMark from "@/src/components/layout/components/app-logo-mark";
const { Sider } = Layout;

type AppSidebarProps = {
  isCollapsed: boolean;
};
const AppSidebar = ({ isCollapsed = false }: AppSidebarProps) => {
  return (
    <Sider theme={"dark"} breakpoint="lg" collapsed={isCollapsed}>
      <div>{isCollapsed ? <AppLogoMark /> : <AppLogo darkMode={true} />}</div>
      <div className={"app-main-sidebar-menu"}>
        <AppVerticalNav />
      </div>
    </Sider>
  );
};

export default AppSidebar;
