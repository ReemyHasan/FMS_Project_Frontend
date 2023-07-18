import React, { ReactNode, useState } from "react";
import { Layout } from "antd";
import AppContentView from "./components/content-view";
import AppHeader from "./components/header";

type AppLayoutProps = {
  children: ReactNode;
};
const UserLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className={"app-layout"}>
      <Layout className={"app-layout-mini-sidebar"}>
        <Layout className="app-layout-mini-sidebar-main">
          <AppHeader />
          <AppContentView>{children}</AppContentView>
        </Layout>
      </Layout>
    </div>
  );
};

export default React.memo(UserLayout);
