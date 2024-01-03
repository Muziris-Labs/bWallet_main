"use client";

const BanklessInput = ({ label, id, type, placeholder, span, icon }) => {
  const [input, setInput] = [""];

  return (
    <div className="w-full space-y-2">
      <label
        htmlFor={id}
        className="prevent-select flex items-center gap-2 text-sm text-gray-300"
      >
        {label}

        <span className="text-xs text-gray-600">{span}</span>
      </label>

      <div className="prevent-select relative">
        <input
          id={id}
          type={type}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={placeholder}
          className="w-full rounded-lg border border-gray-700 bg-black/80 p-3 text-sm text-white outline-none placeholder:font-bold placeholder:text-gray-600 focus:border-gray-300"
        />

        {icon}
      </div>
    </div>
  );
};

export default BanklessInput;
