import Link from "next/link";
import React from "react";

import "./index.scss";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";
import { format } from "util";
import { navbarEntries } from "./supportingTypes";
import { act } from "react-dom/test-utils";

type IconProps = {
  isActive: boolean;
};

type NavBarEntryProps = {
  to: string;
  Icon: React.FC<IconProps>;
  label: string;
};

const NavBarEntry = ({ to, Icon, label }: NavBarEntryProps) => {
  const pathname = usePathname();

  let activePage = useSelectedLayoutSegment() || "";
  const isActive = to === activePage;

  return (
    <div className={isActive ? "active" : "notActive"}>
      <Link href={`/dashboard/${to}`} className="linkWrapper">
        <div>
          <Icon isActive={isActive} />
        </div>
        <span className="label">{label}</span>
      </Link>
    </div>
  );
};

export default NavBarEntry;
