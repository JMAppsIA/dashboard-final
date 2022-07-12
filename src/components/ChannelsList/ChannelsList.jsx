import React from "react";
import AnimatedProgressBar from "../ProgressBar/ProgressBar";
import './channels-list.scss';

const ChannelsList = ({ data }) => {
  return (
    <ul className="channels-list">
      {data.revenueByChannel.map((item, index) => (
        <li className="channels-list__item" key={`channel-${index}`}>
          <div className="channels-list__item__title">
            <div className="channels-list__item__title__icon-label">
            {/* {item.icon}  */}
            <h5 style={{color: item.color}}>{item.title}</h5>
            </div>
            <h5>{`${item.visitor} visitor`} </h5>
            <h5>{`${item.percent} %`}</h5>
          </div>
          <div>
            <AnimatedProgressBar value={item} key={`progress-bar-${index}`}/>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ChannelsList;
