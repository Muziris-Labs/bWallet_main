import Link from "next/link";
import BCard from "./Cards/B-Card/B-Card";
import {PiArrowUpRightBold} from 'react-icons/pi'

export const Hero = () => {
  return (
    <div className="text-white flex flex-col items-center mx-auto">
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium font-sec text-center">
      Secure Your Finances, <br/>  
Minimize Risk
      </h1>
      <p className="text-xl md:text-2xl max-w-[40ch] mt-12 mx-4 font-prm text-center">
      Unlock the Power of Web3 with Bankless Wallet: Seamlessly Connect, Pay, and Explore with Extraordinary Features!
      </p>
      <div className="text-xl flex-col md:flex-row flex items-center justify-center mt-12 gap-6 md:gap-12">
        <Link href="/earlyAccess" passHref={true}>
        <button style={{
            background:'linear-gradient(95.51deg, #D02129 0%, #750069 100%)'
        }} className="px-8 py-3 md:p-3 rounded-prm flex items-center gap-3" >Get Early Access <PiArrowUpRightBold/></button>
        </Link>
        {/* <button className="border border-1 px-8 py-3 md:p-3 rounded-prm flex items-center gap-3">How it Works <PiArrowUpRightBold/></button> */}
      </div>
     
    </div>
  );
};
