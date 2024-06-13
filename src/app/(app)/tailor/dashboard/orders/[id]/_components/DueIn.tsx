"use client";
import { Clock } from "@phosphor-icons/react";
import classes from "../index.module.scss";
export default function DueIn() {
  return (
    <div className={classes.dueIn}>
      {/* TODO: clock size */}
      <Clock className={classes.clock} />
      Anytime within the next 3 weeks(HardCoded, TODO)
    </div>
  );
}
