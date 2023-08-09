import React from 'react'
import {PiArrowUpRightBold} from 'react-icons/pi'

import styles from './Waitlist.module.css'
export const Waitlist = () => {
  return (
    <div className={`${styles.card} border-white mx-4 border-[1px] w-fit flex flex-col md:x-auto p-4 my-12`} >
<span className='font-sec text-3xl md:text-5xl text-white font-medium'>SIGN UP FOR WAITLIST</span> <br/>
<p className='max-w-[50ch] text-sm text-white opacity-50 font-prm md:text-xl'>
Bankless Wallet is a perfect platform for your web3 wallet, just plug your wallet and pay with additional features.
</p>
<button style={{
            background:'linear-gradient(95.51deg, #D02129 0%, #750069 100%)'
        }} className="p-3 rounded-prm flex items-center gap-3 w-fit text-white text-xl font-prm mt-4">Sign Up <PiArrowUpRightBold/></button>
    </div>
  )
}
