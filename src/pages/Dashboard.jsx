import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import React from "react";
import { Bar } from "react-chartjs-2";
import Box from "../components/Box/Box";
import ChannelsList from "../components/ChannelsList/ChannelsList";
import DashboardWrapper, {
  DashboardWrapperMain,
  DashboardWrapperRight,
  DashboardHeader,
} from "../components/DashboardWrapper/DashboardWrapper";
import SummaryBox, {
  SummaryBoxSpecial,
} from "../components/SummaryBox/SummaryBox";
import { colors, data } from "../constants";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  return (
    <DashboardWrapper>
      <div className="row">
        <div className="col-12 col-md-12">
          <DashboardHeader
            icon={`home`}
            title={`Dashboard`}
            subtitle={`This is an example dashboard created using build-in elements and components.`}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-8 col-md-12">
          <DashboardWrapperMain>
            <div className="row">
              <div className="col-8 col-md-12">
                <div className="row">
                  {data.summary.map((item, index) => (
                    <div
                      key={`summary-${index}`}
                      className="col-6 col-md-6 col-sm-12 mb"
                    >
                      <SummaryBox {...{ item }} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-4 hide-md">
                <SummaryBoxSpecial item={data.revenueSummary} />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <Box>
                  <RevenueByMonthsChart />
                </Box>
              </div>
            </div>
          </DashboardWrapperMain>
        </div>
        <div className="col-4 col-md-12">
          <DashboardWrapperRight>
            <div className="row">
              <div className="col-12 col-md-12">
                <Box>
                  <div className="title mb">Top Channels</div>
                  <div className="row">
                    <div className="col-12 col-md-12">
                      <div className="row">
                        <div className="col-12 col-md-12">
                          <ChannelsList data={data} />
                        </div>
                      </div>
                    </div>
                  </div>
                </Box>
              </div>
            </div>
          </DashboardWrapperRight>
        </div>
      </div>
    </DashboardWrapper>
  );
};

export default Dashboard;

const RevenueByMonthsChart = () => {
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: {
        grid: {
          display: false,
          drawBorder: false,
        },
      },
      yAxes: {
        grid: {
          display: false,
          drawBorder: false,
        },
      },
    },
    plugins: {
      legend: {
        display: true,
      },
      title: {
        display: false,
      },
    },
    elements: {
      bar: {
        backgroundColor: colors.orange,
        borderRadius: 20,
        borderSkipped: "bottom",
      },
    },
  };
  const chartData = {
    labels: data.revenueByMonths[0].labels,
    datasets: [
      {
        backgroundColor: colors.orange,
        label: data.revenueByMonths[0].title,
        data: data.revenueByMonths[0].data,
      },
      {
        backgroundColor: colors.green,
        label: data.revenueByMonths[1].title,
        data: data.revenueByMonths[1].data,
      },
    ],
  };
  return (
    <>
      <div className="title mb">Revenue by months</div>
      <div>
        <Bar options={chartOptions} data={chartData} height={`300px`} />
      </div>
    </>
  );
};
