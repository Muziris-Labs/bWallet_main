"use client";

import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";

import { useState } from "react";
import TokenGraphChart from "./TokenGraphChart";
import { useSelector } from "react-redux";

const TokenGraphTime = () => {
  const [activeTab, setActiveTab] = useState("1D");

  const activeToken = useSelector((state) => state.token.activeToken);

  const data = ["1D", "1W", "1M", "1Y", "ALL"];

  return (
    <Tabs value={activeTab}>
      <TabsHeader
        className="mb-14 w-fit space-x-4 rounded-none bg-transparent p-0 px-7"
        indicatorProps={{
          className: `bg-transparent border-b-2 border-red-400 shadow-none rounded-md`,
        }}
      >
        {data.map((time) => (
          <Tab
            key={time}
            value={time}
            onClick={() => setActiveTab(time)}
            className={`w-fit p-0 px-1 text-lg font-bold ${
              activeTab === time ? "text-white" : "text-gray-400"
            }`}
          >
            {time}
          </Tab>
        ))}
      </TabsHeader>

      <TabsBody>
        {data.map((time) => (
          <TabPanel key={time} value={time} className="p-0">
            <TokenGraphChart time={time} tokenData={activeToken} />
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
};

export default TokenGraphTime;
