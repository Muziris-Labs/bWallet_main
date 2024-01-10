"use client";

import { useEffect, useState } from "react";

import SwapInput from "./swapBody/SwapInput";
import SwapButton from "./swapBody/SwapButton";

const SwapBody = () => {
  const [swappingToken, setSwappingToken] = useState(0);
  const [selectedSwappingToken, setSelectedSwappingToken] = useState("Token");
  const [selectedReceivingToken, setSelectedReceivingToken] = useState("Token");

  const handleSwapButton = () => {
    swappingToken === 0 ? setSwappingToken(1) : setSwappingToken(0);

    const temp = selectedSwappingToken;
    setSelectedSwappingToken(selectedReceivingToken);
    setSelectedReceivingToken(temp);
  };

  useEffect(() => {
    console.log(selectedSwappingToken);
    console.log(selectedReceivingToken);
  }, [selectedSwappingToken, selectedReceivingToken]);

  return (
    <section className="flex flex-col items-center space-y-3">
      <SwapInput
        swappingToken={swappingToken}
        swappingNumber={0}
        selectedToken={selectedSwappingToken}
        setSelectedToken={setSelectedSwappingToken}
      />

      <SwapButton
        selectedReceivingToken={selectedReceivingToken}
        selectedSwappingToken={selectedSwappingToken}
        handleSwapButton={handleSwapButton}
      />

      <SwapInput
        swappingToken={swappingToken}
        swappingNumber={1}
        selectedToken={selectedReceivingToken}
        setSelectedToken={setSelectedReceivingToken}
      />
    </section>
  );
};

export default SwapBody;
