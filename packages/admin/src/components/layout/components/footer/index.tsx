import React from "react";
import { Layout, Row, Col } from "antd";
import useTranslation from "next-translate/useTranslation";
import { TranslationFiles } from "@/src/data/core";
const { Footer } = Layout;

const AppFooter = () => {
  let year: any = new Date().getFullYear();
  const { t } = useTranslation(TranslationFiles.COMMON); 
  return (
    <Footer className="app-main-footer">
      <Row className={"row"} justify={"center"} align={"middle"}>
        {/* <Col>
          {"© " + year + " "}
          <a href="#" target="_blank" rel="noopener noreferrer">
            {t("rights-reserved")}
          </a>
        </Col> */}
      </Row>
    </Footer>
  );
};

export default AppFooter;
