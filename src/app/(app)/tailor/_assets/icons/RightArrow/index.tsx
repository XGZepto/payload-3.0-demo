import React from "react";

import "./index.scss";
import { ArrowRight } from "@phosphor-icons/react";

const RightArrow: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  return <ArrowRight className={isActive ? "icon-active" : "icon"} />;
};

export default RightArrow;
