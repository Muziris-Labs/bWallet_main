"use client";

import { useState } from "react";

const BanklessInput = ({
  label,
  id,
  type,
  placeholder,
  span,
  icon,
  readOnly = false,
}) => {
  const [input, setInput] = useState("");

  return (
    <div className="w-full space-y-2">
      <label
        htmlFor={id}
        className="prevent-select flex items-center gap-2 text-sm text-gray-300"
      >
        {label}

        <span className="text-xs text-gray-600">{span}</span>
      </label>

      <p className="prevent-select relative flex gap-2">
        <input
          id={id}
          type={type}
          value={input}
          readOnly={readOnly}
          onChange={(e) => setInput(e.target.value)}
          placeholder={placeholder}
          className={`w-full text-ellipsis rounded-lg border border-gray-700 bg-black/80 p-3 text-sm text-white outline-none placeholder:text-gray-600 focus:border-gray-300 ${
            readOnly && "cursor-not-allowed"
          }`}
        />

        {icon}
      </p>
    </div>
  );
};

export default BanklessInput;
