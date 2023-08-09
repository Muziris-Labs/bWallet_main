import React from 'react'
import styles from './index.module.css'
import {FcSimCardChip} from 'react-icons/fc'
import Image from 'next/image'
const BCard = () => {
  return (
   <>
    <div className={`${styles.card}  md:w-[400px] lg:w-[450px] h-[270px] px-6 py-3`}>
   <CardContent/>
</div>
<div className={`${styles.card2}   md:w-[400px] lg:w-[450px] h-[270px] px-6 py-3`}>
<CardContent/>
</div>
</>
  )
}


const CardContent = ()=>{
  return(
    <div className='flex flex-col '>
     <div className='flex justify-between'>
    <FcSimCardChip className='md:text-5xl lg:text-6xl'/>
    <Image src='/assets/card2.png' width={80} height={60}/>
    </div>
    <p className='text-xl text-left text-white  mt-6'>
    0xd4ebc61981e5B9AB392b68f2
638012E2346D534C
    </p>
    <div className='flex justify-between mt-6 text-white'>
      <div>
        <span className='opacity-50'>BanklessCard</span> <br/>
        <span className='text-xl'>NAme.eth</span>
      </div>
      <div>
        <span className='opacity-50'>Valid thru</span> <br/>
        <span className='text-xl'>12/29</span>
      </div>
      
    </div></div>
  )
}
export default BCard
