"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.push("/brand")}
      className="border rounded-xl border-blue w-20 mb-5 hover:text-white hover:bg-blue"
    >
      Back
    </button>
  );
}
