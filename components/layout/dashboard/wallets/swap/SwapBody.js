"use client";

import { ArrowsRightLeftIcon } from "@heroicons/react/24/outline";

import { useState } from "react";

import SwapInput from "./SwapInput";
import SwapButton from "./SwapButton";
import { DefaultButton } from "@/components/ui/buttons/DefaultButton";

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
    <section className="space-y-6">
      <div className="flex flex-col items-center space-y-3">
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
      </div>

      <DefaultButton
        style="rounded-full capitalize w-full font-normal text-sm 3xl:text-base bg-gradient-primary text-white"
        icon={<ArrowsRightLeftIcon className="h-4 w-4 text-white" />}
      >
        Swap
      </DefaultButton>
    </section>
  );
};

export default SwapBody;
