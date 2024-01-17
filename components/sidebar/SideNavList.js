"use client";

import {
  FireIcon,
  WalletIcon,
  Cog8ToothIcon,
  ArrowsUpDownIcon,
  RectangleGroupIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import SideNavItem from "./SideNavItem";
import SideNavAccordion from "./SideNavAccordion";

const SideNavList = ({ open, handleOpen, walletSubItems, assetsSubItems }) => {
  const pathname = usePathname();

  const [activeItem, setActiveItem] = useState("");
  const [activeSubItem, setActiveSubItem] = useState("");

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  useEffect(() => {
    const pathParts = pathname.split("/");
    console.log(pathname);

    if (pathParts.length > 1) {
      setActiveItem(pathParts[1]);
      setActiveSubItem("");
    }

    if (pathParts.length > 2) {
      setActiveSubItem(pathParts[2]);
    }
  }, [pathname]);

  return (
    <>
      <SideNavItem
        label="Dashboard"
        href="/dashboard"
        icon={<RectangleGroupIcon />}
        active={activeItem === "dashboard"}
        onClick={() => {
          handleOpen(0);
          handleItemClick("dashboard");
        }}
      />

      <SideNavItem
        label="Transactions"
        href="/transactions"
        icon={<ArrowsUpDownIcon />}
        active={activeItem === "transactions"}
        onClick={() => {
          handleOpen(0);
          handleItemClick("transactions");
        }}
      />

      <SideNavAccordion
        open={open}
        handleOpen={handleOpen}
        number={1}
        label="Wallet"
        icon={<WalletIcon className="h-5 w-5" />}
        subLabel={walletSubItems}
        active={activeItem === "wallet"}
        setActiveItem={setActiveItem}
        onClick={() => handleItemClick("wallet")}
        activeSubItem={activeSubItem}
        setActiveSubItem={setActiveSubItem}
      />

      <hr className="my-2 border-gray-500" />

      <SideNavAccordion
        open={open}
        handleOpen={handleOpen}
        number={2}
        label="Assets"
        icon={<FireIcon className="h-5 w-5" />}
        subLabel={assetsSubItems}
        active={activeItem === "assets"}
        setActiveItem={setActiveItem}
        onClick={() => handleItemClick("assets")}
        activeSubItem={activeSubItem}
        setActiveSubItem={setActiveSubItem}
      />

      <SideNavItem
        label="Contacts"
        href="/contacts"
        icon={<ChatBubbleLeftRightIcon />}
        active={activeItem === "contacts"}
        onClick={() => {
          handleOpen(0);
          handleItemClick("contacts");
        }}
      />

      <SideNavItem
        label="Settings"
        href="/settings"
        icon={<Cog8ToothIcon />}
        active={activeItem === "settings"}
        onClick={() => {
          handleOpen(0);
          handleItemClick("settings");
        }}
      />
    </>
  );
};

export default SideNavList;
