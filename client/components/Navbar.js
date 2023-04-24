import Image from "next/image";
import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import Logo from "./Logo";

const buttonData = [
  {
    text: "Home",
    link: "/home",
  },
  {
    text: "Features",
    link: "/",
  },
  {
    text: "Contact us",
    link: "/",
  },
];

function Navbar() {
  return (
    <div className="w-screen fixed flex justify-between px-[5vw] py-[5vh] items-center">
      <Logo width={100} />
      <div className="">
        <ul className="flex items-center gap-12 text-xl text-[#ffffff]">
          {buttonData.map((button, index) => (
            <li key={index} className="p-2">
              <a
                href={button.link}
                className="hover:text-[#848484] font-[ClearSans] transition-colors text-white duration-300"
              >
                {button.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="group text-xl font-normal gap-16 bg-transparent text-[#ffffff] font-[ClearSans] border-[1px] border-[#ffffff] p-4 px-6 justify-between rounded-2xl flex items-center hover:bg-[#ffffff] hover:text-[#000000] transition-colors duration-300 hover:cursor-pointer">
        <h1>Launch App</h1>
        <div className="bg-[#ffffff] w-[14px] h-[14px] arrowIcon group-hover:bg-[#000000] transition-colors duration-300"></div>
      </div>
    </div>
  );
}

export default Navbar;
