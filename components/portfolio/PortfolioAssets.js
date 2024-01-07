import React from 'react'
import Image from 'next/image'

export default function PortfolioAssets() {
  return (
    <div className='flex flex-row border-t-2 border-[#292929] pt-4 justify-between'>
      <div className='flex flex-row'>
        <div className='flex flex-row items-center mr-8'>
          <div className='flex flex-row gap-2 px-3 py-2 bg-primary-black rounded-full mr-3'>
            Fiat
            <Image
              src={`/images/portfolio/euro.svg`}
              width={24}
              height={24}
              alt={" Token Logo"}
            />
          </div>

          <div className='font-normal text-2xl'>
            $32,100
          </div>
        </div>
        <div className='flex flex-row items-center'>
          <div className='flex flex-row gap-2 px-3 py-2 bg-primary-black rounded-full mr-3'>
            Crypto
            <Image
              src={`/images/portfolio/base.svg`}
              width={24}
              height={24}
              alt={" Token Logo"}
            />
          </div>

          <div className='font-normal text-2xl'>
            $47,050
          </div>
        </div>
      </div>
      <div className='flex flex-row items-center mr-8'>
        <h4 className='px-3 mr-3 border-r-2 border-[#FCADFF]'>
          BASE
        </h4>
        <Image
          src={`/images/portfolio/gas.svg`}
          width={20}
          height={20}
          alt={" Token Logo"}
        />
        <h6 className='ml-1 text-[#858585]'>
          $0.04
        </h6>
      </div>
    </div>
  )
}
