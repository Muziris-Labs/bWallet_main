"use client";
import { useAccount } from "wagmi";
import Pubkey from "../Pubkey";
import ProfileMenu from "./ProfileMenu";
import { DefaultButton } from "../buttons/ClientButtons";
import { useDispatch } from "react-redux";
import { handleLoginModal } from "@/redux/slice/modalSlice";

const ProfileAvatar = ({ screen }) => {
  const { isConnected } = useAccount();
  const dispatch = useDispatch();

  return isConnected ? (
    <div
      className={`prevent-select flex cursor-pointer items-center gap-2 rounded-full border border-gray-800 p-1.5 ${
        screen === "lg" ? "hidden lg:flex" : "w-fit"
      }`}
    >
      <ProfileMenu />
      <Pubkey />
    </div>
  ) : (
    <DefaultButton
      variant={"filled"}
      color="gray"
      label="Connect Wallet"
      style={`flex bg-gradient-primary rounded-full md:text-base px-9 h-[46px] ${
        screen === "lg" ? "hidden lg:flex" : ""
      }`}
      icon={<></>}
      onClick={() => dispatch(handleLoginModal())}
    />
  );
};

export default ProfileAvatar;
