"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export const metadata = {
  title: "B-Wallet | Wallet",
  description: "By Bankless DAO",
};

export default function Wallet() {
  const router = useRouter();

  useEffect(() => {
    router.push("/wallet/transfer");
  }, [router]);

  return null;
}
