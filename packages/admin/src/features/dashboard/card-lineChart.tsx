import React, { Component, useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { useCookies } from "react-cookie";
import { getSeverityStatistics } from "../../services/traps-service";
import useTranslation from "next-translate/useTranslation";
import { TranslationFiles } from "@/src/data/core";
export default function CardLineChart() {
  const { t } = useTranslation(TranslationFiles.COMMON);

  const [data, setData] = useState([]);
  const [cookies] = useCookies([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getSeverityStatistics(cookies["token"]);
        // console.log(response);
        setData(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    const severityColors:any = {
      WARNING: "#fadb14",
      INFO: "#10B981",
      ERROR: "#EF4444",
    };
    if (window.myLine) {
      window.myLine.destroy();
    }
    // Check if data has been fetched and is not an empty object
    if (Object.keys(data).length > 0) {
      const labels = Object.keys(data).sort(); // Use the sorted timestamps as labels

      const datasets = Object.keys(severityColors).map((severity) => ({
        label: t(severity.toLocaleLowerCase()),
        backgroundColor: severityColors[severity],
        borderColor: severityColors[severity],
        data: labels.map((timestamp) => data[timestamp][severity] || 0),
        fill: false,
      }));
      var config = {
        type: "line",
        data: {
          labels: labels.map((timestamp) =>
            new Date(timestamp).toLocaleTimeString() 
          ),
          datasets: datasets,
        },
        options: {
          maintainAspectRatio: false,
          responsive: true,
          title: {
            display: false,
            text: "Severity traps Charts",
            fontColor: "white",
          },
          legend: {
            labels: {
              fontColor: "white",
            },
            align: "end",
            position: "bottom",
          },
          tooltips: {
            mode: "index",
            intersect: false,
          },
          hover: {
            mode: "nearest",
            intersect: true,
          },
          scales: {
            xAxes: [
              {
                ticks: {
                  fontColor: "rgba(255,255,255,.7)",
                },
                display: true,
                scaleLabel: {
                  display: false,
                  labelString: "Month",
                  fontColor: "white",
                },
                gridLines: {
                  display: false,
                  borderDash: [2],
                  borderDashOffset: [2],
                  color: "rgba(33, 37, 41, 0.3)",
                  zeroLineColor: "rgba(0, 0, 0, 0)",
                  zeroLineBorderDash: [2],
                  zeroLineBorderDashOffset: [2],
                },
              },
            ],
            yAxes: [
              {
                ticks: {
                  fontColor: "rgba(255,255,255,.7)",
                },
                display: true,
                scaleLabel: {
                  display: false,
                  labelString: "Value",
                  fontColor: "white",
                },
                gridLines: {
                  borderDash: [3],
                  borderDashOffset: [3],
                  drawBorder: false,
                  color: "rgba(255, 255, 255, 0.15)",
                  zeroLineColor: "rgba(33, 37, 41, 0)",
                  zeroLineBorderDash: [2],
                  zeroLineBorderDashOffset: [2],
                },
              },
            ],
          },
        },
      };
    }
    var ctx = document.getElementById("line-chart").getContext("2d");
    window.myLine = new Chart(ctx, config);
  }, [data]);
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded primary-blue-600">
        <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h6 className="uppercase text-blueGray-100 mb-1 text-xs font-semibold">
                {t("overview")}
              </h6>
              <h2 className="text-white text-xl font-semibold">
                {t("severity")}
              </h2>
            </div>
          </div>
        </div>
        <div className="p-4 flex-auto">
          <div className="relative h-350-px">
            <canvas id="line-chart"></canvas>
          </div>
        </div>
      </div>
    </>
  );
}
