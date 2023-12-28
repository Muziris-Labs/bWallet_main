import Image from "next/legacy/image";

const OneWallet = () => {
  return (
    <section className="space-y-10 text-center md:space-y-14">
      <div className="space-y-6">
        <h2 className="font-clash-display text-4xl font-medium md:text-5xl lg:text-6xl">
          One Wallet, all things money
        </h2>

        <p className="mx-auto max-w-3xl text-base text-gray-400 md:text-xl">
          In today&apos;s fast-paced world, managing your finances has never
          been easier. Our innovative platform seamlessly integrates all your
          financial needs, empowering you to take control of your money
          effortlessly and securely.
        </p>
      </div>

      <div className="prevent-select flex flex-wrap justify-center gap-8">
        <Image
          src="/images/home/coins/eth.svg"
          alt="Ethereum Logo"
          width={48}
          height={48}
          className="h-10 w-10 md:h-12 md:w-12"
        />

        <Image
          src="/images/home/coins/base.svg"
          alt="Base Logo"
          width={48}
          height={48}
          className="h-10 w-10 md:h-12 md:w-12"
        />

        <Image
          src="/images/home/coins/dai.svg"
          alt="Dai Logo"
          width={48}
          height={48}
          className="h-10 w-10 md:h-12 md:w-12"
        />

        <Image
          src="/images/home/coins/euro.svg"
          alt="Euro Logo"
          width={48}
          height={48}
          className="h-10 w-10 md:h-12 md:w-12"
        />

        <Image
          src="/images/home/coins/uniswap.svg"
          alt="Uniswap Logo"
          width={48}
          height={48}
          className="h-10 w-10 md:h-12 md:w-12"
        />

        <Image
          src="/images/home/coins/usdc.svg"
          alt="USD Coin Logo"
          width={48}
          height={48}
          className="h-10 w-10 md:h-12 md:w-12"
        />

        <Image
          src="/images/home/coins/bankless.svg"
          alt="Bankless DAO Logo"
          width={48}
          height={48}
          className="h-10 w-10 md:h-12 md:w-12"
        />

        <Image
          src="/images/home/coins/dollar.svg"
          alt="Dollar Logo"
          width={48}
          height={48}
          className="h-10 w-10 md:h-12 md:w-12"
        />

        <Image
          src="/images/home/coins/safe.svg"
          alt="Safe Logo"
          width={48}
          height={48}
          className="h-10 w-10 md:h-12 md:w-12"
        />

        <Image
          src="/images/home/coins/aragon-ant.svg"
          alt="Aragon AWT Logo"
          width={48}
          height={48}
          className="h-10 w-10 md:h-12 md:w-12"
        />

        <Image
          src="/images/home/coins/usdt.svg"
          alt="Tether Logo"
          width={48}
          height={48}
          className="h-10 w-10 md:h-12 md:w-12"
        />
      </div>
    </section>
  );
};

export default OneWallet;
