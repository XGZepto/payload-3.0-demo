import React from "react";

import "./index.scss";
import { CoatHanger } from "@phosphor-icons/react";

const Orders: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  return <CoatHanger className={isActive ? "icon-active" : "icon"} />;
};

export default Orders;
