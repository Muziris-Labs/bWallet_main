import React from "react";
import Image from "next/image";
import Logo from "./Logo";
import { useSelector, useDispatch } from "react-redux";
import { setActiveButton } from "@/redux/counterSlice";

function LeftSection() {
  const dispatch = useDispatch();
  const gaslessOnboarding = useSelector(
    (state) => state.counter.gaslessOnboarding
  );
  const activeButton = useSelector((state) => state.counter.activeButton);
  return (
    <div className="ml-[4%] w-1/5 h-screen flex justify-end items-center pr-20">
      <div className="w-[180px] h-[80%] bg-gradient-to-b from-[#3A3D48] to-[#28292E] flex flex-col justify-center items-center rounded-[50px] ">
        <Logo width={100} />
        <h1 className="text-[#808088] text-lg mt-10">Manage</h1>
        <div
          className="group w-[70px] h-[70px] rounded-full mt-10 flex justify-center items-center hover:cursor-pointer transition-colors duration-300"
          style={{
            backgroundColor: activeButton === "send" ? "#ED1C24" : "#393B47",
          }}
          onClick={() => {
            dispatch(setActiveButton("send"));
          }}
        >
          <div
            className="w-[40%] h-[40%] sendIcon bg-[#77777f] group-hover:bg-[#ffffff] transition-colors duration-300"
            style={{
              backgroundColor: activeButton === "send" ? "#ffffff" : "",
            }}
          ></div>
        </div>
        <div
          className="group w-[70px] h-[70px] mt-10 flex justify-center items-center rounded-full hover:cursor-pointer transition-colors duration-300"
          style={{
            backgroundColor: activeButton === "receive" ? "#ED1C24" : "#393B47",
          }}
          onClick={() => {
            dispatch(setActiveButton("receive"));
          }}
        >
          <div
            className="w-[40%] h-[40%] receiveIcon bg-[#77777f] group-hover:bg-[#ffffff] transition-colors duration-300"
            style={{
              backgroundColor: activeButton === "receive" ? "#ffffff" : "",
            }}
          ></div>
        </div>
        <div
          className="group w-[70px] h-[70px] mt-10 flex justify-center items-center rounded-full bg-[#ED1C24] hover:cursor-pointer transition-colors duration-300"
          style={{
            backgroundColor: activeButton === "swap" ? "#ED1C24" : "#393B47",
          }}
          onClick={() => {
            dispatch(setActiveButton("swap"));
          }}
        >
          <div
            className="w-[45%] h-[45%] mt-2.5 swapIcon bg-[#77777f] group-hover:bg-[#ffffff] transition-colors duration-300"
            style={{
              backgroundColor: activeButton === "swap" ? "#ffffff" : "",
            }}
          ></div>
        </div>
        <div className="w-[70px] h-[70px] mt-3 flex justify-center items-center">
          <Image src="/breakLine.svg" width={60} height={60} />
        </div>
        <div
          className="w-[70px] h-[70px] rounded-full bg-[#393B47] mt-3 flex justify-center items-center hover:bg-[#545768] hover:cursor-pointer"
          onClick={() => {
            gaslessOnboarding.logout();
            window.location.href = "/";
          }}
        >
          <Image src="/shutDown.svg" width={20} height={20} />
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
