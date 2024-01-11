"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Wallet() {
  const router = useRouter();

  useEffect(() => {
    router.push("/wallet/transfer");
  }, [router]);

  return null;
}
