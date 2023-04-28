import React from "react";
import { BsQrCode } from "react-icons/bs";
import { AiOutlineCopy } from "react-icons/ai";
import Transactions from "../Transactions";
function Receive() {
  return (
    <div className="flex flex-col items-center w-[85%] h-[75%] mt-10">
      <div className="bg-white p-6 rounded-2xl w-[200px] h-[200px]">
        <BsQrCode className="text-black h-[100%] w-[100%]" />
      </div>
      <div className="text-xl flex items-center justify-center my-[4%] px-4 py-2 rounded-full gap-2 border-[1px] border-[#6d6d6d] hover:bg-[#b9b9b9] transition-colors duration-300 hover:cursor-pointer">
        <AiOutlineCopy className="text-[#64656A] cursor-pointer" />
        <h4 className="text-base">
          Your Wallet{" "}
          <span className="text-[#64656A] font-medium">(x3c....f8384)</span>{" "}
        </h4>
      </div>
      <div className=" h-[45%] w-[100%] relative flex flex-col overflow-auto scrollFunc rounded-3xl">
        <Transactions type="rightSection" />
        <Transactions type="rightSection" />
        <Transactions type="rightSection" />
      </div>
    </div>
  );
}

export default Receive;
