"use client";

import { ListItem, ListItemPrefix } from "@material-tailwind/react";

import React from "react";
import { useState } from "react";
import GradientIcon from "../ui/GradientIcon";

const SideNavItem = ({ label, icon, fill }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <ListItem
      className="sideNavItem text-white hover:bg-black focus:bg-black active:bg-black"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ListItemPrefix>
        <GradientIcon icon={icon} isHovered={isHovered} fill={fill} />
      </ListItemPrefix>

      <p
        className={`prevent-select font-grotesque text-xl text-white ${
          isHovered ? "font-bold gradient-text" : ""
        }`}
      >
        {label}
      </p>
    </ListItem>
  );
};

export default SideNavItem;
