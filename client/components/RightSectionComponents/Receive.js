import React from 'react'
import {BsQrCode} from 'react-icons/bs'
import {AiOutlineCopy} from 'react-icons/ai'
import Transactions from '../Transactions'
function Receive() {
  return (
    <div className='flex flex-col items-center mt-6'>
        <div className='bg-white p-6 rounded-2xl w-fit'>
        <BsQrCode className='text-black h-44 w-44'/>
        </div>
        <div style={{
            border:'3px solid ##64656A',
            
        }} className='text-xl flex items-center mt-6 px-4 py-2 rounded-full gap-2'>
<AiOutlineCopy className='text-[#64656A] cursor-pointer' />
<h4>Your Wallet <span className='text-[#64656A] font-medium'>(x3c....f8384)</span> </h4>
        </div>
        <Transactions type="rightSection"/>
        <Transactions type="rightSection"/>

        
    </div>
  )
}

export default Receive