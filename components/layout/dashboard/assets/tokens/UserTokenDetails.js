import Image from "next/legacy/image";

const UserTokenDetails = ({ tokenName }) => {
  return (
    <section className="w-2/6 space-y-5 rounded-xl bg-background-black px-7 py-5 font-grotesque">
      <p className="text-xl font-bold text-gray-300">Balance</p>

      <div className="flex items-center justify-between">
        <h3 className="font-clash-display text-4xl font-bold uppercase text-white">
          {tokenName}
        </h3>

        <div className="text-right">
          <p className="text-4xl font-bold text-white">1048942</p>
          <p className="text-xl text-gray-400">{`$138`}</p>
        </div>
      </div>

      <div className="relative">
        <Image
          src="/images/dashboard/tokens/ellipse-background.svg"
          layout="fill"
          objectFit="contain"
          alt=""
          className="prevent-select"
        />

        <div className="relative z-10 flex aspect-square w-full flex-col items-center justify-center space-y-1.5 text-center">
          <span className="prevent-select text-xl font-bold text-gray-300">
            Total
          </span>

          <div>
            <h4 className="text-3xl font-bold text-white">
              <span className="prevent-select">$</span>

              {`${(15887.06).toFixed(2)}`}
            </h4>

            <span className="text-xl text-gray-400">
              {`${(0.16).toFixed(4)}`}{" "}
              <span className="prevent-select">BTC</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserTokenDetails;
