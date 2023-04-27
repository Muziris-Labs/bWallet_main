import Image from "next/image";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import Modal from "@/components/Modal";

function Home() {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

  useEffect(() => {
    let ctx = gsap.context(() => {
      window.onmousemove = (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        const ratioX = mouseX / window.innerWidth;
        const ratioY = mouseY / window.innerHeight;

        gsap.to(".mover", {
          x: ratioX * 30,
          y: ratioY * 30,
          duration: 1.5,
        });
        gsap.to(".gradientTab", {
          x: ratioX * 40,
          y: ratioY * 40,
          duration: 1.5,
        });
      };
    }, ".gallery");
    return () => ctx.revert();
  }, []);

export default function Home() {
  return (
    <div className="bg-[#232429] ">
      <div className="absolute h-screen w-screen gradientBg"></div>
      <Navbar handler={handler}/>
      <div className="h-screen flex items-center min-w-screen lg:px-[5vw] pt-24 flex-col-reverse lg:flex-row z-10">
        <div className="lg:w-3/5 flex flex-col">
          <h1
            style={{
              lineHeight: 1.5,
            }}
            className="text-5xl font-light font-[ClearSans] text-white"
          >
            Welcome <br />
            to{" "}
            <span className="text-7xl font-normal text-white">
              Bankless Wallet
            </span>{" "}
            <br />
            with{" "}
            <span className="text-7xl font-normal text-white">
              All Services
            </span>{" "}
            <br></br>
            You <span className="text-7xl font-normal text-white">Need!</span>
          </h1>
          <p className="text-3xl text-[#808088] font-light mt-4 max-w-[40ch]">
            Bankless Wallet is a perfect platform for your web3 wallet, just
            plug your wallet and pay with additional features.
          </p>
          <div className="flex gap-6 items-center mt-12 z-10">
            <div className="group text-xl font-normal gap-16 bg-[#ffffff] text-[#000000] font-[ClearSans] border-[1px] border-[#ffffff] p-4 px-6 justify-between rounded-2xl flex items-center hover:bg-transparent hover:text-[#ffffff] transition-colors duration-300 hover:cursor-pointer">
              <h1>Create Wallet</h1>
              <div className="bg-[#000000] w-[14px] h-[14px] arrowIcon group-hover:bg-[#ffffff] transition-colors duration-300"></div>
            </div>
            <div className="text-[#808088] font-light text-2xl hover:cursor-pointer hover:text-[#515156] transition-colors duration-300">
              How it works
            </div>
          </div>
        </div>
        <div className="lg:w-2/5 flex items-center justify-end grow h-[100%] cursor-default">
          <div className="w-[100%] h-[100%] flex items-center mr-20">
            <Image
              src="./assets/images/threeCircles.svg"
              height={673}
              width={582}
              alt="Bg"
              className=""
            />
            <div className="bg-[#2E2D3B] h-[30%] w-[25%] mover absolute right-[13.5%] rounded-3xl flex px-8">
              <div className="flex flex-col justify-center w-[70%] h-[100%]">
                <Image
                  src="./assets/icons/wifi.svg"
                  width={30}
                  height={30}
                  alt="Connect"
                  className="mb-2"
                />
                <h1 className="font-[ClearSans] text-[2vw] text-white">
                  Anoy.eth
                </h1>
                <h1 className="font-[ClearSans] text-[1.2vw] text-[#808088] max-w-[10ch]">
                  0x3C700d88616C9e186aed <br /> 7dd59B2e7f60819bf863
                </h1>
              </div>
            </div>
            <div className="h-[5%] w-[6%] absolute gradientTab top-[25%] rounded-full flex items-center justify-center">
              <h1 className="text-[#000000] font-[ClearSans] text-[1vw]">
                Send
              </h1>
            </div>
            <div className="h-[7%] w-[8%] absolute gradientTab top-[31%] right-[9%] rounded-full flex items-center justify-center">
              <h1 className="text-[#000000] font-[ClearSans] text-[1.4vw]">
                Receive
              </h1>
            </div>
            <div className="h-[8%] w-[10%] absolute gradientTab top-[82%] rounded-full flex items-center justify-center">
              <h1 className="text-[#000000] font-[ClearSans] text-[1.7vw]">
                Gasless
              </h1>
            </div>
            <div className=" absolute top-[84%] right-[5%] rounded-full flex-col items-center justify-center">
              <h1 className="text-[#ffffff] font-[ClearSans] text-[1.7vw]">
                + More Features
              </h1>
              <h1 className="text-[#808088] text-[1.2vw] ml-[8vw]">to come</h1>
            </div>
          </div>
        </div>
      </div>
      <Modal visible={visible} closeHandler={closeHandler} /> 
    </div>
  );
}
