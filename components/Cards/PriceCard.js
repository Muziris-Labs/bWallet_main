import Image from 'next/image'
import React from 'react'

export const PriceCard = () => {
  return (
    <div className='w-36 md:w-48 p-1 gap-1 md:gap-4 bg-white rounded-full md:p-2 flex items-center '>
        <Image src="/assets/btc.png" width={50} height={50} alt=''/>
        <div >
           <span className='text-base md:text-lg font-semibold'> 
            BTC <br></br>
            </span> 
         <span className='text-[#A3A3A3]'> 
            $20,000
            </span>    
        </div>
    </div>
  )
}
