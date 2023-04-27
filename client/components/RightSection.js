import React from 'react'
import Image from 'next/image'
import Receive from './RightSectionComponents/Receive'

function RightSection() {
  return (
    <div className='w-[380px] h-[80%] bg-gradient-to-b from-[#3A3D48] to-[#28292E] flex flex-col justify-start items-center rounded-[50px]'>
      <Image 
        src='/ppimg.svg'
        width={120}
        height={120}
        className='mt-4'
      />
      <h1 className='bg-[#737478] rounded-full text-white px-3 absolute top-[215px]'>
        0x3c....f863
      </h1>
      <Receive/>
    </div>
  )
}

export default RightSection