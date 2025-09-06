'use client'
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function About() {
  const headingRef = useRef(null);
  const para1Ref = useRef(null);
  const para2Ref = useRef(null);
  const btnRef = useRef(null);
  const aboutRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      [headingRef.current, para1Ref.current, para2Ref.current, btnRef.current, aboutRef.current],
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1.5, ease: "back.out", stagger: 0.1 }
    );
    gsap.to(
      '.imageMask',
      {
        width: '100%',
        height: '0%',
        duration: 1.5,
        ease: "power3.out",
      }
    )
    gsap.to(
      '.myImg',
      {
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        scale: 1
      }
    )
  }, []);

  return (
    <div style={{ display: 'flex', marginLeft: '20px', paddingTop:'80px' }}>
      <div
        style={{
          position: "relative",
          width: "500px",
          height: "1000px",
          flex: 1,
          position:'relative'
        }}
      >
        <div className="imageMask" style={{backgroundColor: 'white', top:0, left:0, position:'absolute', width:'90%', height:'100%', zIndex:2}}/>
        <Image
          className="myImg"
          src={"/assets/myImage.png"}
          alt="My Image"
          fill
          style={{ objectFit: "contain", scale: 0.8, opacity: 0 }}
        />
      </div>
      <div style={{ flex: 1, display: 'flex', gap: '50px', flexDirection: 'column', marginTop: '40px' }}>
        <h1 ref={aboutRef} style={{ textTransform: 'uppercase', fontSize: '0.8rem', opacity: 0 }}>✺ About me</h1>
        <h1
          ref={headingRef}
          className="font-thin"
          style={{ fontSize: "2.3rem", opacity: 0, transform: "translateY(100px)" }}
        >
          Blending adaptability with aesthetics, I design with a purpose where
          minimalism meets playfulness, and every detail serves a function
        </h1>
        <div style={{ display: 'grid', gap: '20px', fontSize: '1.5rem' }}>
          <p ref={para1Ref} className="font-endisplay" style={{ opacity: 0, transform: "translateY(100px)" }}>
            I thrive on solving complex problems and crafting seamless digital
            experiences. My approach to development and design is
            dynamic—evolving with every challenge, pushing boundaries, and
            embracing innovation. I believe great solutions emerge from
            adaptability, curiosity, and a deep understanding of both aesthetics
            and functionality.
          </p>
          <p ref={para2Ref} className="font-endisplay" style={{ opacity: 0, transform: "translateY(100px)" }}>
            Currently, I’m building at eligarh.tech, where I blend design
            thinking with cutting-edge technology to create intuitive and
            impactful solutions. Always open to new ideas, collaborations, and
            game-changing conversations. Let’s build something extraordinary.
          </p>
        </div>
        <button
          ref={btnRef}
          style={{
            opacity: 0,
            textTransform: "uppercase",
            marginRight: 'auto',
            fontSize: "0.8rem",
            padding: "25px 50px",
            borderRadius: "100px",
            outline: "none",
            border: "1px solid black",
            backgroundColor: "white",
            color: "black",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          view my resume
        </button>
      </div>
    </div>
  );
}
