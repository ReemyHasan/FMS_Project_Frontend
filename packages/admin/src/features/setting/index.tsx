import React from "react";
import useTranslation from "next-translate/useTranslation";
import { TranslationFiles } from "@/src/data/core";
import FmsButton from "../../../../shared-library/src/buttons/fms-button";
import { useRouter } from "next/router";
import { Col, Divider, Row } from "antd";

const Setting = () => {
  const { t } = useTranslation(TranslationFiles.COMMON);

  const router = useRouter();
  return (
    <>
        <Divider orientation="left">{t("setting-about-page")}</Divider>

        <Col span={24} className={"pd"}>
        <FmsButton
        type="move"
        size={"large"}
        borderRadius="8"
        onClick={() => {
          router.push("/setup/setting-about-content");
        }}
      >
        {t("about-page-setting").toUpperCase()}
      </FmsButton>
      </Col>
      <Divider orientation="left">{t("setting-profile-page")}</Divider>
      <Col span={12}className={"pd"} >
      <FmsButton
        type="move"
        size={"large"}
        borderRadius="8"
        onClick={() => {
          router.push("/setup/setting-profile-content");
        }}
      >
        {t("profile-page-setting").toUpperCase()}
      </FmsButton>
      </Col>
    </>
  );
};
export default Setting;
