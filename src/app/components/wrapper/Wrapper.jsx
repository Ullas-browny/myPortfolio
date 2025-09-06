import React from "react";

export default function Wrapper({ children }) {
  return (
    <div
      style={{
        width: "100%",
        marginBottom: "700px",
        borderBottomLeftRadius: "100px",
        borderBottomRightRadius: "100px",
        zIndex: 2,
        position: "relative",
        backgroundColor: "white",
      }}
    >
      {children}
    </div>
  );
}
