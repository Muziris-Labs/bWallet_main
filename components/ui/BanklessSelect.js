"use client";

import { ChevronDownIcon } from "@heroicons/react/24/outline";

import { useState } from "react";

const BanklessSelect = ({ options }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(options[0]);

  const handleOptionClick = (option) => {
    setSelected(option);
    setOpen(false);
  };

  return (
    <div className="relative">
      <label
        for="token"
        className="mb-2 block text-sm font-medium text-gray-400"
      >
        Token
      </label>

      <button
        id="token"
        onClick={() => setOpen((prev) => !prev)}
        className="relative flex w-full justify-between rounded-lg border border-gray-700 bg-black/80 p-3 text-left text-sm font-bold text-gray-400 outline-none placeholder:font-bold placeholder:text-gray-600 focus:border-gray-300"
      >
        {selected}

        <ChevronDownIcon
          className={`h-5 w-5 transition-transform ${open && "rotate-180"}`}
        />
      </button>

      {open && (
        <ul className="absolute mt-2 w-full overflow-hidden rounded-lg border border-gray-700 bg-black/80 text-gray-400">
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleOptionClick(option)}
              className="cursor-pointer p-3 hover:bg-gray-700"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BanklessSelect;
