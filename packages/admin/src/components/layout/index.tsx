import React, { ReactNode, useState } from "react";
import { Layout } from "antd";
import AppContentView from "./components/content-view";
import AppSidebar from "./components/sidebar";
import AppHeader from "./components/header";

type AppLayoutProps = {
  children: ReactNode;
};
const AppLayout = ({ children }: AppLayoutProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <div className={"app-layout"}>
      <Layout className={"app-layout-mini-sidebar"}>
        <AppSidebar isCollapsed={isCollapsed} />
        <Layout className="app-layout-mini-sidebar-main">
          <AppHeader toggleCollapse={toggleCollapse} />
          <AppContentView>{children}</AppContentView>
        </Layout>
      </Layout>
    </div>
  );
};

export default React.memo(AppLayout);
