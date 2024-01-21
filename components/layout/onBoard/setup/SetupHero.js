"use client";
import Image from "next/image";

const SetupHero = () => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <Image src="/images/setup/setupWallet.png" width={500} height={500} />
    </div>
  );
};

export default SetupHero;
