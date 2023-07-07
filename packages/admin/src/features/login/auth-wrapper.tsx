import React from "react";
import { Col, Row } from "antd";
import styles from "./auth-wrapper.module.css";

const AuthWrapper = ({ children }: any) => {
  return (
    <Row className={styles.signIn} data-testid="login-page">
      <Col className={styles.formSection} sm={24} md={12} lg={10}>
        <Row>
          <Col span={24} xs={24}>
            {children}
          </Col>
        </Row>
      </Col>
      <Col sm={10} md={12} lg={14} className={styles.logoView} />
    </Row>
  );
};

export default AuthWrapper;
