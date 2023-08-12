import React, { Component } from "react";
import Chart from "chart.js/auto";
import useTranslation from "next-translate/useTranslation";
import { TranslationFiles } from "@/src/data/core";
interface Props {
  errorTrapCount: number;
  warnTrapCount: any;
  infoTrapCount:number;
  trapCount: number;
}
export default function CardBarChart({errorTrapCount, warnTrapCount, infoTrapCount, trapCount}:Props) {
  const { t } = useTranslation(TranslationFiles.COMMON);

  React.useEffect(() => {
    if (window.myBar) {
      window.myBar.destroy();
    }
    let config = {
      type: "bar",
      data: {
        labels: [
          t("error"),
          t("warning"),
          t("info")
        ],
        datasets: [
          {
            label: t(`error`),
            backgroundColor: ["#EF4444", "#fadb14", "#10B981"],
            borderColor: "#000f24",
            data: [errorTrapCount/trapCount, warnTrapCount/trapCount, infoTrapCount/trapCount],
            fill: false,
            barThickness: 50,
          }
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: "Severity Chart",
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        legend: {
          labels: {
            fontColor: "rgba(0,0,0,.4)",
          },
          align: "end",
          position: "bottom",
        },
        scales: {
          xAxes: [
            {
              display: false,
              scaleLabel: {
                display: true,
                labelString: "Severity",
              },
              gridLines: {
                borderDash: [2],
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.3)",
                zeroLineColor: "rgba(33, 37, 41, 0.3)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
          yAxes: [
            {
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Value",
              },
              gridLines: {
                borderDash: [2],
                drawBorder: false,
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.2)",
                zeroLineColor: "rgba(33, 37, 41, 0.15)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
        },
      },
    };
    let ctx = document.getElementById("bar-chart").getContext("2d");
    window.myBar = new Chart(ctx, config);
  }, [errorTrapCount, warnTrapCount, infoTrapCount, trapCount]);
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h6 className="uppercase text-blueGray-400 mb-1 text-xs font-semibold">
                {t("performance")}
              </h6>
              <h2 className="text-blueGray-700 text-xl font-semibold">
              {t("severity")}
              </h2>
            </div>
          </div>
        </div>
        <div className="p-4 flex-auto">
          {/* Chart */}
          <div className="relative h-350-px">
            <canvas id={"bar-chart"}></canvas>
          </div>
        </div>
      </div>
    </>
  );
}