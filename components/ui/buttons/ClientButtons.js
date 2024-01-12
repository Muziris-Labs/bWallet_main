"use client";

import {
  ArrowDownOnSquareIcon,
  ArrowUpRightIcon,
  PlusIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { Button } from "@material-tailwind/react";

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
      className="from-stone-900 to-neutral-900 mb-8 flex h-10 w-[280px] flex-row items-center rounded-lg border border-gray-600 bg-gradient-to-b pl-12 shadow  "
      onClick={onClick}
    >
      {image && <img src={image} className="h-6 w-6 " />}
      <div className="inline-flex items-center  justify-start">
        <div className="flex h-6 w-6 items-center justify-center p-0.5">
          <div className="relative flex h-5 w-5 flex-col items-start justify-start" />
        </div>
        <div className="text-center text-sm text-white ">{label}</div>
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

export {
  LaunchAppBtn,
  CreateWalletBtn,
  HardwareWalletBtn,
  DefaultButton,
  DefaultBlackBtn,
};
