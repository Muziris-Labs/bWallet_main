import Link from "next/link";
import Image from "next/legacy/image";

const Logo = ({ logoSize = 20, textSize = "text-xl" }) => {
  return (
    <Link className="prevent-select flex w-fit items-center gap-2" href="/">
      <div className="flex items-center justify-center rounded-lg bg-black">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={logoSize}
          height={logoSize}
          className="m-2"
        />
      </div>

      <p
        className={`hidden font-grotesque font-bold text-white sm:block ${textSize}`}
      >
        Bankless Wallet
      </p>
    </Link>
  );
};

export default Logo;
