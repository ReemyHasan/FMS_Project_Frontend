import React, { Component } from "react";
import Chart from "chart.js/auto";
import { Card, Col } from "antd";
import styles from "./index.module.css"
class ChartComponent extends Component {
  chartRef = React.createRef();

  componentDidMount() {
    const myChartRef = this.chartRef.current.getContext("2d");

    new Chart(myChartRef, {
      type: "bar",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            label: "Sales",
            data: [86, 67, 91, 87, 72, 82],
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1.5,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  }

  render() {
    return <Col span={24}>
      <Card title="Alarm" className={styles.chartCardsContainer} >
    <canvas className={styles.chart} ref={this.chartRef} />
    </Card>
    </Col>
  }
}

export default ChartComponent;