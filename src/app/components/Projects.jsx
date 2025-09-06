"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  function reveal({ className, container }) {
    gsap.fromTo(
      `${className}`,
      { height: "100%" },
      {
        height: "0%",
        duration: 2,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          end: "top 30%",
          scrub: 1,
        },
      }
    );
  }

  function scale({ className, container }) {
    gsap.fromTo(
      `${className}`, // The image itself
      { scale: 0.8, transformOrigin: "center" },
      {
        scale: 1,
        duration: 2,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: container,
          start: "top bottom",
          end: "top top",
          scrub: 1,
        },
      }
    );
  }

  function move({ className, direction, amount, container }) {
    gsap.fromTo(
      `${className}`,
      { opacity: 0, [direction]: amount, height: "0px", overflow: "hidden" },
      {
        opacity: 1,
        [direction]: 0,
        duration: 2,
        height: "auto",
        overflow: "visible",
        ease: "power1.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: container,
          start: "20% bottom",
          end: "top top",
          scrub: 1,
        },
      }
    );
  }

  useEffect(() => {
    move({
      className: ".projects",
      direction: "y",
      amount: 100,
      container: ".projects-container",
    });

    reveal({
      className: ".image-mask1",
      container: ".reveal-image-container1",
    });
    scale({
      className: ".expand-image1",
      container: ".reveal-image-container1",
    });

    reveal({
      className: ".image-mask2",
      container: ".reveal-image-container2",
    });
    scale({
      className: ".expand-image2",
      container: ".reveal-image-container2",
    });

    reveal({
      className: ".image-mask3",
      container: ".reveal-image-container3",
    });
    scale({
      className: ".expand-image3",
      container: ".reveal-image-container2",
    });
  }, []);

  return (
    <div
      className="projects-container"
      style={{ padding: "100px", display: "grid", gap: "100px" }}
    >
      <div className="projects" style={{ height: "0px", overflow: "hidden" }}>
        <p style={{ fontSize: "3.3rem" }}>Crafted</p>
        <p style={{ fontSize: "3.3rem" }}>Projects</p>
      </div>

      {/* Section 1 */}
      <div
        className="reveal-image-container1"
        style={{
          position: "relative",
          height: "600px",
          display: "flex",
          gap: "20px",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            flex: 2,
          }}
        >
          <div
            className="image-mask1"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "white",
              zIndex: 2,
            }}
          />
          <Image
            className="expand-image1"
            src="/assets/projects/1.avif"
            fill
            style={{ objectFit: "cover", scale: "0.8" }}
            alt="1"
          />
        </div>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "60%",
            flex: 1,
          }}
        >
          <div
            className="image-mask1"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "white",
              zIndex: 2,
            }}
          />
          <Image
            className="expand-image1"
            src="/assets/projects/2.avif"
            fill
            style={{ objectFit: "cover", scale: "0.8" }}
            alt="2"
          />
        </div>
      </div>

      {/* Section 2 */}
      <div
        className="reveal-image-container2"
        style={{
          position: "relative",
          height: "600px",
          display: "flex",
          gap: "20px",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "60%",
            flex: 1,
          }}
        >
          <div
            className="image-mask2"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "white",
              zIndex: 2,
            }}
          />
          <Image
            className="expand-image2"
            src="/assets/projects/3.avif"
            fill
            style={{ objectFit: "cover", scale: "0.8" }}
            alt="1"
          />
        </div>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            flex: 2,
          }}
        >
          <div
            className="image-mask2"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "white",
              zIndex: 2,
            }}
          />
          <Image
            className="expand-image2"
            src="/assets/projects/4.avif"
            fill
            style={{ objectFit: "cover", scale: "0.8" }}
            alt="2"
          />
        </div>
      </div>

      {/* Section 3 */}
      <div
        className="reveal-image-container3"
        style={{
          position: "relative",
          height: "600px",
          display: "flex",
          gap: "20px",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            flex: 2,
          }}
        >
          <div
            className="image-mask3"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "white",
              zIndex: 2,
            }}
          />
          <Image
            className="expand-image3"
            src="/assets/projects/5.avif"
            fill
            style={{ objectFit: "cover", scale: "0.8" }}
            alt="1"
          />
        </div>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "60%",
            flex: 1,
          }}
        >
          <div
            className="image-mask3"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "white",
              zIndex: 2,
            }}
          />
          <Image
            className="expand-image3"
            src="/assets/projects/6.avif"
            fill
            style={{ objectFit: "cover", scale: "0.8" }}
            alt="2"
          />
        </div>
      </div>
      <div>
        <button
          className="btn"
          style={{
            padding: "35px 100px",
          }}
        >
          <span className="text1 btn-span">
            <a href="/project">view all projects</a>
          </span>
          <span className="text2 btn-span">
            <a href="/project">view all projects</a>
          </span>
        </button>
      </div>
    </div>
  );
}
