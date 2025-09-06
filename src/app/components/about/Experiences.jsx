"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect } from "react";

export default function Experiences() {
  const experiences = [
    {
      name: "Full stack developer @Eligarf Technologies",
      year: "Jun 2023 - Present",
    },
    {
      name: "Full stack intern @Global Quest Technologies",
      year: "Feb 2023 - May 2023",
    },
    {
      name: "Machine learning intern @Take it smart (OPC) pvt.ltd",
      year: "Sep 2022 - Feb 2022",
    },
  ];

  function expand(className){
    gsap.fromTo(
      className,
      {opacity: 0, x: 1500},
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        ease: "power1.out",
        stagger: 0.1,
        scrollTrigger:{
          trigger: '.container',
          start: "40% bottom",
          end: "top top",
          scrub: 1
        }
      }
    )
  }

  function move(className) {
    gsap.fromTo(
      className,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power1.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".expContainer",
          start: "top 100%",
          end: "top top",
          scrub: 1,
        },
      }
    );
  }

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    move([".experiences"]);
    expand(['.line2'])
  }, []);

  return (
    <>
      <div
      className="line2"
        style={{
          borderBottom: "2px solid black",
          height: "2px",
          marginInline: "80px",
          marginTop: "50px",
          marginBottom: "50px",
        }}
      />
      <div
        className="expContainer"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          justifyContent: "space-between",
          paddingInline: "80px",
          paddingBottom: '400px'
        }}
      >
        <div>
          <h1
            className="font-thin experiences"
            style={{ fontStyle: "italic", letterSpacing: 1 }}
          >
            Experiences
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
          {experiences.map((experience, index) => (
            <div
              className="experiences"
              key={index}
              style={{
                flex: 1,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <p
                className="font-thin  "
                style={{
                  fontStyle: "italic",
                  letterSpacing: 1,
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                }}
              >
                {experience.name}
              </p>
              <p
                className="font-thin"
                style={{
                  fontStyle: "italic",
                  letterSpacing: 1,
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                }}
              >
                {experience.year}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
