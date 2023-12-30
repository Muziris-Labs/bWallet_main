import Image from "next/legacy/image";

const TokenTabItem = ({ name }) => {
  return (
    <section className="flex gap-2 px-8">
      <div className="h-9 w-9 overflow-hidden rounded-full">
        <Image
          src={`/images/home/coins/${name}.svg`}
          width={36}
          height={36}
          alt={name + " Token Logo"}
        />
      </div>

      <div className="text-center text-white">
        <p className="font-grotesque text-xl font-bold uppercase">
          {name.toUpperCase()}
        </p>
        <span className="text-[10px]">1000</span>
      </div>
    </section>
  );
};

export default TokenTabItem;
