"use client";

import { ChevronDownIcon } from "@heroicons/react/24/outline";

import { useEffect, useRef, useState } from "react";

const BanklessSelect = ({
  id,
  label,
  options,
  selected,
  setSelected,
  disabled = false,
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const handleOptionClick = (option) => {
    setSelected(option);
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={ref} className="prevent-select relative w-full">
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-medium text-gray-300"
      >
        {label}
      </label>

      <button
        id={id}
        disabled={disabled}
        onClick={() => setOpen((prev) => !prev)}
        className={`relative flex w-full justify-between rounded-lg border border-gray-700 bg-black/80 p-3 text-left text-sm font-bold text-gray-400 outline-none placeholder:text-gray-600 focus:border-gray-300 ${
          disabled && "cursor-not-allowed"
        }`}
      >
        {selected}

        <ChevronDownIcon
          className={`h-5 w-5 transition-transform ${open && "rotate-180"}`}
        />
      </button>

      {open && (
        <ul className="absolute z-10 mt-2 w-full overflow-hidden rounded-lg border border-gray-700 bg-black/80 text-gray-400">
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleOptionClick(option)}
              className="cursor-pointer px-3 py-2 text-sm hover:bg-gray-700"
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
