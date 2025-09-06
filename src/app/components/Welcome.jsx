"use client";
import React, { useEffect, useState } from "react";
import moment from "moment-timezone";
import { gsap } from "gsap";
import NameSvg from "./NameSvg";

export default function Welcome() {
  const [dateTime, setDateTime] = useState("");
  const [startLineAnimation, setStartLineAnimation] = useState(false);

  function move({ className, direction, amount }) {
    gsap.fromTo(
      `${className}`,
      { opacity: 0, [direction]: amount },
      {
        opacity: 1,
        [direction]: 0,
        duration: 1,
        ease: "power1.out",
        delay: 0.5,
      }
    );
  }

  function lineMove() {
    const timeline = gsap.timeline({ repeat: -1, repeatDelay: 0 });
    timeline.fromTo(
      ".underline path",
      {
        x: -500,
      },
      {
        x: 0,
        duration: 2,
        ease: "power1.linear",
      }
    );

    timeline.fromTo(
      ".underline path",
      {
        x: 0,
      },
      {
        x: 500,
        duration: 2,
        ease: "power1.linear",
      }
    );
  }

  useEffect(() => {
    if (startLineAnimation) {
      lineMove();
    }
  }, [startLineAnimation]);

  useEffect(() => {
    move({ className: ".ullas-text", direction: "y", amount: -50 });
    move({ className: ".about-text", direction: "x", amount: -50 });
    move({ className: ".scroll-button", direction: "x", amount: 50 });
    move({ className: ".details", direction: "y", amount: 50 });
    setTimeout(() => {
      setStartLineAnimation(true);
      // lineMove();
    }, 2000);

    const updateTime = () => {
      const currentDateTime = moment()
        .tz("Asia/Kolkata")
        .format("MM/DD/YYYY - HH:mm:ss");
      setDateTime(currentDateTime);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100dvh",
        padding: "100px",
      }}
    >
      <div
        className="ullas-text"
        style={{
          display: "flex",
          justifyContent: "center",
          marginInline: "400px",
          marginTop: "70px",
        }}
      >
        <NameSvg />
      </div>
      <div style={{ marginInline: "350px", overflow: "hidden" }}>
        {startLineAnimation && (
          <svg
            className="underline"
            viewBox="0 0 500 5"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,2 L500,2"
              stroke="#000"
              strokeWidth="0.5"
              fill="transparent"
            />
          </svg>
        )}
      </div>
      <div
        style={{
          display: "flex",
          flexGrow: 1,
          marginTop: `50px`,
        }}
      />
      <div
        style={{
          maxWidth: "calc(100% - 50px)",
          width: "100%",
          paddingBottom: "20px",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <p
          className="about-text"
          style={{
            textTransform: "uppercase",
            margin: 0,
            fontSize: "0.75rem",
            opacity: 0,
          }}
        >
          Hey, I’m Ullas, <br />
          an agile creator blending code and design to craft
          <br />
          seamless experiences.
          <br />
          Currently shaping the digital landscape <br />
          @eligatf.tech.
        </p>
        <button
          style={{padding:'35px 100px'}}
          className={`scroll-button btn`}
        >
          <span className="text1 btn-span">
            <p style={{ fontSize: "0.8rem" }}>scroll to explore</p>
            <p style={{ fontSize: "1rem" }}>&#8595;</p>
          </span>

          <span className="text2 btn-span">
            <p style={{ fontSize: "0.8rem" }}>scroll to explore</p>
            <p style={{ fontSize: "1rem" }}>&#8595;</p>
          </span>

        </button>
      </div>
      <div
        className="details"
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          padding: "0px 50px",
          gap: "40px",
          marginTop: "50px",
          opacity: 0,
        }}
      >
        <p style={{ marginLeft: "auto", fontWeight: "600" }}>
          Bengaluru, Karnataka, India
        </p>
        <p style={{ fontWeight: "600" }}>{dateTime}</p>
        <p style={{ fontWeight: "600" }}>Linkedin</p>
        <p style={{ fontWeight: "600" }}>Github</p>
      </div>
    </div>
  );
}
