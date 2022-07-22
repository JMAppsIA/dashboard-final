import React from "react";
import "./button.scss";

const Button = ({
  children,
  xs,
  sm,
  md,
  l,
  xl,
  radius,
  bgColor,
  hasHover,
  hoverColor,
  hoverTextColor,
  primary,
  secondary,
  success,
  warning,
  danger,
  info,
  social,
  transparent,
  borderColor,
  textColor,
  onClick
}) => {
  const className = {
    xs: xs && "xs",
    sm: sm && "sm",
    md: md && "md",
    l: l && "l",
    xl: xl && "xl",
    radius: radius && "radius",
    hasHover: hasHover && "hasHover",
    hoverColor: hoverColor && "hoverColor",
    hoverTextColor: hoverTextColor && "hoverTextColor",
    primary: primary && "btn-primary",
    secondary: secondary && "btn-secondary",
    success: success && "success",
    warning: warning && "warning",
    danger: danger && "danger",
    info: info && "info",
    social: social && "social",
    transparent: transparent && "transparent",
    borderColor: borderColor && "borderColor",
    textColor: textColor && "textColor",
  };
  return (
    <button
      className={`btn ${Object.values(className).join(" ")}`}
      style={{
        width: xs ? 40 : sm ? 126 : md ? 166 : l ? 267 : xl ? 400 : 166,
        height: xs ? 40 : sm ? 43 : md ? 44 : l ? 55 : xl ? 57.75 : 44,
        backgroundColor: bgColor || `#696CFF`
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
