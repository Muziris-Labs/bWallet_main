import Image from "next/image";
import { Inter } from "next/font/google";
import MidSection from "@/components/MidSection";
import RightSection from "@/components/RightSection";
import LeftSection from "@/components/LeftSection";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  setWeb3AuthProvider,
  setGaslessOnboarding,
  setGaslessWallet,
  setAddress,
  setUserInfo,
} from "@/redux/counterSlice";
import { GaslessOnboarding } from "@gelatonetwork/gasless-onboarding";
import { ethers } from "ethers";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const dispatch = useDispatch();
  const login = async () => {
    try {
      if (typeof window === "undefined") throw new Error("window is undefined");
      const gaslessWalletConfig = {
        apiKey: "YPSzgyWLyKrsrUWwbfXpxYluB9oRkVTxoSNOoSkQZio_",
      };
      const loginConfig = {
        domains: ["http://localhost:3000/", window.location.origin],
        chain: {
          id: 80001,
          rpcUrl:
            "https://polygon-mumbai.g.alchemy.com/v2/RPFXITTSaBIEUgJ9xptrOwujTphQW-Yv",
        },
        openLogin: {
          redirectUrl: "http://localhost:3000/app",
        },
      };
      const gaslessOnboarding = new GaslessOnboarding(
        loginConfig,
        gaslessWalletConfig
      );

      await gaslessOnboarding.init();

      const web3AuthProvider = await gaslessOnboarding.login();
      dispatch(setWeb3AuthProvider(web3AuthProvider));
      dispatch(setGaslessOnboarding(gaslessOnboarding));

      const provider = new ethers.providers.Web3Provider(web3AuthProvider);
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      dispatch(setAddress(address));

      const gaslessWallet = gaslessOnboarding.getGaslessWallet();
      setGaslessWallet(gaslessWallet);

      const userInfo = await gaslessOnboarding.getUserInfo();
      dispatch(setUserInfo(userInfo));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    login();
  }, []);

  return (
    <div className="h-screen flex flex-row bg-[#232429] items-center">
      <LeftSection />
      <MidSection />
      <RightSection />
    </div>
  );
}
