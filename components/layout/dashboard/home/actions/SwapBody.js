"use client";

import { useState } from "react";

import SwapInput from "./swapBody/SwapInput";
import SwapButton from "./swapBody/SwapButton";

const SwapBody = () => {
  const [swappingToken, setSwappingToken] = useState(0);

  const [swappingAmount, setSwappingAmount] = useState();
  const [receivingAmount, setReceivingAmount] = useState();

  const [selectedSwappingToken, setSelectedSwappingToken] = useState("Token");
  const [selectedReceivingToken, setSelectedReceivingToken] = useState("Token");

  const handleSwapButton = () => {
    swappingToken === 0 ? setSwappingToken(1) : setSwappingToken(0);

    const temp = selectedSwappingToken;
    setSelectedSwappingToken(selectedReceivingToken);
    setSelectedReceivingToken(temp);
  };

  return (
    <section className="flex flex-col items-center space-y-3">
      <SwapInput
        id="swappingAmount"
        selectId="swappingToken"
        swappingNumber={0}
        amount={swappingAmount}
        setAmount={setSwappingAmount}
        swappingToken={swappingToken}
        selectedToken={selectedSwappingToken}
        setSelectedToken={setSelectedSwappingToken}
      />

      <SwapButton
        selectedReceivingToken={selectedReceivingToken}
        selectedSwappingToken={selectedSwappingToken}
        handleSwapButton={handleSwapButton}
      />

      <SwapInput
        id="receivingAmount"
        selectId="receivingToken"
        swappingNumber={1}
        amount={receivingAmount}
        swappingToken={swappingToken}
        setAmount={setReceivingAmount}
        selectedToken={selectedReceivingToken}
        setSelectedToken={setSelectedReceivingToken}
      />
    </section>
  );
};

export default SwapBody;
