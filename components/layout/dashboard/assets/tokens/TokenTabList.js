"use client";

import { Tab, TabsHeader } from "@material-tailwind/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

import { useRef } from "react";

import TokenTabItem from "./TokenTabItem";

const TokenTabList = ({ activeTab, setActiveTab }) => {
  const tabsContentRef = useRef(null);

  const data = [
    {
      label: "BANK",
      value: "bank",
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
        <ChevronLeftIcon className="h-10 w-10" />
      </button>

      <TabsHeader
        className=" w-[calc(100vw-480px)] rounded-none border-b border-gray-800 bg-transparent p-0"
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
        <ChevronRightIcon className="h-10 w-10" />
      </button>
    </section>
  );
};

export default TokenTabList;
