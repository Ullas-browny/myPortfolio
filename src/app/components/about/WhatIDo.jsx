'use client'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect } from "react";

export default function WhatIDo() {
  const paraStyle = {
    fontStyle: "italic",
    letterSpacing: "0.04cm",
    fontSize: "1rem",
    fontWeight: "bold",
    marginLeft: "4px",
  };

  function move(className){
    gsap.fromTo(
      className,
      {opacity: 0, y: 100},
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power1.out",
        stagger: 0.1,
        scrollTrigger:{
          trigger: '.container',
          start: "20% bottom",
          end: "top top",
          scrub: 1
        }
      }
    )
  }

  function expand(className){
    gsap.fromTo(
      className,
      {opacity: 0, x: -500},
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        ease: "power1.out",
        stagger: 0.1,
        scrollTrigger:{
          trigger: '.container',
          start: "10% bottom",
          end: "top top",
          scrub: 1
        }
      }
    )
  }

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    move(['.whatIDo'])
    expand(['.line1'])
  },[])

  return (
    <>
      <div
      className="line1"
        style={{
          borderBottom: "2px solid black",
          height: "2px",
          marginInline: "80px",
          marginTop: "50px",
          marginBottom: "50px",
        }}
      />
      <div
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          justifyContent: "space-between",
          paddingInline: "80px",
        }}
      >
        <div>
          <h1
            className="font-thin whatIDo"
            style={{ fontStyle: "italic", letterSpacing: 1 }}
          >
            What I do
          </h1>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "50px",
            justifyContent: "space-between",
            marginLeft: "10px",
          }}
        >
          <div style={{ display: "flex", flex: 1, flexDirection: "row" }}>
            <div
            className="whatIDo"
              style={{
                display: "flex",
                flex: 1,
                flexDirection: "column",
                gap: "7px",
              }}
            >
              <h2
                className="font-thin"
                style={{
                  fontStyle: "italic",
                  letterSpacing: 1,
                  marginBottom: "10px",
                }}
              >
                Visual Design
              </h2>
              <p className="font-thin" style={paraStyle}>
                Web Design
              </p>
              <p className="font-thin" style={paraStyle}>
                UI Design
              </p>
            </div>
            <div
            className="whatIDo"
              style={{
                display: "flex",
                flex: 1,
                flexDirection: "column",
                gap: "7px",
              }}
            >
              <h2
                className="font-thin"
                style={{
                  fontStyle: "italic",
                  letterSpacing: 1,
                  marginBottom: "10px",
                }}
              >
                Web Development
              </h2>
              <p className="font-thin" style={paraStyle}>
                Static Website Development
              </p>
              <p className="font-thin" style={paraStyle}>
                Webapp Development
              </p>
              <p className="font-thin" style={paraStyle}>
                Webflow Development
              </p>
            </div>
          </div>
          <div style={{ display: "flex", flex: 1, flexDirection: "row" }}>
            <div
                        className="whatIDo"
              style={{
                display: "flex",
                flex: 1,
                flexDirection: "column",
                gap: "7px",
              }}
            >
              <h2
                className="font-thin"
                style={{
                  fontStyle: "italic",
                  letterSpacing: 1,
                  marginBottom: "10px",
                }}
              >
                Database
              </h2>
              <p className="font-thin" style={paraStyle}>
                MongoDb
              </p>
              <p className="font-thin" style={paraStyle}>
                Redis
              </p>
              <p className="font-thin" style={paraStyle}>
                MySql
              </p>
            </div>
            <div
                        className="whatIDo"
              style={{
                display: "flex",
                flex: 1,
                flexDirection: "column",
                gap: "7px",
              }}
            >
              <h2
                className="font-thin"
                style={{
                  fontStyle: "italic",
                  letterSpacing: 1,
                  marginBottom: "10px",
                }}
              >
                Misc
              </h2>
              <p className="font-thin" style={paraStyle}>
                Photography
              </p>
              <p className="font-thin" style={paraStyle}>
                Painting
              </p>
              <p className="font-thin" style={paraStyle}>
                Craft And Art
              </p>
            </div>
          </div>
          <div             className="whatIDo" style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
            <h2
              className="font-thin"
              style={{
                fontStyle: "italic",
                letterSpacing: 1,
                marginBottom: "10px",
              }}
            >
              Software and tech
            </h2>
            <p className="font-thin" style={paraStyle}>
              Web - Javascript, Typescript, Tailwind Css, Reactjs, Nextjs, React
              Native, Mui, React Native Paper
            </p>
            <p className="font-thin" style={paraStyle}>
              Backend - Nodejs, Expressjs, MongoDB, MySql, Redis
            </p>
            <p className="font-thin" style={paraStyle}>
              State Management - Redux, Tanstack
            </p>
            <p className="font-thin" style={paraStyle}>
              Advanced Backend - GraphQL, WebSockets
            </p>
            <p className="font-thin" style={paraStyle}>
              Platforms & Tools - Firebase, AWS, Kubernetes, Expo, Apns & Voip,
              MongoDb atlas and Triggers, Docker, CI/CD
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
