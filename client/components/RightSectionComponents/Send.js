import React from "react";
import { BsQrCode } from "react-icons/bs";
import { AiOutlineCopy } from "react-icons/ai";
import Transactions from "../Transactions";
function Send() {
  return (
    <div className="flex flex-col items-center w-[85%] h-[75%] mt-10">
      <input
        className="bg-[#464952] w-[100%] h-[9%] rounded-2xl p-4 mb-5 text-[#c7c6c6] outline-none font-[ClearSans] placeholder:font-[ClearSans] border-[#464952] border-[2px] focus:border-[#67676a]"
        placeholder="Enter Address"
      ></input>
      <input
        className="bg-[#464952] w-[100%] h-[9%] rounded-2xl p-4 mb-5 text-[#c7c6c6] outline-none font-[ClearSans] placeholder:font-[ClearSans] border-[#464952] border-[2px] focus:border-[#67676a]"
        placeholder="Enter Amount"
      ></input>
      <select className="bg-[#464952] w-[100%] h-[9%] rounded-2xl text-[#c7c6c6] p-4 py-2 mb-5 outline-none font-[ClearSans] border-[#464952] border-[2px] focus:border-[#67676a]">
        <option value="Bank">Bank(Bankless Token)</option>
        <option value="Eth">Eth(Ethereum Mainnet)</option>
      </select>
      <div className=" h-[42%] w-[100%] relative flex flex-col overflow-auto scrollFunc rounded-3xl">
        <Transactions type="rightSection" />
        <Transactions type="rightSection" />
        <Transactions type="rightSection" />
      </div>
      <div className="w-[100%] h-[12%] bg-[#5FCE5D] mt-5 rounded-2xl p-[4%] px-[6%] flex items-center justify-between styled-select hover:bg-[#4ea34c] hover:cursor-pointer">
        <h1 className="font-[ClearSans] font-bold text-2xl">New Transfer</h1>
        <div className="bg-[#ffffff] w-[14px] h-[14px] arrowIcon group-hover:bg-[#000000] transition-colors mr-[2%] duration-300"></div>
      </div>
    </div>
  );
}

export default Send;
