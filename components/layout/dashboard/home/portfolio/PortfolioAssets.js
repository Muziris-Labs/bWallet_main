import Image from "next/image";
import PortfolioGasFee from "./PortfolioGasFee";

const PortfolioBalance = ({ name, src, value }) => {
  return (
    <div className="flex flex-row items-center gap-2.5">
      <div className="flex flex-row items-center gap-1 rounded-full bg-primary-black px-3 py-1.5">
        <span className="text-gray-300">{name}</span>

        <div className="prevent-select h-5 w-5">
          <Image src={src} width={20} height={20} alt="Token Logo" />
        </div>
      </div>

      <p className="text-2xl font-normal text-gray-300">
        <span className="prevent-select">$</span>
        {value}
      </p>
    </div>
  );
};

const PortfolioAssets = () => {
  return (
    <section className="flex flex-row justify-between border-t border-gray-800/40 pt-4">
      <div className="flex gap-8">
        <PortfolioBalance
          name="Fiat"
          src="/images/portfolio/euro.svg"
          value="32,100"
        />

        <PortfolioBalance
          name="Crypto"
          src="/images/portfolio/base.svg"
          value="47,050"
        />
      </div>

      <PortfolioGasFee />
    </section>
  );
};

export default PortfolioAssets;
