import { Calendar } from "@phosphor-icons/react";
import "./index.scss";

const Appointments: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  return <Calendar className={isActive ? "icon-active" : "icon"} />;
};

export default Appointments;
