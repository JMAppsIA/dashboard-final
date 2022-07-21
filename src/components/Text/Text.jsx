import React from "react";
import "./text.scss";

const Text = ({
  children,
  black,
  blackItalic,
  bold,
  boldItalic,
  heavy,
  heavyItalic,
  light,
  lightItalic,
  medium,
  mediumItalic,
  regular,
  regularItalic,
  semi,
  semiItalic,
  thin,
  thinItalic,
  extraLight,
  extraLightItalic,
  uppercase,
  color,
  size,
  align,
  title,
  body1,
  body2
}) => {
  const className = {
    black: black && "black",
    blackItalic: blackItalic && "blackItalic",
    bold: bold && "bold",
    boldItalic: boldItalic && "boldItalic",
    heavy: heavy && "heavy",
    heavyItalic: heavyItalic && "heavyItalic",
    light: light && "light",
    lightItalic: lightItalic && "lightItalic",
    medium: medium && "medium",
    mediumItalic: mediumItalic && "mediumItalic",
    regular: regular && "regular",
    regularItalic: regularItalic && "regularItalic",
    semi: semi && "semi",
    semiItalic: semiItalic && "semiItalic",
    thin: thin && "thin",
    thinItalic: thinItalic && "thinItalic",
    extraLight: extraLight && "extraLight",
    extraLightItalic: extraLightItalic && "extraLightItalic",
    uppercase: uppercase && "uppercase",
    title: title && "title",
    body1: body1 && "body1",
    body2: body2 && "body2"
  };
  return (
    <span
      className={Object.values(className).join(" ")}
      style={{
        color: color || `black`,
        fontSize: size || title || body1 || body2 || 16,
        textAlign: align || `left`,
      }}
    >
      {children}
    </span>
  );
};

export default Text;
