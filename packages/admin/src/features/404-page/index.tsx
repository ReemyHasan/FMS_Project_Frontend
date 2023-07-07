import { Button, Col, Row } from "antd";
import React from "react";
import styles from "./index.module.css";
import router from "next/router";
import ArrowLeftIcon from "@/src/components/assets/custom-ant-icons/arrow-left-icon";
import useTranslation from "next-translate/useTranslation";
import { TranslationFiles } from "@/src/data/core";

const NotFound = () => {
  const { t } = useTranslation(TranslationFiles.COMMON);

  const handleGoBack = () => {
    router.back();
  };

  const handleGoHome = () => {
    router.push("/");
  };
  return (
    <Row data-testid="not-found-component" className={styles.notFoundPage}>
      <Col span={12} xs={24} md={12} lg={12}>
        <Row className={styles.text}>
          <span>{t("error-404")}</span>
        </Row>
        <Row>
          <h1 className={styles.notFoundHead}>{t("page-not-found")}</h1>
        </Row>
        <Row>
          <p className={styles.notFoundParaghraph}>
            {t("sorry-page-not-found")}
            <br />
            {t("helpful-links")} :
          </p>
        </Row>
        <Row gutter={10} className={styles.notFoundBtns}>
          <Col
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
          </Col>
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
        className={styles.notFoundView}
      ></Col>
    </Row>
  );
};

export default NotFound;
