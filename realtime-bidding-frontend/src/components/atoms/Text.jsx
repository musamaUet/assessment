import React from "react";

export default function Text({
  children,
  text = "",
  size = "m",
  className = "",
  ...props
}) {
  const textClass =
    {
      l: "body-text-m lg:body-text-l",
      m: "body-text-s lg:body-text-m",
      s: "body-text-s",
      xs: "body-text-xs",
      xxs: "body-text-xxs",
    }[size] || "";

  return (
    <p className={`${textClass} ${className}`.trim()} {...props}>
      {text || children || "Text"}
    </p>
  );
}
