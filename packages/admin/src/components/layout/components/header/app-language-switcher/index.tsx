import React, { Fragment } from "react";
import { Dropdown, Menu } from "antd";
import languageData from "./data";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
const AppLanguageSwitcher = () => {
  const router = useRouter();
  const { lang } = useTranslation();

  const changeLanguage = async (locale: string) => {
    router.push(router.asPath, router.asPath, { locale: locale });
  };

  const menu = (
    <Menu id="language-switcher" className="ant-dropdown-menu">
      {languageData.map((language, index: any) => (
        <Menu.Item key={index} onClick={() => changeLanguage(language?.code)}>
          <div className="langItem">
            <i className={`flag flag-24 flag-${language.icon}`} />
            <span>
              <h4>{language.name}</h4>
            </span>
          </div>
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <Fragment>
      <Dropdown
        overlay={menu}
        trigger={["click"]}
        overlayStyle={{ zIndex: 1052 }}
      >
        <a
          className="ant-dropdown-link langBtn"
          onClick={(e) => e.preventDefault()}
        >
          <span className="lang-icon">
            <i
              className={`flag flag-24 flag-${
                languageData?.find((language) => language.code === lang)?.icon
              }`}
            />
          </span>
        </a>
      </Dropdown>
    </Fragment>
  );
};

export default AppLanguageSwitcher;
