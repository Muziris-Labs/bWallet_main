"use client";

import {
  ArrowUpRightIcon,
  ArrowsRightLeftIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";

import { useState } from "react";

import BanklessInput from "@/components/ui/BanklessInput";
import BanklessSelect from "@/components/ui/BanklessSelect";
import { DefaultButton } from "@/components/ui/buttons/DefaultButton";

const TransferBody = () => {
  const [iban, setIban] = useState();
  const [amount, setAmount] = useState();
  const [recipient, setRecipient] = useState();

  const [fiatValue, setFiatValue] = useState("USD");
  const [selectedToken, setSelectedToken] = useState("Select Your Token");

  return (
    <section className="space-y-6">
      <div className="3xl:space-y-6 space-y-3">
        <BanklessSelect
          options={["BANK", "ETH", "USDC", "USDT", "BASE"]}
          id="transferToken"
          label="Select Token"
          selected={selectedToken}
          setSelected={setSelectedToken}
        />

        <BanklessInput
          type="text"
          id="recipient"
          input={recipient}
          setInput={setRecipient}
          label="Recepient Address"
          placeholder="bankless.eth"
        />

        <BanklessInput
          id="iban"
          label="IBAN"
          type="text"
          input={iban}
          setInput={setIban}
          placeholder="Bank Account Number"
          span="Required only for FIAT transfers"
          icon={
            <QuestionMarkCircleIcon className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 cursor-pointer text-gray-400" />
          }
        />

        <div className="flex items-center gap-2">
          <BanklessInput
            type="text"
            id="amount"
            label="Amount"
            input={amount}
            placeholder="0.0"
            setInput={setAmount}
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
            selected={fiatValue}
            setSelected={setFiatValue}
          />
        </div>
      </div>

      <DefaultButton
        style="rounded-full capitalize w-full font-normal text-sm 3xl:text-base bg-gradient-primary text-white"
        icon={<ArrowUpRightIcon className="h-4 w-4 text-white" />}
      >
        Send Request
      </DefaultButton>
    </section>
  );
};

export default TransferBody;
