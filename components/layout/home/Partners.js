import Image from "next/legacy/image";

const Partners = () => {
  return (
    <section className="space-y-12 text-center">
      <h2 className="font-clash-display text-4xl font-medium md:text-5xl  lg:text-6xl">
        Our Partners
      </h2>

      <div className="prevent-select flex flex-wrap justify-center gap-x-12 gap-y-8 md:gap-x-24 lg:gap-x-32">
        <Image
          src="/images/home/partners/keycard.svg"
          alt="partners"
          width={114}
          height={48}
          className="h-8 w-auto md:h-10 lg:h-12"
        />

        <Image
          src="/images/home/partners/safe.svg"
          alt="partners"
          width={162}
          height={48}
          className="h-8 w-auto md:h-10 lg:h-12"
        />

        <Image
          src="/images/home/partners/monerium.svg"
          alt="partners"
          width={276}
          height={48}
          className="h-8 w-auto md:h-10 lg:h-12"
        />
      </div>
    </section>
  );
};

export default Partners;
