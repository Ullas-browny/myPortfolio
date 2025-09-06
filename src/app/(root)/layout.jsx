"use client";
import gsap from "gsap";
import { ReactLenis, useLenis } from "lenis/react";
import React, { useEffect, useRef } from "react";
import EOP from "../components/EOP";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const lenisRef = useRef();
  const pathname = usePathname();

  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, [pathname]);

  useEffect(() => {
    function update(time) {
      // Make sure Lenis uses RAF for smoother animation
      lenisRef.current?.lenis?.raf(time * 1000);
    }
    gsap.ticker.add(update);

    return () => gsap.ticker.remove(update);
  }, []);

  return (
    <main>
      <ReactLenis
        root
        options={{
          autoRaf: true,
          duration: 1.2,
          smoothWheel: true,
          smoothTouch: true,
          lerp: 1,
        }}
        ref={lenisRef}
      >
        {children}
      </ReactLenis>
      <div
        style={{
          position: "fixed",
          zIndex: 10,
          backgroundColor: "black",
          width: "100%",
          height: "800px",
          zIndex: 0,
          bottom: 0,
          left: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: '100px',
        }}
      >
        <EOP/>
      </div>
    </main>
  );
}
