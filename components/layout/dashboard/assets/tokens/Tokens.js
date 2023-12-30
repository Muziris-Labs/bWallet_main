"use client";

import { Tabs } from "@material-tailwind/react";

import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import TokenTabList from "./TokenTabList";
import TokenDetails from "./TokenDetails";
import { setActiveToken } from "@/redux/slice/tokensSlice";

const Tokens = () => {
  const dispatch = useDispatch();

  const [activeTab, setActiveTab] = useState("bank");
  const [tokenData, setTokenData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    console.log("Fetch token data here...");
    setTokenData({
      tokenName: "Bankless",
      name: activeTab,
      price: "0.00",
      change: "0.00",
      graphData: [],
      userBalance: "0.00",
      userBalanceUSD: "$0.00",
      userBalanceChange: "0.00%",
    });
    dispatch(
      setActiveToken({
        tokenName: "Bankless",
        name: activeTab,
        price: "0.00",
        change: "0.00",
        graphData: [],
        userBalance: "0.00",
        userBalanceUSD: "$0.00",
        userBalanceChange: "0.00%",
      }),
    );
    setIsLoading(false);
  }, [activeTab, dispatch]);

  return (
    <Tabs value={activeTab}>
      <TokenTabList activeTab={activeTab} setActiveTab={setActiveTab} />

      <TokenDetails isLoading={isLoading} tokenData={tokenData} />
    </Tabs>
  );
};

export default Tokens;
