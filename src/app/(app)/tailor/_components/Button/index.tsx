/** @format */

"use client";

import React, { ElementType } from "react";
import Link from "next/link";

import classes from "./index.module.scss";

export type Props = {
  label?: string;
  appearance?: "default" | "primary" | "disable" | "danger";
  el?: "button" | "link" | "a";
  onClick?: () => void;
  href?: string;
  newTab?: boolean;
  className?: string;
  type?: "submit" | "button";
  disabled?: boolean;
  invert?: boolean;
};

export const Button: React.FC<Props> = ({
  el: elFromProps = "link",
  label,
  newTab,
  href,
  appearance,
  className: classNameFromProps,
  onClick,
  type = "button",
  disabled,
  invert = false,
}) => {
  let el = elFromProps;
  const newTabProps = newTab
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  const className = [
    classes.button,
    classNameFromProps,
    classes.appearance,
    classes[`appearance--${appearance}`],
  ]
    .filter(Boolean)
    .join(" ");

  if (onClick || type === "submit") el = "button";

  let buttonStyle = {};
  let labelStyle = {};
  if (invert) {
    buttonStyle = {
      backgroundColor: "transparent",
      border: "2px var(--use-bg-color) solid",
    };

    labelStyle = {
      color: "var(--use-bg-color)",
    };
  }

  const content = (
    <div className={classes.content}>
      <span className={classes.label} style={labelStyle}>
        {label}
      </span>
    </div>
  );

  if (el === "link") {
    return (
      <Link
        href={href || ""}
        className={className}
        {...newTabProps}
        onClick={onClick}
        style={buttonStyle}
      >
        {content}
      </Link>
    );
  }

  const Element: ElementType = el;

  return (
    <Element
      href={href}
      className={className}
      type={type}
      {...newTabProps}
      onClick={onClick}
      disabled={disabled}
      style={buttonStyle}
    >
      {content}
    </Element>
  );
};
