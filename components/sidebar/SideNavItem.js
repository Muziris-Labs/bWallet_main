"use client";

import { ListItem, ListItemPrefix } from "@material-tailwind/react";

import React from "react";
import Link from "next/link";
import { useState } from "react";

import GradientIcon from "../ui/GradientIcon";

const SideNavItem = ({ label, icon, fill, href, active, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={href} onClick={onClick}>
      <ListItem
        className={`sideNavItem text-white hover:bg-black focus:bg-black active:bg-black ${
          active ? "bg-black" : ""
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <ListItemPrefix>
          <GradientIcon
            icon={icon}
            isHovered={isHovered || active}
            fill={fill}
          />
        </ListItemPrefix>

        <p
          className={`prevent-select font-grotesque text-xl text-white ${
            isHovered || active ? "font-bold gradient-text" : ""
          }`}
        >
          {label}
        </p>
      </ListItem>
    </Link>
  );
};

export default SideNavItem;
