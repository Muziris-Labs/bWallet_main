"use client";

import { useEffect, useState } from "react";

import CopyButton from "@/components/ui/buttons/CopyButton";
import BanklessInput from "@/components/ui/BanklessInput";
import BanklessSelect from "@/components/ui/BanklessSelect";

const DepositBody = () => {
  const [loading, setLoading] = useState(true);

  const [bic, setBic] = useState(null);
  const [iban, setIban] = useState(null);
  const [beneficiary, setBeneficiary] = useState(null);

  const [address, setAddress] = useState(null);
  const [selectedToken, setSelectedToken] = useState("Select Your Token");

  useEffect(() => {
    if (selectedToken) {
      setAddress("0xAl13FmcAa9d2f2a9c0f1f5d7B4fC5B4fC5B4fC5B");
    }
  }, [selectedToken]);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setBic("JKET20201555");
      setBeneficiary("NooberBoy");
      setIban("GB33 BUKB 2020 1555 555 555");
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <section className="space-y-6">
      <div className="space-y-4">
        <BanklessSelect
          options={["BANK", "ETH", "USDC", "USDT", "BASE"]}
          id="depositToken"
          label="Select Token"
          selected={selectedToken}
          setSelected={setSelectedToken}
        />

        <div className="space-y-2">
          <BanklessInput
            label={
              (selectedToken ? selectedToken.toUpperCase() : "No") + " Address"
            }
            id="recipient"
            type="text"
            placeholder={
              selectedToken
                ? address
                  ? address.slice(0, 35) + "..."
                  : "Loading..."
                : "Select a token"
            }
            readOnly={true}
            icon={
              <CopyButton
                textToCopy={!loading && address}
                style="absolute right-3 top-1/2 -translate-y-1/2"
                size="h-5 w-5"
              />
            }
          />

          <p className="text-xs text-gray-600">
            Only send Base tokens to this address, sending any other token from
            any chain will be lost forever.
          </p>
        </div>
      </div>

      <div className="h-px w-full bg-gray-700"></div>

      <div className="space-y-4">
        <p className="text-gray-300">IBAN DETAILS</p>

        <BanklessInput
          label="Beneficiary"
          id="recipient"
          type="text"
          placeholder={beneficiary || "No beneficiary found"}
          readOnly={true}
          icon={
            <CopyButton
              textToCopy={!loading && beneficiary}
              style="absolute right-3 top-1/2 -translate-y-1/2"
              size="h-5 w-5"
            />
          }
        />

        <BanklessInput
          label="IBAN"
          id="recipient"
          type="text"
          placeholder={iban || "No IBAN found"}
          readOnly={true}
          icon={
            <CopyButton
              textToCopy={!loading && iban}
              style="absolute right-3 top-1/2 -translate-y-1/2"
              size="h-5 w-5"
            />
          }
        />

        <BanklessInput
          label="BIC"
          id="recipient"
          type="text"
          placeholder={bic || "No BIC found"}
          readOnly={true}
          icon={
            <CopyButton
              textToCopy={!loading && bic}
              style="absolute right-3 top-1/2 -translate-y-1/2"
              size="h-5 w-5"
            />
          }
        />
      </div>
    </section>
  );
};

export default DepositBody;
