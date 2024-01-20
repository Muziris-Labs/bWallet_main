import Image from "next/image";

const SetupAccount = () => {
  return(
    <div className="flex item-center justify-center">
      <Image
        src="/images/setup/passKey.png"
        width={440}
        height={440}
        className="hover:cursor-pointer"
      />
    </div>
  );
};

export default SetupAccount;
