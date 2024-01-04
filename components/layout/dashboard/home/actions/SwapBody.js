"use client";

import BanklessInput from "@/components/ui/BanklessInput";
import BanklessSelect from "@/components/ui/BanklessSelect";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { Button } from "@material-tailwind/react";
import Image from "next/legacy/image";
import { useEffect, useState } from "react";

const TokenItems = ({ token }) => {
  return (
    <div className="flex items-center gap-1">
      <Image
        src={`/images/home/coins/${token}.svg`}
        width={20}
        height={20}
        alt={token + " logo"}
      />

      <p className="text-sm font-medium text-white">{token.toUpperCase()}</p>
    </div>
  );
};

const SwapBody = () => {
  const [swappingToken, setSwappingToken] = useState(0);
  const [updateSelectedToken, setUpdateSelectedToken] = useState(false);
  const [selectedSwappingToken, setSelectedSwappingToken] = useState(null);
  const [selectedReceivingToken, setSelectedReceivingToken] = useState(null);

  const handleSwappingToken = (option) => {
    setSelectedSwappingToken(option.props.token);
  };

  const handleReceivingToken = (option) => {
    setSelectedReceivingToken(option.props.token);
  };

  const handleSwapButton = () => {
    swappingToken === 0 ? setSwappingToken(1) : setSwappingToken(0);

    const temp = selectedSwappingToken;
    setSelectedSwappingToken(selectedReceivingToken);
    setSelectedReceivingToken(temp);
  };

  useEffect(() => {
    setUpdateSelectedToken((prev) => !prev);
  }, [swappingToken]);

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
              options={[
                <TokenItems key="bank" token="bank" />,
                <TokenItems key="eth" token="eth" />,
                <TokenItems key="usdc" token="usdc" />,
                <TokenItems key="usdt" token="usdt" />,
                <TokenItems key="base" token="base" />,
              ]}
              id="token"
              label="Token"
              defaultOption="Token"
              onOptionSelect={handleSwappingToken}
            />
          </div>
        </div>

        <div className="flex justify-between rounded-lg bg-black/80 px-3 py-2 text-sm">
          <div className="flex gap-1 font-medium">
            <p className="text-gray-300">
              3000{" "}
              <span className="prevent-select">
                {selectedSwappingToken
                  ? selectedSwappingToken.toUpperCase()
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
          <p>
            You can&apos;t swap{" "}
            <span className="prevent-select">
              {selectedSwappingToken ? selectedSwappingToken.toUpperCase() : ""}
            </span>{" "}
            for{" "}
            <span className="prevent-select">
              {selectedReceivingToken
                ? selectedReceivingToken.toUpperCase()
                : ""}
            </span>
          </p>
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
              options={[
                <TokenItems key="bank" token="bank" />,
                <TokenItems key="eth" token="eth" />,
                <TokenItems key="usdc" token="usdc" />,
                <TokenItems key="usdt" token="usdt" />,
                <TokenItems key="base" token="base" />,
              ]}
              id="token"
              label="Token"
              defaultOption="Token"
              onOptionSelect={handleReceivingToken}
            />
          </div>
        </div>

        <div className="flex justify-between rounded-lg bg-black/80 px-3 py-2 text-sm">
          <div className="flex gap-1 font-medium">
            <p className="text-gray-300">
              3000{" "}
              <span className="prevent-select">
                {selectedReceivingToken
                  ? selectedReceivingToken.toUpperCase()
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
