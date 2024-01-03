"use client";

import {
  ArrowsRightLeftIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";

import { useState } from "react";

import BanklessInput from "@/components/ui/BanklessInput";
import BanklessSelect from "@/components/ui/BanklessSelect";
import { DefaultButton } from "@/components/ui/ClientButtons";

const TransferBody = () => {
  const [fiatValue, setFiatValue] = useState(null);
  const [selectedToken, setSelectedToken] = useState(null);

  const handleTokenSelect = (option) => {
    setSelectedToken(option);
    console.log("Seleted option is: ", selectedToken);
  };

  const handleFiatSelect = (option) => {
    setFiatValue(option);
    console.log("Selected option is: ", fiatValue);
  };

  return (
    <section className="space-y-6">
      <BanklessSelect
        options={["BANK", "ETH", "USDC", "USDT", "BASE"]}
        id="token"
        label="Select Token"
        defaultOption="Select Your Token"
        onOptionSelect={handleTokenSelect}
      />

      <BanklessInput
        label="Recepient Address"
        id="recipient"
        type="text"
        placeholder="bankless.eth"
      />

      <BanklessInput
        label="IBAN"
        id="iban"
        type="text"
        span="Required only for FIAT transfers"
        icon={
          <QuestionMarkCircleIcon className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 cursor-pointer text-gray-400" />
        }
        placeholder="Bank Account Number"
      />

      <div className="flex items-center gap-2">
        <BanklessInput
          label="Amount"
          id="amount"
          type="text"
          placeholder="0.0"
          icon={
            <span className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-sm font-bold text-pink">
              Max
            </span>
          }
        />

        <div className="h-6 w-6">
          <ArrowsRightLeftIcon className="h-6 w-6 text-gray-500" />
        </div>

        <BanklessSelect
          options={["USD"]}
          id="fiat"
          label="Fiat Value"
          defaultOption="USD"
          onOptionSelect={handleFiatSelect}
        />
      </div>

      <DefaultButton
        variant="filled"
        style="bg-gradient-primary flex w-full rounded-full justify-center"
        label="Send"
      />
    </section>
  );
};

export default TransferBody;
