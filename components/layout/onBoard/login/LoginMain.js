"use client";

import HardwareWallet from "../HardwareWallet";
import { DefaultBlackBtn } from "components/ui/buttons/ClientButtons.js";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Magic } from "magic-sdk";
import { useState } from "react";
import { useRouter } from "next/navigation";

const LoginMain = () => {
  const router = useRouter();
  const [userEmail, setUserEmail] = useState("");

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    height: "100%", // Adjust as needed
  };

  const columnStyle = {
    width: "50%",
    margin: "auto", // Adjust as needed
  };

  async function magicLogin(email) {
    try {
      const magic = new Magic("pk_live_EC906C44C94A9773");
      await magic.auth.loginWithEmailOTP({ email });
      const userMetadata = await magic.user.isLoggedIn();
      if (userMetadata) router.push("/setup");
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div style={containerStyle}>
      {/* <HardwareWallet /> */}
      <div style={columnStyle}>
        <div className="flex h-full flex-col items-center">
          <p className="font-display mb-1 text-3xl font-semibold text-white">
            {" "}
            Login to your Account
          </p>
          <p className="mb-10 text-center font-sans text-sm font-normal leading-6 text-gray-500">
            {" "}
            Choose your Wallet or Login with Google
          </p>
          <div className="mb-4">
            <Input
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-400 text-white focus:!border-gray-100"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e) => setUserEmail(e.target.value)}
            />
            <Button
              className="mt-6 border-[0.5px] border-gray-100"
              fullWidth
              onClick={() => magicLogin(userEmail)}
              loading={true}
            >
              sign up
            </Button>
            {/* <p>Powered By </p>
            <div className="flex flex-row items-center justify-between">
              <div className="w-30 h-1 bg-white"></div>
              <div>or</div>
              <div className="w-30 h-1 bg-white"></div>
            </div>
            <DefaultBlackBtn
              image="\images\modal\login\metamask.svg"
              label="Metamask"
            />
            <DefaultBlackBtn
              image="\images\modal\login\coinbase.svg"
              label="Coinbase Wallet"
            />
            <DefaultBlackBtn
              image="\images\modal\login\walletconnect.svg"
              label="WalletConnect"
            /> */}
          </div>
          <div>
            <span className="font- text-sm">
              By signing up to create an account | Accept <br></br>company’s
            </span>
            <span className="items-center text-sm text-[#FCADFF]">
              {" "}
              Terms of use & Private policy
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginMain;
