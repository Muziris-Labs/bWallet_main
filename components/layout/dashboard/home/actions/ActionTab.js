"use client";

import {
  ArrowDownLeftIcon,
  ArrowPathIcon,
  ArrowUpRightIcon,
} from "@heroicons/react/24/outline";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

import { useState } from "react";
import TransferBody from "./TransferBody";
import DepositBody from "./DepositBody";
import SwapBody from "./SwapBody";

const ActionTabs = () => {
  const [activeTab, setActiveTab] = useState("transfer");

  const data = [
    {
      label: "Transfer",
      value: "transfer",
      icon: <ArrowUpRightIcon className="h-4 w-4 text-white" />,
      body: <TransferBody />,
    },
    {
      label: "Deposit",
      value: "deposit",
      icon: <ArrowDownLeftIcon className="h-4 w-4 text-white" />,
      body: <DepositBody />,
    },
    {
      label: "Swap",
      value: "swap",
      icon: <ArrowPathIcon className="h-4 w-4 rotate-90 text-white" />,
      body: <SwapBody />,
    },
  ];

  return (
    <Tabs value={activeTab}>
      <TabsHeader
        className="gap-1 rounded-none border-b border-gray-800 bg-transparent p-0 pb-4"
        indicatorProps={{
          className: "bg-gradient-primary-light rounded-full",
        }}
      >
        {data.map(({ label, icon, value }) => (
          <Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={`py-2 ${
              activeTab === value ? "text-white" : "text-gray-400"
            }`}
          >
            <p className="flex items-center gap-1">
              {label}
              {icon}
            </p>
          </Tab>
        ))}
      </TabsHeader>

      <TabsBody>
        {data.map(({ value, body }) => (
          <TabPanel key={value} value={value}>
            {body}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
};

export default ActionTabs;
