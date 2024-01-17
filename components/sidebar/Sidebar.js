"use client";

import { Card } from "@material-tailwind/react";
import {
  DocumentDuplicateIcon,
  QrCodeIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";

import { useState } from "react";

import Logo from "../Logo";
import SideNav from "./SideNav";
import SidebarBtn from "./SidebarBtn";
import SideNavItem from "./SideNavItem";
import SidebarProfile from "./SidebarProfile";

const Sidebar = () => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div className="sticky top-0 h-screen">
      <Card className="h-screen w-full min-w-fit max-w-[20rem] space-y-3 overflow-y-auto rounded-none rounded-r-xl bg-background-black px-5 py-4 hide-scrollbar">
        <Logo />

        <section className="flex h-full flex-col justify-between gap-8">
          <div className="space-y-3">
            <SidebarProfile />

            <div className="flex w-full justify-between">
              <SidebarBtn
                label="Open QR"
                icon={<QrCodeIcon className="h-6 w-6 gradient-text" />}
              />

              <SidebarBtn
                label="Copy Pubkey"
                icon={
                  <DocumentDuplicateIcon className="h-6 w-6 gradient-text" />
                }
              />
            </div>

            <hr className="my-2 border-gray-500" />
          </div>

          <SideNav open={open} handleOpen={handleOpen} />

          <SideNavItem
            label="Need Help?"
            href="/help"
            icon={<QuestionMarkCircleIcon />}
          />
        </section>
      </Card>
    </div>
  );
};

export default Sidebar;
