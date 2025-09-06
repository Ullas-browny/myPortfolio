
'use client';
import React from "react";
import Image from "next/image";
export default function HomeCover() {
  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      <Image
        src="/assets/pic6.jpg"
        alt="My Image"
        fill
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}
