"use client";

import {
  ArrowDownLeftIcon,
  ArrowPathIcon,
  ArrowUpRightIcon,
} from "@heroicons/react/24/outline";

import { Tab, TabsHeader } from "@material-tailwind/react";

const ActionHeader = ({ activeTab, setActiveTab }) => {
  const data = [
    {
      label: "Transfer",
      value: "transfer",
      icon: <ArrowUpRightIcon className="h-4 w-4 text-white" />,
    },
    {
      label: "Deposit",
      value: "deposit",
      icon: <ArrowDownLeftIcon className="h-4 w-4 text-white" />,
    },
    {
      label: "Swap",
      value: "swap",
      icon: <ArrowPathIcon className="h-4 w-4 rotate-90 text-white" />,
    },
  ];

  return (
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
  );
};

export default ActionHeader;
