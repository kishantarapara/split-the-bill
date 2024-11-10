import React from "react";

import "./button.css";

export default function Button({
  className,
  primary,
  secondary,
  children,
  ...rest
}) {
  let classList = `${className ?? ""} ${primary ? "primary" : ""} ${
    secondary ? "secondary" : ""
  }`;
  return (
    <button className={classList} {...rest}>
      {children}
    </button>
  );
}
