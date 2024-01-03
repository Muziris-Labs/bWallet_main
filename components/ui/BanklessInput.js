"use client";

const BanklessInput = ({ label, id, type, placeholder }) => {
  const [input, setInput] = [""];

  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-sm text-gray-300">
        {label}
      </label>

      <input
        id={id}
        type={type}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-lg border border-gray-700 bg-black/80 p-3 text-sm text-white outline-none placeholder:font-bold placeholder:text-gray-600 focus:border-gray-300"
      />
    </div>
  );
};

export default BanklessInput;
