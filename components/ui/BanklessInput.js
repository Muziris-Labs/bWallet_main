"use client";

import { Input } from "@material-tailwind/react";

const BanklessInput = () => {
  return (
    <div className="space-y-2">
      <label htmlFor="token" className="text-sm text-gray-300">
        Token
      </label>

      <input
        id="token"
        type="text"
        placeholder="Select Token"
        className="w-full rounded-lg border border-gray-600 bg-transparent p-3 text-sm text-white outline-none placeholder:font-bold placeholder:text-gray-600 focus:border-gray-300"
      />
    </div>
  );
};

export default BanklessInput;
