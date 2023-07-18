import React, { ReactNode } from "react";
import { Layout } from "antd";
import AppFooter from "@/src/components/layout/components/footer";
const { Content } = Layout;
type AppContentViewProps = {
  children?: ReactNode;
};
const AppContentView = ({ children }: AppContentViewProps) => {
  return (
    <Content className="main-content-view">
      {children}
      <AppFooter />
    </Content>
  );
};

export default AppContentView;
