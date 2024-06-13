type date = Date;

import classes from "../index.module.scss";

export function RequestedTagLine({ createdAt }: { createdAt: date }) {
  const today = new Date();
  const timeDiff = Math.abs(today.valueOf() - createdAt.valueOf());
  let hourDiff = Math.floor(timeDiff / (1000 * 60 * 60));

  const dayDiff = Math.floor(hourDiff / 24);
  hourDiff = hourDiff % 24;

  let tagLine = "";
  if (dayDiff > 1) {
    if (hourDiff > 0) {
      tagLine = `Requested ${dayDiff} days ${hourDiff} hours ago`;
    } else {
      tagLine = `Requested ${dayDiff} days ago`;
    }
  } else if (hourDiff < 1) {
    tagLine = `Requested less than an hour ago`;
  } else {
    tagLine = `Requested ${hourDiff} hours ago`;
  }

  return <span className={classes.requestedTagLine}>{tagLine}</span>;
}
