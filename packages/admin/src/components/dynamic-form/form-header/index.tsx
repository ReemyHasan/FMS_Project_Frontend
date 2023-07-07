import React from "react";
import { Row, Col } from "antd";
import FmsButton from "../../../../../shared-library/src/buttons/fms-button";
import styles from "../index.module.css";
import useTranslation from "next-translate/useTranslation";
import { TranslationFiles } from "@/src/data/core";
type DynamicFormHeaderProps = {
  className?: string;
  title: string;
};
const DynamicFormHeader = ({ className, title }: DynamicFormHeaderProps) => {
  const { t } = useTranslation(TranslationFiles.COMMON);
  return (
    <Row
      className={`${styles.formHeader} ${className}`}
      justify={"space-between"}
    >
      <Col>
        <div className={styles.formTitle}>{title}</div>
      </Col>
      <Col>
        <Row gutter={8}>
          <Col>
            <FmsButton borderRadius= {"30"} type={"secondary"}>{t("cancel")}</FmsButton>
          </Col>
          <Col>
            <FmsButton borderRadius= {"30"} htmlType={"submit"} type={"primary"}>
              {t("save")}
            </FmsButton>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default DynamicFormHeader;
