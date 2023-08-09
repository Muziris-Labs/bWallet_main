import Image from "next/image";
import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { PiArrowUpRightBold, PiArrowDownLeftBold } from "react-icons/pi";
import { BiSync } from "react-icons/bi";
function Dashboard() {
  return (
    <div className="bg-prm-bg h-[85vh] w-[80vw] flex mx-auto mt-[8vh] gap-4 p-3 shadow-2xl rounded-md">
      <div className="w-3/4 flex flex-col gap-3 ">
        <div className="h-40 bg-sec-bg rounded-md p-3 flex flex-col gap-2">
          <h2 className="text-white text-base">Overall Balance</h2>
          <h2 className="text-[#545454] text-xs flex gap-16 items-center">
            Portfolio Value{" "}
            <span className="text-green-500 flex items-center gap-1">
              {" "}
              <FiChevronUp className="text-lg" /> 0.24%{" "}
            </span>
          </h2>
          <h2 className="text-white text-2xl font-prm font-bold">$ 240000 </h2>
          <div className="flex justify-between items-center  border-t-[1px] border-[#545454]">
            <h2 className="text-[#545454] text-xs ">
              24 hr change <span className="text-white">+ $10000</span>
            </h2>
            <div className="flex gap-2 items-center pt-2">
              <CryptoCurrencies />
              <CryptoCurrencies />
              <CryptoCurrencies />
            </div>
          </div>
        </div>
        <div className="h-10 bg-sec-bg rounded-md p-3 flex justify-between">
          <h2 className="text-white text-sm ">Overview Statistic</h2>
          <h2 className="flex items-center text-white text-sm gap-1 cursor-pointer">
            <AiOutlineEye className="text-lg" /> Show Graph
          </h2>
        </div>
        <div className="h-full bg-sec-bg rounded-md p-3">
        <h2 className="text-white text-sm border-b-[1px] pb-2 border-[#545454]">Token</h2>
        <div className="p-3 flex flex-wrap gap-3">
        <TokenInfo/>
        <TokenInfo/>
        <TokenInfo/>


        </div>

        </div>
        <div className="h-24 bg-sec-bg rounded-md p-3">
        <h2 className="text-white text-sm border-b-[1px] pb-2 border-[#545454]">Transaction History</h2>
        </div>
        <div></div>
      </div>
      <div className="w-1/4 flex flex-col gap-3">
        <div className="h-14 bg-sec-bg rounded-md flex items-center p-3 text-sm justify-between font-semibold">
          <div
            style={{
              background:
                "linear-gradient(135deg, rgba(208, 33, 41, 0.70) 0%, rgba(117, 0, 105, 0.70) 100%)",
            }}
            className="h-fit text-white px-1 py-1 flex items-center gap-1 rounded-md"
          >
            Send <PiArrowUpRightBold />{" "}
          </div>
          <div className="h-fit text-white px-1 py-1 flex items-center gap-1 rounded-md">
            Receive <PiArrowDownLeftBold />{" "}
          </div>
          <div className="h-fit text-white px-1 py-1 flex items-center gap-1 rounded-md">
            Swap <BiSync className="text-lg" />{" "}
          </div>
        </div>

        <div className="h-full bg-sec-bg rounded-md"></div>
      </div>
    </div>
  );
}

export default Dashboard;

const CryptoCurrencies = () => {
  return (
    <div className="flex gap-1">
      <Image src="/assets/btc.png" alt="" width={20} height={5} />
      <h6 className="text-white opacity-70 text-sm">$2200</h6>
    </div>
  );
};
const TokenInfo=()=>{
  return(
    <div className="bg-prm-bg flex flex-col w-36 h-24 p-2 rounded-md">
    
    <div className="flex items-center justify-between">
    <div className="flex items-center gap-1">
    <div className="h-3 w-3 bg-white rounded-full"></div>
   <h2 className="text-[0.625rem] text-white">BanklessDAO</h2> 
    </div>
    <div className="h-3 w-3 bg-white rounded-full"></div>
  
    </div>

    <h2 className="text-[1.125rem] font-bold text-white">46.346</h2>
    <h2 className="text-[0.75rem]  text-[#545454]">46.346</h2>
    <div className="w-full flex justify-end">
    <span className="text-green-500 flex items-center gap-1 text-[0.625rem]">
              {" "}
              <FiChevronUp className="text-md" /> 0.24%{" "}
            </span>
    </div>



    </div>
  )
}