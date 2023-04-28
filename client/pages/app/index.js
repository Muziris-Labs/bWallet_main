import Image from "next/image";
import { Inter } from "next/font/google";
import MidSection from "@/components/MidSection";
import RightSection from "@/components/RightSection";
import LeftSection from "@/components/LeftSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="h-screen flex flex-row bg-[#232429] items-center">
      <LeftSection />
      <MidSection />
      <RightSection />
    </div>
  );
}
