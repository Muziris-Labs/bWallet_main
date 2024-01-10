import Image from "next/legacy/image";

const TokenItems = ({ token }) => {
  return (
    <div className="flex items-center gap-1">
      <Image
        src={`/images/home/coins/${token}.svg`}
        width={20}
        height={20}
        alt={token + " logo"}
      />

      <p className="text-sm font-medium text-white">{token.toUpperCase()}</p>
    </div>
  );
};

export default TokenItems;
