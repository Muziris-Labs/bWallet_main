"use client";

import {
  ArrowDownOnSquareIcon,
  ArrowUpRightIcon,
  PlusIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { Button } from "@material-tailwind/react";

import { useRouter } from "next/navigation";

const DefaultButton = ({
  variant,
  label,
  icon,
  style,
  color,
  onClick,
  disabled,
}) => {
  return (
    <Button
      variant={variant}
      color={color}
      className={`items-center gap-3 px-4 py-2 font-grotesque text-base font-normal capitalize sm:text-lg md:text-xl ${
        style ? style : "flex"
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
      {icon === "" ? (
        ""
      ) : icon ? (
        icon
      ) : (
        <ArrowUpRightIcon className="h-5 w-5" />
      )}
    </Button>
  );
};

const DefaultWhiteButton = ({ label, style, onClick }) => {
  return (
    <Button
      variant="filled"
      color="white"
      className={`flex items-center rounded-full bg-white px-8 py-2 font-grotesque text-base font-semibold capitalize sm:text-lg md:text-xl ${
        style ? style : ""
      }`}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

const DefaultBlackBtn = ({ label, style, onClick, image }) => {
  console.log("image", image);
  return (
    <Button 
      variant="filled" 
      color="gray" 
      className="w-[280px] flex flex-row h-10 mb-8 bg-gradient-to-b from-stone-900 to-neutral-900 rounded-lg shadow border border-gray-600 pl-12 items-center  "
      onClick={onClick}
    >
      
      {image && <img src={image} className="w-6 h-6 " />}
      <div className="justify-start items-center  inline-flex">
        <div className="w-6 h-6 p-0.5 justify-center items-center flex">
          <div className="w-5 h-5 relative flex-col justify-start items-start flex" />
        </div>
        <div className="text-center text-white text-sm ">
          {label}
        </div>
      </div>
    </Button>
  );
};


const LaunchAppBtn = ({ isDefault, screen, style }) => {
  const handleClick = () => {
    window.open("https://tally.so/r/nPpvRQ", "_blank");
  };

  return isDefault ? (
    <DefaultButton
      variant="outlined"
      color="white"
      label="Join the Waitlist"
      style={screen === "lg" ? "hidden lg:flex" : ""}
      onClick={handleClick}
    />
  ) : (
    <DefaultWhiteButton
      label="Launch App"
      style={style}
      onClick={handleClick}
    />
  );
};

const CreateWalletBtn = ({ isDefault, color, style }) => {
  const handleClick = () => {
    window.open("https://tally.so/r/nPpvRQ", "_blank");
  };

  return isDefault ? (
    <DefaultButton
      variant={"filled"}
      color="gray"
      label="Join the waitlist"
      style="flex bg-gradient-primary"
      onClick={handleClick}
    />
  ) : (
    <DefaultWhiteButton
      label="Create Wallet"
      style={style}
      onClick={handleClick}
    />
  );
};

const HardwareWalletBtn = () => {
  return (
    <DefaultButton variant="outlined" color="white" label="Hardware Wallet" />
  );
};

// const ConnectWalletBtn = () => {
//   const activeWallet = useSelector((state) => state.modal.activeWallet);
//   const dispatch = useDispatch();
//   const handleClick = () => {
//     connect({
//       connector:
//         connectors[
//           activeWallet === "MetaMask"
//             ? 0
//             : activeWallet === "Coinbase Wallet"
//             ? 1
//             : 2
//         ],
//     });

//     if (activeWallet === "WalletConnect") {
//       dispatch(handleLoginModal());
//     }
//   };
//   const { connect, connectors } = useConnect();

//   return (
//     <DefaultButton
//       variant={"filled"}
//       color="gray"
//       label="Connect Wallet"
//       style="flex bg-gradient-primary w-full justify-center text-sm sm:text-sm md:text-base"
//       onClick={handleClick}
//     />
//   );
// };

// const SignWalletBtn = () => {
//   const { data, signMessage } = useSignMessage();
//   const dispatch = useDispatch();
//   const handleClick = () => {
//     signMessage({ message: process.env.NEXT_PUBLIC_AUTH_MESSAGE });
//   };

//   useEffect(() => {
//     if (data) {
//       dispatch(handleLoginModal());
//       dispatch(setSignature(data));
//       dispatch(handleRoleModal());
//     }
//   }, [data, dispatch]);

//   return (
//     <DefaultButton
//       variant={"filled"}
//       color="gray"
//       label="Sign In"
//       style="flex bg-gradient-primary w-full justify-center text-sm sm:text-sm md:text-base"
//       onClick={handleClick}
//     />
//   );
// };

export { LaunchAppBtn, CreateWalletBtn, HardwareWalletBtn, DefaultButton, DefaultBlackBtn };
