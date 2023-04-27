import React from 'react'
import { Modal, Button, Image, Text, Link } from "@nextui-org/react";
function ModalComp({visible,closeHandler}) {
  return (
    <Modal
        closeButton
        blur
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
        width='500px'
      >
      <div className='p-4'>
      <div className='text-3xl'>
        Choose your wallet
        </div> 
        <div 
        className='bg-[#0364FF] text-3xl text-white rounded-2xl py-3 my-4'
        >
            Login using Web3Auth
        </div>
        <div 
          className='bg-[#616161] text-3xl text-white rounded-2xl py-3'
        >
        Connect your hardware wallet
        </div>
        <div className='text-[#7A7777] flex justify-end text-xl'>
            (Coming Soon)
        </div>
      </div>
      </Modal>
  )
}

export default ModalComp