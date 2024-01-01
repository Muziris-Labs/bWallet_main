"use client";

import { ChevronDownIcon } from "@heroicons/react/24/outline";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from "@material-tailwind/react";

import { useState } from "react";

import SideNavItem from "./SideNavItem";
import GradientIcon from "../ui/GradientIcon";

const SideNavAccordion = ({
  open,
  handleOpen,
  number,
  label,
  icon,
  subLabel,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Accordion
      open={open === number}
      icon={
        <ChevronDownIcon
          strokeWidth={2.5}
          className={`mx-auto h-5 w-5 text-white transition-transform ${
            open === number ? "rotate-180" : ""
          }`}
        />
      }
    >
      <ListItem
        className={`p-0 font-grotesque hover:bg-black focus:bg-black active:bg-black ${
          open === number ? "bg-black" : ""
        }`}
        selected={open === number}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <AccordionHeader
          onClick={() => handleOpen(number)}
          className="border-b-0 p-3 text-white hover:font-bold hover:gradient-text"
        >
          <ListItemPrefix>
            <GradientIcon icon={icon} isHovered={isHovered} />
          </ListItemPrefix>

          <Typography color="white" className="mr-auto text-xl">
            {label}
          </Typography>
        </AccordionHeader>
      </ListItem>

      <AccordionBody className="py-1 pl-5">
        <List className="p-0">
          {subLabel.map((item, index) => (
            <SideNavItem
              key={index}
              label={item.label}
              href={item.href}
              icon={item.icon}
              fill={item.fill}
            />
          ))}
        </List>
      </AccordionBody>
    </Accordion>
  );
};

export default SideNavAccordion;
