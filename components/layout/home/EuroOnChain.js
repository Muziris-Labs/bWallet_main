import Image from "next/legacy/image";
import CheckBox from "./CheckBox";

const EuroOnChain = () => {
  return (
    <section className="mt-24 flex max-w-6xl flex-col items-center space-y-16 sm:mx-4 md:mt-36 md:flex-row md:items-end md:gap-10 md:space-y-0 xl:mx-auto xl:gap-12">
      <div className="space-y-14 rounded-2xl px-8 pt-8 shadow shadow-white/25 md:w-1/2">
        <h3 className="text-2xl font-bold sm:text-3xl xl:text-4xl">
          Get a personalised bank account for your{" "}
          <span className="prevent-select gradient-text">crypto wallet</span>
        </h3>

        <div className="prevent-select w-full overflow-hidden">
          <Image
            src="/images/home/cardAndEuro/card-nft.png"
            alt="Euro on Chain"
            width={480}
            height={280}
            className="h-full w-auto object-contain"
          />
        </div>
      </div>

      <div className="w-full items-center gap-10 space-y-10 sm:flex sm:w-fit md:block md:w-1/2 md:space-y-10">
        <Image
          src="/images/home/cardAndEuro/euro-coin.svg"
          alt="Euro Coins"
          width={200}
          height={200}
          className="prevent-select md:h-44 md:w-44 xl:h-52 xl:w-52"
        />

        <div className="space-y-4">
          <h3 className="text-2xl font-bold lg:text-3xl xl:text-4xl">
            Keep your <span className="prevent-select gradient-text">EURO</span>{" "}
            on chain
          </h3>

          <CheckBox />
        </div>
      </div>
    </section>
  );
};

export default EuroOnChain;
