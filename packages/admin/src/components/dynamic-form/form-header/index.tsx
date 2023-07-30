import React from "react";
import { Row, Col } from "antd";
import FmsButton from "../../../../../shared-library/src/buttons/fms-button";
import styles from "../index.module.css";
import useTranslation from "next-translate/useTranslation";
import { TranslationFiles } from "@/src/data/core";
type DynamicFormHeaderProps = {
  className?: string;
  title: string;
  onSave:  (values: any) => void;
};
const DynamicFormHeader = ({ className, title,onSave }: DynamicFormHeaderProps) => {
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
          {/* <Col>
            <FmsButton borderRadius= {32} type={"secondary"}>{t("cancel")}</FmsButton>
          </Col> */}
          <Col>
            <FmsButton borderRadius= {32} 
            type={"primary"}
            onClick={onSave} 
            >
              {t("save")}
            </FmsButton>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default DynamicFormHeader;
