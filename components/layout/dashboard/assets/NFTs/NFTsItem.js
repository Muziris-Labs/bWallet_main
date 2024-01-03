"use client"

import Image from 'next/image';

const dummyData=[{
  nftName:"Peter Pat #4513",
  owner:"By LoduLalit",
  imgSrc:"./images/nfts/nftImg1.svg"
}]

const NFTsItem = () => {
  return (
      <div className='rounded-lg bg-background-black overflow-hidden'>
        <Image 
          src="/images/nfts/nftImg1.svg"
          alt="Description of your image" 
          className=''
          width={320}
          height={320}
        />
        <div className='p-2'>
          <h1 className='text-xl'>Peter Pat #4513</h1>
          <span className='text-base'>By LoduLalit</span>
        </div>
      </div>
  );
};

export default NFTsItem;
