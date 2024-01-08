"use client"

import Image from 'next/image';


const NFTsItem = ({data}) => {
  return (
      <div className='rounded-lg bg-background-black overflow-hidden'>
        <Image 
          src={data.src}
          alt="Description of your image" 
          className=''
          width={320}
          height={320}
        />
        <div className='p-2'>
          <h1 className='text-xl'>{data.nftName}</h1>
          <span className='text-base'>{data.nftAuthor}</span>
        </div>
      </div>
  );
};

export default NFTsItem;
