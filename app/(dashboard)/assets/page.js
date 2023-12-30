"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export const metadata = {
  title: "B-Wallet | Assets",
  description: "By Bankless DAO",
};

export default function Assets() {
  const router = useRouter();

  useEffect(() => {
    router.push("/assets/tokens");
  }, [router]);

  return null;
}
