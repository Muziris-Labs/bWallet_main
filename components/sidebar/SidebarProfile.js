import Image from "next/image";
import Pubkey from "../ui/Pubkey";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

const SidebarProfile = () => {
  return (
    <div className="rounded-xl bg-black/40 p-4 font-grotesque">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="/images/home/coins/eth.svg"
            alt="profile"
            width={36}
            height={36}
            className="h-9 w-9 rounded-full"
          />

          <div>
            <h3 className="flex text-sm text-white">
              <p className="mr-0.5 font-bold">eth:</p>
              <Pubkey
                address="0xL1C687Ac864B78a1342d881E8Bbf6A9D7686565F"
                size="text-sm font-thin"
              />
            </h3>
            <p className="text-xs font-bold text-white">0.00 USD</p>
          </div>
        </div>

        <ChevronRightIcon className="h-5 w-5 text-white" />
      </div>
    </div>
  );
};

export default SidebarProfile;
