import React from "react";
import "./dashboard-wrapper.scss";

const DashboardWrapper = ({ children }) => {
  return <div className="dashboard-wrapper">{children}</div>;
};

export default DashboardWrapper;

export const DashboardWrapperMain = ({ children }) => {
  return <div className="dashboard-wrapper__main">{children}</div>;
};

export const DashboardWrapperRight = ({ children }) => {
  return <div className="dashboard-wrapper__right">{children}</div>;
};

export const DashboardHeader = ({ icon, title, subtitle }) => {
  return (
      <div className="dashboard-header-wrapper">
        <div className="dashboard-header-heading">
          <div className="dashboard-header-icon">
            <i className={`bx bx-${icon}`} />
          </div>
          <div>
            {title}
            <div className="dashboard-header-subheading">{subtitle}</div>
          </div>
        </div>
      </div>
  );
};

export const DashboardBody = ({ children }) => {
  return (
      <div className="dashboard-body mb">{children}</div>
  );
};
