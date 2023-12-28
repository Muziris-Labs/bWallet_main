import Image from "next/legacy/image";

import Logo from "@/components/Logo";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mx-4 mt-24 text-center md:mt-28 lg:mt-36">
      <p className="mx-auto max-w-3xl text-base text-gray-400 md:text-xl">
        Embrace the future of finance by unlocking the power of blockchain and
        self-custody through smart contracts, empowering you with unparalleled
        control over your digital assets and transactions.
      </p>

      <Image
        src="/images/home/breaker.svg"
        alt="hero-bg"
        width={1920}
        height={1}
        className="mx-auto mb-4 mt-12 h-3 w-full md:mb-6 md:mt-16 md:w-4/5"
      />

      <div className="mx-2 flex justify-between pb-4">
        <Logo />

        <div className="flex gap-5">
          <Link
            href="https://twitter.com/bankless_wallet"
            className="prevent-select rounded-lg bg-black p-2 shadow-sm shadow-white/20 transition-transform hover:scale-105 active:scale-100"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image
              src="/images/social/twitter.svg"
              width={24}
              height={24}
              alt="Twitter"
            />
          </Link>

          <Link
            href="https://discord.gg/bNmNrsyDru"
            className="active:scale-transform prevent-select rounded-lg bg-black p-2 shadow-sm shadow-white/20 hover:scale-105 active:scale-100"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image
              src="/images/social/discord.svg"
              width={24}
              height={24}
              alt="Discord"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
