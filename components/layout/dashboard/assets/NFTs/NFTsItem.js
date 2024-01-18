"use client"

import Image from 'next/image';


const NFTsItem = ({data}) => {

  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = 'scale(1.1)';
    e.currentTarget.style.transition = 'transform 0.3s ease'
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'scale(1) ';
  };

  return (
      <div className='rounded-lg bg-background-black overflow-hidden'>
        <div className='overflow-hidden w-fit h-fit'>
          <Image 
            src={data.src}
            alt="Description of your image" 
            className=''
            width={320}
            height={320}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </div>
        <div className='p-2'>
          <h1 className='text-xl'>{data.nftName}</h1>
          <span className='text-base'>{data.nftAuthor}</span>
        </div>
      </div>
  );
};

export default NFTsItem;
