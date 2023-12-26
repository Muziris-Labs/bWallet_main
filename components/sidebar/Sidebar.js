"use client";

import { Card } from "@material-tailwind/react";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";

import { useState } from "react";

import Logo from "../Logo";
import SideNavList from "./SideNavList";
import SideNavItem from "./SideNavItem";

const Sidebar = () => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Card className="flex h-screen w-full max-w-[20rem] flex-col justify-between rounded-none rounded-r-xl bg-background-black px-5 py-4">
      <Logo />

      <SideNavList open={open} handleOpen={handleOpen} />

      <SideNavItem label="Transactions" icon={<QuestionMarkCircleIcon />} />
    </Card>
  );
};

export default Sidebar;
