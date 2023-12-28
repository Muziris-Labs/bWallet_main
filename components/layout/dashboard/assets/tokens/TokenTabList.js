"use client";

import { Tab, TabsHeader } from "@material-tailwind/react";

import { useRef } from "react";

import TokenTabItem from "./TokenTabItem";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

const TokenTabList = ({ activeTab, setActiveTab }) => {
  const tabsContentRef = useRef(null);

  const data = [
    {
      label: "BANK",
      value: "bankless",
    },
    {
      label: "ETH",
      value: "eth",
    },
    {
      label: "USDC",
      value: "usdc",
    },
    {
      label: "USDT",
      value: "usdt",
    },
    {
      label: "Base",
      value: "base",
    },
    {
      label: "BANK",
      value: "bankless1",
    },
    {
      label: "ETH",
      value: "eth1",
    },
    {
      label: "USDC",
      value: "usdc1",
    },
    {
      label: "USDT",
      value: "usdt1",
    },
    {
      label: "Base",
      value: "base1",
    },
    {
      label: "BANK",
      value: "bankless2",
    },
    {
      label: "ETH",
      value: "eth2",
    },
    {
      label: "USDC",
      value: "usdc2",
    },
    {
      label: "USDT",
      value: "usdt2",
    },
    {
      label: "Base",
      value: "base2",
    },
  ];

  const handlePrev = () => {
    const container = tabsContentRef.current;

    if (container) {
      const scrollAmount = container.scrollLeft - container.offsetWidth - 16;

      container.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleNext = () => {
    const container = tabsContentRef.current;

    if (container) {
      const scrollAmount = container.scrollLeft + container.offsetWidth - 16;

      container.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative flex gap-6 overflow-hidden">
      <button onClick={handlePrev} className="arrow-button">
        <ArrowLeftIcon className="h-8 w-8" />
      </button>

      <TabsHeader
        className=" w-[calc(100vw-448px)] rounded-none border-b border-gray-800 bg-transparent p-0"
        indicatorProps={{
          className: `bg-transparent border-b-2 border-red-400 shadow-none rounded-none`,
        }}
      >
        <section
          ref={tabsContentRef}
          className="flex w-full overflow-x-auto hide-scrollbar"
        >
          {data.map(({ label, value }) => (
            <Tab
              key={value}
              value={value}
              onClick={() => setActiveTab(value)}
              className={activeTab === value ? "text-gray-900" : ""}
            >
              <TokenTabItem label={label} value={value} />
            </Tab>
          ))}
        </section>
      </TabsHeader>

      <button onClick={handleNext} className="arrow-button">
        <ArrowRightIcon className="h-8 w-8" />
      </button>
    </section>
  );
};

export default TokenTabList;
