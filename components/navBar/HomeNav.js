"use client";

import { usePathname } from "next/navigation";
import MainNav from "./MainNav";
import { LaunchAppBtn } from "@/components/ui/buttons/ClientButtons";

const HomeNav = () => {
  const activeNav = usePathname();

  const navList = [
    { name: "Home", href: "/", active: activeNav === "/" },
    { name: "Features", href: "features", active: activeNav === "/features" },
    {
      name: "Contact Us",
      href: "contacts",
      active: activeNav === "/contacts",
    },
    {
      name: "TL Bank",
      href: "https://pay.banklesswallet.xyz",
      active: activeNav === "/tlBank",
    },
  ];

  return (
    <MainNav
      style="bg-primary-black/40 shadow-white/5 backdrop-blur-sm md:shadow-none"
      navList={navList}
      btn={<LaunchAppBtn isDefault={true} screen="lg" />}
      mobileBtn={<LaunchAppBtn isDefault={true} screen="sm" />}
    />
  );
};

export default HomeNav;
