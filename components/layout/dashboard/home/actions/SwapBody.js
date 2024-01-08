"use client";

import { Button } from "@material-tailwind/react";
import { ArrowPathIcon } from "@heroicons/react/24/outline";

import { useState } from "react";

import TokenItems from "@/components/ui/TokenItems";
import BanklessInput from "@/components/ui/BanklessInput";
import BanklessSelect from "@/components/ui/BanklessSelect";

const SwapBody = () => {
  const [swappingToken, setSwappingToken] = useState(0);
  const [selectedSwappingToken, setSelectedSwappingToken] = useState("Token");
  const [selectedReceivingToken, setSelectedReceivingToken] = useState("Token");

  const options = [
    <TokenItems key="bank" token="bank" />,
    <TokenItems key="eth" token="eth" />,
    <TokenItems key="usdc" token="usdc" />,
    <TokenItems key="usdt" token="usdt" />,
    <TokenItems key="base" token="base" />,
  ];

  const handleSwapButton = () => {
    swappingToken === 0 ? setSwappingToken(1) : setSwappingToken(0);

    const temp = selectedSwappingToken;
    setSelectedSwappingToken(selectedReceivingToken);
    setSelectedReceivingToken(temp);
  };

  return (
    <section className="flex flex-col items-center space-y-3">
      <div className="w-full space-y-2">
        <div className="flex gap-3">
          <div className="flex-[3]">
            <BanklessInput
              label="Amount"
              id="amount"
              type="text"
              placeholder="0.00"
              icon={
                swappingToken === 0 && (
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-sm font-bold text-pink">
                    Max
                  </span>
                )
              }
            />
          </div>

          <div className="flex-[2]">
            <BanklessSelect
              options={options}
              id="token"
              label="Token"
              selected={selectedSwappingToken}
              setSelected={setSelectedSwappingToken}
            />
          </div>
        </div>

        <div className="flex justify-between rounded-lg bg-black/80 px-3 py-2 text-sm">
          <div className="flex gap-1 font-medium">
            <p className="text-gray-300">
              3000{" "}
              <span className="prevent-select">
                {selectedSwappingToken
                  ? selectedSwappingToken?.props?.token.toUpperCase()
                  : ""}
              </span>
            </p>{" "}
            ~{" "}
            <p>
              <span className="prevent-select">$</span>
              {Number(3000).toFixed(2)}
            </p>
          </div>

          <div className="flex gap-0.5 font-medium text-gray-300">
            <p>Balance:</p>
            <p>{Number(3000).toFixed(2)}</p>
          </div>
        </div>
      </div>

      {selectedSwappingToken &&
      selectedReceivingToken &&
      selectedSwappingToken === selectedReceivingToken ? (
        <div className="flex h-10 w-full items-center justify-center rounded-lg bg-red-500 text-sm font-medium text-white">
          {selectedSwappingToken === "Token" &&
          selectedReceivingToken === "Token" ? (
            <p>Select a token to swap</p>
          ) : (
            <p>
              You can&apos;t swap{" "}
              <span className="prevent-select">
                {selectedSwappingToken ? selectedSwappingToken : ""}
              </span>{" "}
              for{" "}
              <span className="prevent-select">
                {selectedReceivingToken ? selectedReceivingToken : ""}
              </span>
            </p>
          )}
        </div>
      ) : (
        <Button
          className="rounded-full bg-gradient-primary-light p-2"
          onClick={handleSwapButton}
        >
          <ArrowPathIcon className="h-6 w-6 text-white" />
        </Button>
      )}

      <div className="w-full space-y-2">
        <div className="flex gap-3">
          <div className="flex-[3]">
            <BanklessInput
              label="Amount"
              id="amount"
              type="text"
              placeholder="0.00"
              icon={
                swappingToken === 1 && (
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-sm font-bold text-pink">
                    Max
                  </span>
                )
              }
            />
          </div>

          <div className="flex-[2]">
            <BanklessSelect
              options={options}
              id="token"
              label="Token"
              selected={selectedReceivingToken}
              setSelected={setSelectedReceivingToken}
            />
          </div>
        </div>

        <div className="flex justify-between rounded-lg bg-black/80 px-3 py-2 text-sm">
          <div className="flex gap-1 font-medium">
            <p className="text-gray-300">
              3000{" "}
              <span className="prevent-select">
                {selectedReceivingToken
                  ? selectedReceivingToken?.props?.token.toUpperCase()
                  : ""}
              </span>
            </p>{" "}
            ~{" "}
            <p>
              <span className="prevent-select">$</span>
              {Number(3000).toFixed(2)}
            </p>
          </div>

          <div className="flex gap-0.5 font-medium text-gray-300">
            <p>Balance:</p>
            <p>{Number(3000).toFixed(2)}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SwapBody;
