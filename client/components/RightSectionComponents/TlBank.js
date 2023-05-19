import { Radio } from "@nextui-org/react";
import React from "react";
import { RxInfoCircled } from "react-icons/rx";
import Transactions from "../Transactions";
function TlBank() {
  return (
    <div className="w-[340px] mt-4">
      <div
        style={{
          border: "1px solid rgb(0, 0, 0, 0.2",
        }}
        className="flex flex-col gap-2 p-2"
      >
        <div className=" flex justify-between items-center text-sm">
          <h4 className="text-white opacity-70">You lock</h4>
          <h4 className="text-[#D02128]">Use Max</h4>
        </div>
        <div className="bg-[#464952] rounded-2xl">
          <input
            type="text"
            className="w-full text-lg text-white opacity-70 p-2 bg-transparent outline-none border-none"
          />
        </div>
        <div className="bg-[#464952] rounded-2xl">
          <input
            type="text"
            className="w-full text-lg text-white opacity-70 p-2 bg-transparent outline-none border-none"
          />
        </div>
      </div>
      <div>
        <h4 className="flex items-center gap-4 mt-2 text-white">
          Lock up term <RxInfoCircled />
        </h4>
        <div className="flex gap-4 mt-2">
          <div
            style={{
              border: "1px solid rgb(0, 0, 0, 0.6",
            }}
            className="flex gap-1 p-2 rounded-sm"
          >
            <input type="radio" id="" name="" value="" className="" />
            <h4 className="text-white text-xs">6 Months @ 40k BANK</h4>
          </div>
          <div
            style={{
              border: "1px solid rgb(0, 0, 0, 0.6",
            }}
            className="flex gap-1 p-2 rounded-sm"
          >
            <input type="radio" id="" name="" value="" className="" />
            <h4 className="text-white text-xs">6 Months @ 40k BANK</h4>
          </div>
        </div>
       <div   className="h-[12rem] w-[340px] py-4 overflow-auto scrollFunc">
<Transactions type="rightSection" />
<Transactions type="rightSection" />
       </div>
      
        <div className="bg-[#5FCE5D] absolute w-[340px] bottom-[15%] text-3xl text-white font-bold p-4 rounded-2xl flex items-center justify-between ">
            Get tlBANK
            <div className="bg-[#ffffff] w-[14px] h-[14px] arrowIcon group-hover:bg-[#000000] transition-colors duration-300"></div>
        </div>
      </div>
    </div>
  );
}

export default TlBank;
