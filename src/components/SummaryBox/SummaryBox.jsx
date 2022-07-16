import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import React from "react";
import { Line } from "react-chartjs-2";
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import { colors } from "../../constants";
import Box from "../Box/Box";
import ChangingProgressProvider from "../ProgressBar/ChangingProgressProvider";
import "./summary-box.scss";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const SummaryBox = ({ item }) => {
  return (
    <Box>
      <div className="summary-box">
        <div className="summary-box__info">
          <div className="summary-box__info__title">
            <div>{item.title}</div>
            <span>{item.subtitle}</span>
          </div>
          <div className="summary-box__info__value">{item.value}</div>
        </div>
        <div className="summary-box__chart">
          <ChangingProgressProvider values={[0, item.percent]}>
            {(percent) => (
              <CircularProgressbarWithChildren
                styles={buildStyles({
                  pathColor: percent < 50 ? colors.red : colors.purple,
                  trailColor: "transparent",
                  strokeLinecap: "round",
                  pathTransition:
                    percent === 0 ? "none" : "stroke-dashoffset 0.8s ease 0s",
                })}
                value={percent}
              >
                <div className="summary-box__chart__value">{percent}%</div>
              </CircularProgressbarWithChildren>
            )}
          </ChangingProgressProvider>
        </div>
      </div>
    </Box>
  );
};

export default SummaryBox;

export const SummaryBoxSpecial = ({ item }) => {
  const chartOptions = {
    responsive: true,
    scales: {
      xAxis: {
        display: false,
      },
      yAxis: {
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    elements: {
      point: {
        radius: 4,
      },
    },
  };

  const chartData = {
    labels: item.chartData.labels,
    datasets: [
      {
        label: "Revenue",
        data: item.chartData.data,
        borderColor: "#696CFF",
        tension: 0.5,
      },
    ],
  };

  return (
    <Box fullHeight>
      <div className="summary-box-special">
        <div className="summary-box-special__title">{item.title}</div>
        <div className="summary-box-special__body">{item.value}</div>
        <div className="summary-box-special__footer">
          <Line options={chartOptions} data={chartData} width={`250px`} />
        </div>
      </div>
    </Box>
  );
};
