
import React from "react";
import Image from "next/image";
import Receive from "./RightSectionComponents/Receive";
import Send from "./RightSectionComponents/Send";
import { useSelector } from "react-redux";


function RightSection() {
  const activeButton = useSelector((state) => state.counter.activeButton);
  const address = useSelector((state) => state.counter.address);
  return (

    <div className="w-[20%] h-[80%] bg-gradient-to-b from-[#3A3D48] to-[#28292E] flex flex-col justify-start items-center rounded-[50px] ml-20">
      <Image src="/ppimg.svg" width={120} height={120} className="mt-4" />
      <h1 className="bg-[#737478] rounded-full text-white px-3 absolute top-[215px]">
        {address
          ? address.toString().substring(0, 4) +
            "...." +
            address
              .toString()
              .substring(
                address.toString().length - 4,
                address.toString().length
              )
          : "0x3c....f864"}
      </h1>
      {activeButton === "receive" && <Receive />}
      {activeButton === "send" && <Send />}

    </div>
  );
}

export default RightSection;
