"use client";

import { useState } from "react";
import { Tabs } from "@material-tailwind/react";

import TokenTabList from "./TokenTabList";
import TokenDetails from "./TokenDetails";

const Tokens = () => {
  const [activeTab, setActiveTab] = useState("bank");

  return (
    <Tabs value={activeTab}>
      <TokenTabList activeTab={activeTab} setActiveTab={setActiveTab} />

      <TokenDetails />
    </Tabs>
  );
};

export default Tokens;
