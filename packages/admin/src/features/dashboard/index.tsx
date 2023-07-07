import React from "react";
import { Card, Col } from "antd";
import styles from "./index.module.css";
import PieChartComponent from "./pie-chart";

export const UserCard = ({ userNumber }) => (
  <Col span={12}>
      <PieChartComponent />
  </Col>
);

export const FaultChart = () => (
  <Col>
    <Card title="Alarms" className={styles.dashboardChartsContainer}>
      <p>HI</p>
    </Card>
  </Col>
);


