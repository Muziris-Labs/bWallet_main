import Image from "next/legacy/image";

const PortfolioGasFee = () => {
  return (
    <div className="flex items-center gap-2 px-3">
      <h4 className="border-r border-pink pr-2 uppercase text-gray-300">
        BASE
      </h4>

      <div className="flex gap-1">
        <div className="prevent-select">
          <Image
            src="/images/portfolio/gas.svg"
            width={16}
            height={16}
            alt="Gas Icon"
          />
        </div>

        <p className="text-sm text-gray-500">$0.04</p>
      </div>
    </div>
  );
};

export default PortfolioGasFee;
