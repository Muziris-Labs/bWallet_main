import React from "react";
import Transactions from "./Transactions";
import { useSelector, useDispatch } from "react-redux";
import { setActiveSection } from "@/redux/counterSlice";
import RecentTransaction from "./MidSectionComponents/RecentTransaction";
import Portfolio from "./MidSectionComponents/Portfolio";

function MidSection() {
  const dispatch = useDispatch();
  const activeSection = useSelector((state) => state.counter.activeSection);
  return (
    <div className=" w-5/12 h-screen flex justify-center items-center">
      <div className="w-full h-[80%]">
        <h1 className="text-5xl text-white font-semibold mb-10">Dashboard</h1>
        <div className="flex flex-row w-[100%]">
          <div className="bg-[#3A3D48] w-[50%] flex flex-col rounded-3xl p-8 pr-24">
            <h1 className="text-lg m-2 text-white">Your Balance</h1>
            <h1 className="text-5xl m-2 text-white font-bold mb-9">$1256.70</h1>
            <h1 className="text-base ml-2 text-[#808088] tracking-widest">
              0x3C....f863
            </h1>
          </div>
          <div className="flex flex-col w-[60%] items-end justify-between">
            <div
              className="bg-[#3A3D48] text-[#77777f] text-2xl w-[90%] h-[45%] flex justify-center items-center rounded-3xl hover:cursor-pointer transition-colors duration-300 hover:text-white"
              style={{
                backgroundColor:
                  activeSection === "portfolio" ? "#ED1C24" : "#3A3D48",
                color: activeSection === "portfolio" ? "#ffffff" : "",
              }}
              onClick={() => {
                dispatch(setActiveSection("portfolio"));
              }}
            >
              Your portfolio
            </div>
            <div
              className=" text-2xl w-[90%] h-[45%] flex justify-center items-center rounded-3xl text-[#77777f] hover:cursor-pointer transition-colors duration-300 hover:text-white"
              style={{
                backgroundColor:
                  activeSection === "transaction" ? "#ED1C24" : "#3A3D48",
                color: activeSection === "transaction" ? "#ffffff" : "",
              }}
              onClick={() => {
                dispatch(setActiveSection("transaction"));
              }}
            >
              Recent Transaction
            </div>
          </div>
        </div>
        {activeSection === "transaction" && <RecentTransaction />}
        {activeSection === "portfolio" && <Portfolio />}
      </div>
    </div>
  );
}

export default MidSection;
