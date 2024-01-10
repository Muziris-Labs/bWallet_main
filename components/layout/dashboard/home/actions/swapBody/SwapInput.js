"use client";

import TokenItems from "@/components/ui/TokenItems";
import BanklessInput from "@/components/ui/BanklessInput";
import BanklessSelect from "@/components/ui/BanklessSelect";

const SwapInput = ({
  swappingToken,
  swappingNumber,
  selectedToken,
  setSelectedToken,
}) => {
  const options = [
    <TokenItems key="bank" token="bank" />,
    <TokenItems key="eth" token="eth" />,
    <TokenItems key="usdc" token="usdc" />,
    <TokenItems key="usdt" token="usdt" />,
    <TokenItems key="base" token="base" />,
  ];

  return (
    <div className="w-full space-y-2">
      <div className="flex gap-3">
        <div className="flex-[3]">
          <BanklessInput
            label="Amount"
            id="amount"
            type="text"
            placeholder="0.00"
            icon={
              swappingToken === swappingNumber && (
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
            selected={selectedToken}
            setSelected={setSelectedToken}
          />
        </div>
      </div>

      <div className="flex justify-between rounded-lg bg-black/80 px-3 py-2 text-sm">
        <div className="flex gap-1 font-medium">
          <p className="text-gray-300">
            3000{" "}
            <span className="prevent-select">
              {selectedToken ? selectedToken?.props?.token.toUpperCase() : ""}
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
  );
};

export default SwapInput;
