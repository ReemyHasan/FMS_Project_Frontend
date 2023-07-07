import React, { Component } from "react";
import Chart from "chart.js/auto";
import styles from "./index.module.css";
import { Card, Col, Row } from "antd";
class PieChartComponent extends Component {
  chartRef = React.createRef();

  componentDidMount() {
    const myChartRef = this.chartRef.current.getContext("2d");

    new Chart(myChartRef, {
      type: "pie",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              "#FFF1C9",//, , , ,  and .
              "#F7B7A3",
              "#EA5F89",
              "#9B3192",
              "#57167E",
              "#2B0B3F",
            ],
            borderColor: [
              "rgba(255, 99, 132, 0.1)",
              "rgba(54, 162, 235, 0.1)",
              "rgba(255, 206, 86, 0.1)",
              "rgba(75, 192, 192, 0.1)",
              "rgba(153, 102, 255, 0.1)",
              "rgba(255, 159, 64, 0.1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });
  }

  render() {
    return (
      <Card title="User Number" className={styles.dashboardCardsContainer}>
        <canvas
          className={styles.pieChart}
          ref={this.chartRef}
          width={this.props.width}
          height={this.props.height}
        />
      </Card>
    );
  }
}

export default PieChartComponent;
