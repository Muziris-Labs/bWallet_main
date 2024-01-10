import Image from "next/legacy/image";

import Header from "@/components/layout/home/header/Header";
import Card from "@/components/layout/home/card/Card";
import EuroOnChain from "@/components/layout/home/EuroOnChain";
import OneWallet from "@/components/layout/home/OneWallet";
import Partners from "@/components/layout/home/Partners";
import Power from "@/components/layout/home/power/Power";
import LaunchApp from "@/components/layout/home/launchApp/LaunchApp";

export default function Home() {
  return (
    <>
      <div className="hero-bg">
        <Header />
        <Card />
      </div>

      <div className="mx-auto my-24 h-3 w-full md:my-32 md:w-4/5">
        <Image src="/images/home/breaker.svg" alt="" width={1920} height={1} />
      </div>

      <main className="mx-4 lg:mx-0">
        <OneWallet />
        <EuroOnChain />

        <div className="mx-auto my-24 h-3 w-full md:my-32 md:w-4/5">
          <Image
            src="/images/home/breaker.svg"
            alt=""
            width={1920}
            height={1}
          />
        </div>

        <Partners />

        <div className="mx-auto my-24 h-3 w-full md:my-32 md:w-4/5">
          <Image
            src="/images/home/breaker.svg"
            alt=""
            width={1920}
            height={1}
          />
        </div>

        <Power />
        <LaunchApp />
      </main>
    </>
  );
}
