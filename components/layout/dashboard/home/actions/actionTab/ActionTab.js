"use client";

import { Tabs } from "@material-tailwind/react";

import { useState } from "react";
import ActionHeader from "./ActionHeader";
import ActionBody from "./ActionBody";

const ActionTabs = () => {
  const [activeTab, setActiveTab] = useState("transfer");

  return (
    <Tabs value={activeTab}>
      <ActionHeader activeTab={activeTab} setActiveTab={setActiveTab} />

      <ActionBody />
    </Tabs>
  );
};

export default ActionTabs;
