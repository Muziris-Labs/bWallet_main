"use client"

import Image from "next/image";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const NFTsSelected = () => {

  const activeNft = useSelector((state) => state.nfts.activeNft);
  
  useEffect(()=>{
    console.log(activeNft)
  },[activeNft])

  return (
    <div className="flex flex-col rounded-lg fixed items-center px-10 py-5 bg-background-black h-[calc(100vh-96px)] justify-between mr-[1%] ">
      <div className="flex flex-col items-center ">
        <Image
          src={activeNft.nftImageSrc}
          alt="Description of your image"
          className='rounded-lg mb-3'
          width={420}
          height={420}
        />
        <div className="text-center">
          <h1 className="text-[28px] font-bold">{activeNft.nftName}</h1>
          <p className="text-center text-base leading-[22px] text-[#BDBDBD] ">
           {activeNft.nftDescription}
          </p>
        </div>

      </div>


      <div className="w-full">
        <div className="flex flex-row justify-between">
          <h1>Trademark</h1>
          <p>{activeNft.nftAuthor}</p>
        </div>
        <div className="flex flex-row justify-between">
          <h1>Contract Address</h1>
          <p>{activeNft.nftContractAdd}</p>
        </div>
        <div className="flex flex-row justify-between">
          <h1>Token ID</h1>
          <p>{activeNft.nftTokenId}</p>
        </div>
        <div className="flex flex-row justify-between">
          <h1>Token Standard</h1>
          <p>{activeNft.nftTokenStd}</p>
        </div>
        <div className="flex flex-row justify-between">
          <h1>Chain</h1>
          <p>{activeNft.nftChain}</p>
        </div>
      </div>
    </div>
  );
};

export default NFTsSelected;
