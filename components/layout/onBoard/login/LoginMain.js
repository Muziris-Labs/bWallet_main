import HardwareWallet from "../HardwareWallet";
import { DefaultBlackBtn } from "components/ui/buttons/ClientButtons.js";

const LoginMain = () => {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    height: "100%", // Adjust as needed
  };

  const columnStyle = {
    width: "50%",
    margin: "auto", // Adjust as needed
  };

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
          <div className="flex flex-col">
            <DefaultBlackBtn
              image="\images\btn.svg"
              label="Sign In with Social"
            />
            <p>Powered By </p>
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
            />
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
