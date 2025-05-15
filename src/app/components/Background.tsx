"use client";

import Image from "next/image";

export default function Background() {
  return (
    <>
      <div className="fixed inset-0 z-[-2] w-full h-screen">
        <Image src="/assets/background.png" alt="background" fill priority className="object-cover" quality={100} />
      </div>
      <div className="fixed inset-0 z-[-1] bg-white/80" />
    </>
  );
}
