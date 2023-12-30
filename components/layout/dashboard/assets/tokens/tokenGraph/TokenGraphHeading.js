import Image from "next/image";

const TokenGraphHeading = ({ name, tokenName }) => {
  return (
    <div className="flex items-center gap-3">
      <Image
        src={`/images/home/coins/${name}.svg`}
        width={48}
        height={48}
        alt={name + " Token Logo"}
      />

      <h2 className="font-clash-display text-3xl font-semibold text-gray-300">
        {tokenName}
        <span>{` (${name})`}</span>
      </h2>
    </div>
  );
};

export default TokenGraphHeading;
