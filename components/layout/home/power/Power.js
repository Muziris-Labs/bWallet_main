import Image from "next/legacy/image";
import PowerBtn from "./PowerBtn";

const Power = () => {
  return (
    <section className="space-y-12 text-center lg:mx-2">
      <div className="space-y-6">
        <h2 className="mx-auto max-w-4xl font-clash-display text-4xl font-medium md:text-5xl lg:text-6xl">
          Unlock the power of blockchain and self custody by smart contract
        </h2>

        <p className="mx-auto max-w-3xl text-base text-gray-400 md:text-xl">
          Embrace the future of finance by unlocking the power of blockchain and
          self-custody through smart contracts, empowering you with unparalleled
          control over your digital assets and transactions.
        </p>

        <PowerBtn />
      </div>

      <div className="flex flex-wrap justify-between gap-y-14 md:justify-evenly lg:flex-nowrap lg:items-center lg:justify-center">
        <div className="relative w-full lg:order-2 lg:w-fit">
          <div
            className="absolute left-1/2 top-1/2 -z-10 aspect-square h-auto w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-primary p-6"
            style={{ filter: "blur(100px)" }}
          ></div>

          <div className="prevent-select">
            <Image
              src="/images/home/power/mobile.png"
              width={512}
              height={852}
              alt="Bankless Wallet Mobile"
              className="mx-auto"
            />
          </div>
        </div>

        <div className="mx-auto space-y-6 lg:order-1">
          <Image
            src="/images/home/power/chain.png"
            width={128}
            height={128}
            alt="On chain wallet"
            className="prevent-select mx-auto"
          />

          <div className="mx-auto max-w-xs space-y-2">
            <h4 className="text-2xl font-bold">On Chain recovery</h4>
            <p className="text-base text-gray-400">
              Recover your crypto eallets with smart contract if you forget your
              passphrases.
            </p>
          </div>
        </div>

        <div className="mx-auto space-y-6 lg:order-3">
          <Image
            src="/images/home/power/gas-tank.png"
            width={128}
            height={128}
            alt="One gas tank"
            className="prevent-select mx-auto"
          />

          <div className="mx-auto max-w-xs space-y-2">
            <h4 className="text-2xl font-bold">One Gas Tank</h4>
            <p className="text-base text-gray-400">
              Flexible gas fee payment options for your on chain activities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Power;
