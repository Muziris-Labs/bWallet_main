import Image from "next/image";

const NFTsSelected = () => {
  return (
    <div className="flex flex-col rounded-lg fixed items-center px-10 py-5 bg-background-black h-fit justify-between">
      <div className="flex flex-col items-center mb-24">
        <Image
          src="/images/nfts/nftImg1.svg"
          alt="Description of your image"
          className='rounded-lg mb-16'
          width={420}
          height={420}
        />
        <h1 className="text-[28px] font-bold">Peter Pat #4513</h1>
        <p className="text-center text-base leading-[22px] text-[#BDBDBD] ">
          TRADEMARK, the first generative art collection on Art Blocks Engine by
          Jack Butcher speaks volumes of the high-energy race environment where
          branding is as fierce as the competition itself. This collection ...
        </p>
      </div>


      <div className="w-full">
        <div className="flex flex-row justify-between">
          <h1>Trademark</h1>
          <p>LoduLalit</p>
        </div>
        <div className="flex flex-row justify-between">
          <h1>Contract Address</h1>
          <p>0x8cdb...0d3c</p>
        </div>
        <div className="flex flex-row justify-between">
          <h1>Token ID</h1>
          <p>4009731</p>
        </div>
        <div className="flex flex-row justify-between">
          <h1>Token Standard</h1>
          <p>ERC-721</p>
        </div>
        <div className="flex flex-row justify-between">
          <h1>Chain</h1>
          <p>Ethereum</p>
        </div>
      </div>
    </div>
  );
};

export default NFTsSelected;
