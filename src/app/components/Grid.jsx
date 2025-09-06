'use client';
import React from "react";

export default function Grid({ children }) {
  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          gridTemplateRows: "repeat(1, 1fr)",
          width: "100%",
          height: "100dvh",
          position: "fixed",
          zIndex: 1
        }}
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            style={{
              border: "1px solid gray",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              opacity: "0.13",
            }}
          />
        ))}
      </div>
      <div style={{ position: "relative", zIndex:1}}>
      {children}
      </div>
    </>
  );
}
