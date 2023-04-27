import React from 'react'

function Transactions(props) {
  return (
    <div className={`${props.type==="rightSection" ? 'w-[340px] my-3 ' : 'w-[815px] my-6' }  bg-[#3A3D48] rounded-3xl p-6 `}>
      <div className='flex flex-row justify-between'>
        <h1 className='text-white text-xl'>
          Send
        </h1>
        <h1 className='text-red-500 text-xl'>
          -28 BANK
        </h1>
      </div>
      <div className='flex flex-row mb-3'>
        <h1 className='text-white mr-1'>To : </h1>
        <h1 className='text-[#808088]'>{props.type==="rightSection" ? '0x3D.....123' :'0xDb1d125C9f7faE45d7CeE470d048670a85270f4D'}</h1>
      </div>
      <div className='flex flex-row justify-between'>
        <h1 className='text-white'>
          10th March 2023
        </h1>
        <h1 className='text-white '>
          10:24am
        </h1>
      </div>
    </div>
  )
}

export default Transactions