import React, { useEffect } from "react";
import { BsQrCode } from "react-icons/bs";
import { AiOutlineCopy } from "react-icons/ai";
import Transactions from "../Transactions";
import { useSelector } from "react-redux";
import QRCode from "qrcode";
import Image from "next/image";
function Receive() {
  const address = useSelector((state) => state.counter.address);
  const [qrcode, setQrcode] = React.useState(undefined);

  const generateQRCode = (address) => {
    QRCode.toDataURL(address).then((url) => setQrcode(url));
  };

  useEffect(() => {
    if (!address) return;
    generateQRCode(address);
    console.log(qrcode);
  }, [address]);

  return (
    <div className="flex flex-col items-center w-[85%] h-[75%] mt-10">
      <div className="bg-white p-2 rounded-2xl w-[200px] h-[200px]">
        {qrcode && (
          <Image
            src={qrcode}
            height={100}
            width={100}
            alt="qrcode"
            className="h-[100%] w-[100%] object-cover"
          />
        )}
      </div>
      <div
        className="text-xl flex items-center justify-center my-[4%] px-4 py-2 rounded-full gap-2 border-[1px] border-[#6d6d6d] hover:bg-[#b9b9b9] transition-colors duration-300 hover:cursor-pointer"
        onClick={() => {
          navigator.clipboard.writeText(address);
          alert("Copied to clipboard");
        }}
      >
        <AiOutlineCopy className="text-[#64656A] cursor-pointer" />
        <h4 className="text-base">
          Your Wallet{" "}
          <span className="text-[#64656A] font-medium">
            {address
              ? "(" +
                address.toString().substring(0, 4) +
                "...." +
                address
                  .toString()
                  .substring(
                    address.toString().length - 4,
                    address.toString().length
                  ) +
                ")"
              : "(0x3c....f864)"}
          </span>{" "}
        </h4>
      </div>
      <div className=" h-[45%] w-[100%] relative flex flex-col overflow-auto scrollFunc rounded-3xl">
        <Transactions type="rightSection" />
        <Transactions type="rightSection" />
        <Transactions type="rightSection" />
      </div>
    </div>
  );
}

export default Receive;
