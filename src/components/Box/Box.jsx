import React from "react";
import "./box.scss";
const Box = ({ children, fullHeight, purple, autoWidth }) => {
  const className = {
    box: "box",
    purple: purple && "box-purple",
    fullHeight: fullHeight && "box-fullheight",
    autoWidth: autoWidth && "box-autowidth"
  };
  return <div className={Object.values(className).join(" ")}>{children}</div>;
};

export default Box;
