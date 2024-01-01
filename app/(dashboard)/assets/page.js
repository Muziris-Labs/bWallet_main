"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Assets() {
  const router = useRouter();

  useEffect(() => {
    router.push("/assets/tokens");
  }, [router]);

  return null;
}
