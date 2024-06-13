/** @format */

import { StatusBar } from "../_components/StatusBar";
import { NavBar } from "../_components/NavBar";

import "../_css/app.scss";
import classes from "./index.module.scss";
import { Gutter } from "../_components/Gutter";

export default async function DashboardLayout(props: {
  children: React.ReactNode;
}) {
  const { children } = props;

  return (
    <div className={classes.gridWrapper}>
      <NavBar />
      <div className={classes.pageWrapper}>
        <StatusBar />
        <Gutter>
          <main>{children}</main>
        </Gutter>
      </div>
    </div>
  );
}
