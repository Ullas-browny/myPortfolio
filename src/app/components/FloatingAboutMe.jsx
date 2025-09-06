"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const FloatingAboutMe = () => {
  const wrapText = (text) => {
    return text.split("").map((letter, index) => (
      <span key={index} className="letter" style={{ display: "inline-block" }}>
        {letter === " " ? "\u00A0" : letter}
      </span>
    ));
  };

  useEffect(() => {
    // GSAP letter-by-letter animation with smoother, slower animation
    gsap.fromTo(
      ".letter",
      { yPercent: 500, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        stagger: 0.02,
        ease: "back.out(2)",
        duration: 1.7,
        scrollTrigger: {
          trigger: ".craft-paragraph",
          start: "top 75%",
          end: "top 20%",
          scrub: 0.5,
        },
      }
    );
  }, []);

  return (
    <div
      style={{
        padding: "100px",
        display: "flex",
        gap: "50px",
        paddingBottom: "300px",
      }}
    >
      <div style={{ flex: 1 }}>
        <p style={{ fontSize: "1rem", textTransform: "uppercase" }}>
          ✺ About me
        </p>
      </div>
      <div style={{ flex: 2, display: "grid", gap: "50px" }}>
        <p
          className="craft-paragraph font-thin"
          style={{
            fontSize: "2.3rem",
            opacity: 1,
            overflow: "visible",
          }}
        >
          {wrapText(
            "I craft experiences that blend the art of minimalism with the power of functionality. As both a designer and developer, I thrive on transforming challenges into intuitive, playful solutions that aren't just visually stunning but also seamlessly interactive."
          )}
        </p>
        <button
          className="scroll-button btn"
          style={{
            marginRight: "auto !important",
            padding: "35px 100px",
          }}
        >
          <span className="text1 btn-span">
            <a href="/about">more about me</a>
          </span>
          <span className="text2 btn-span">
            <a href="/about">more about me</a>
          </span>
        </button>
      </div>
    </div>
  );
};
