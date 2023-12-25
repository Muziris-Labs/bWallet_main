"use client";

import { usePathname } from "next/navigation";

const PageHeading = () => {
  const path = usePathname();

  return (
    <h2 className="bg-text-gradient bg-clip-text text-[24px] font-bold text-transparent">
      {
        {
          "/dashboard": "Dashboard",
          "/transactions": "Transactions",
          "/wallet/transfer": "Transfer",
          "/wallet/deposit": "Deposit",
          "/wallet/swap": "Swap",
          "/assets/tokens": "Tokens",
          "/assets/NFTs": "NFTs",
          "/contacts": "Contacts",
          "/settings": "Settings",
        }[path]
      }
    </h2>
  );
};

export default PageHeading;
