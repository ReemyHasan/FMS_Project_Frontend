import React from "react";
import { Menu } from "antd";
import { routes } from "@/src/routes";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import { TranslationFiles } from "@/src/data/core";
const AppVerticalNav = () => {
  const router = useRouter();
  const { t } = useTranslation(TranslationFiles.COMMON); 
  return (
    <div className={"sidebar-vertical-menu"}>
      <Menu
        theme={"dark"}
        mode="inline"
        onClick={({ key }) => {
          router.push(`/${key}`);
        }}
        selectedKeys={[router.pathname?.replace("/", "")]}
      >
        {routes.map((route) => (
          <Menu.Item key={route.key} icon={route.icon}>
            {t(route.label)}
          </Menu.Item>
        ))}
      </Menu>
    </div>
  );
};

export default AppVerticalNav;
