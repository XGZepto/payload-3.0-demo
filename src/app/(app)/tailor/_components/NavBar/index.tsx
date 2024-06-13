"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Gutter } from "../Gutter";
import { navbarEntries } from "./supportingTypes";
import NavBarEntry from "./navbarEntry";

export function NavBar() {
  return (
    <div className="navGridWrapper">
      <div className="innerNavWrapper">
        {navbarEntries.map((entry) => {
          return (
            <NavBarEntry
              to={`${entry.path}`}
              label={entry.label}
              Icon={entry.icon}
              key={entry.path}
            />
          );
        })}
      </div>
    </div>
  );
}

export default NavBar;
