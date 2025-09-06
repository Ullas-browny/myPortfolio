'use client';
import React from "react";
import Image from "next/image";
export default function AboutMe() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        height: "100dvh",
        gap: "20px",
      }}
    >
      <div style={{ position: "relative", width: "40%", height: "60%" }}>
        <Image
          src="/assets/pic1.jpeg"
          alt="My Image"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div
        style={{
          position: "relative",
          width: "30%",
          height: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p style={{ fontSize: "1.8vw" }}>
          I'm Ullas, a fullstack &lt;developer/&gt; based in Bangalore,India
          since 2000. and yeah i'm a super enthusiastic learner who loves to
          learn a lot about new tech and cool stuffs. when im not playing with
          databases and designs, well... I'll be playing soccer or sketching and
          painting things.
        </p>
      </div>
    </div>
  );
}
