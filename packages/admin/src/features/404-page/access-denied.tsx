import { Button, Col, Row } from "antd";
import React from "react";
import styles from "./index.module.css";
import router from "next/router";
import ArrowLeftIcon from "@/src/components/assets/custom-ant-icons/arrow-left-icon";
import useTranslation from "next-translate/useTranslation";
import { TranslationFiles } from "@/src/data/core";
import { useCookies } from "react-cookie";

const AccessDenied = () => {
  const { t } = useTranslation(TranslationFiles.COMMON);

  const [cookies] = useCookies([]);
  const handleGoBack = () => {
    router.back();
  };

  const handleGoHome = () => {
    if(cookies["role"]=="user")
    {
        router.push("/user/landing");
    }
    else if(cookies["role"]=="admin")
    router.push("/dashboard");
else{
    router.push("/sign-in");

}
  };
  return (
    <Row data-testid="not-found-component" className={styles.notFoundPage}>
      <Col span={12} xs={24} md={12} lg={12}>
        <Row className={styles.text}>
          <span>{t("error-403 Forbidden")}</span>
        </Row>
        <Row>
          <h1 className={styles.notFoundHead}>{t("access-denied")}</h1>
        </Row>
        <Row>
          <p className={styles.notFoundParaghraph}>
            {t("access-denied")}
            <br />
            {/* {t("helpful-links")} : */}
          </p>
        </Row>
        <Row gutter={10} className={styles.notFoundBtns}>
          {/* <Col
            className={styles.TakeHome}
            span={8}
            xs={24}
            sm={24}
            md={10}
            lg={8}
          >
            <Button onClick={handleGoBack} className={styles.notFoundBtn}>
              <ArrowLeftIcon />
              {t("go-back")}
            </Button>
          </Col> */}
          <Col
            className={styles.goBack}
            span={8}
            xs={24}
            sm={24}
            md={12}
            lg={8}
          >
            <Button
              onClick={handleGoHome}
              className={`${styles.btnColor} ${styles.notFoundBtn}`}
            >
              {t("take-me-home")}
            </Button>
          </Col>
        </Row>
      </Col>
      <Col
        span={12}
        xs={24}
        md={12}
        lg={12}
        className={styles.accessDeniedView}
      ></Col>
    </Row>
  );
};

export default AccessDenied;
