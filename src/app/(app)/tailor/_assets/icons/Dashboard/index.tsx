import React from "react";

import "./index.scss";
import { ChartBar } from "@phosphor-icons/react";
import { callbackify } from "util";

const Dashboard: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  return <ChartBar className={isActive ? "icon-active" : "icon"} />;
};

export default Dashboard;
