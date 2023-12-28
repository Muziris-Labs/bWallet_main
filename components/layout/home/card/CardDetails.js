import Image from "next/legacy/image";

import styles from "./card.module.css";

const CardDetails = ({ style }) => {
  return (
    <div
      className={`${styles.card} prevent-select w-[400px] rounded-3xl px-5 py-3 backdrop-blur-xl transition-all duration-500 lg:w-[450px] lg:p-6 ${style}`}
    >
      <div className="flex h-full flex-col justify-between gap-4 sm:gap-5 lg:gap-7">
        <div className="flex justify-between">
          <Image
            alt=""
            src="/images/home/sim-card.svg"
            width={48}
            height={48}
            className="md:h-11 md:w-11 lg:h-12 lg:w-12"
          />

          <Image
            alt=""
            src="/images/home/2-circle.svg"
            width={80}
            height={56}
            className="md:h-11 md:w-16 lg:h-14 lg:w-20"
          />
        </div>

        <p className="text-left text-lg text-white lg:text-xl">
          0xd4ebc61981e5B9AB392b68f2 638012E2346D534C
        </p>

        <div className="flex justify-between text-white">
          <div>
            <span className="block text-sm opacity-50 lg:text-base">
              BanklessCard
            </span>
            <span className="text-lg lg:text-xl">B-wallet.eth</span>
          </div>

          <div>
            <span className="block text-sm opacity-50 lg:text-base">
              Valid thru
            </span>{" "}
            <span className="text-lg lg:text-xl">12/29</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
