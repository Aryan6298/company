import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import img1 from "../assets/animated-image.png";

import AnimatedTitle from "./AnimatedTitle";
import StarfieldFadeShadowUp from "./StarfieldFadeShadowUp.tsx";
import StarfieldFadeShadowDown from "./StarfieldFadeShadowDown.tsx";

gsap.registerPlugin(ScrollTrigger);

const Scrollfade = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    // Animate the container shape
    clipAnimation.to(".mask-clip-path", {
      width: "100%",
      height: "100vh",
      overflow: "hidden",
      borderRadius: 0,
      ease: "power1.out",
    });

    // ✅ Add image parallax effect
    clipAnimation.to(
      ".mask-clip-path img",
      {
        y: "5%", // moves image upwards
        scale: 1.2, // slight zoom-in for depth
        ease: "none",
      },
      0 // start at same time as container animation
    );
  });

  return (
    <>
      <StarfieldFadeShadowUp />
      <style>{`
        .scrollfade-container {
          min-height: 100vh;
          width: 100%;
          background-color: #030513ff;
          position: relative;
          overflow-x: hidden; /* ✅ Prevent horizontal scroll */
        }
        .text-section {
          padding-top: 0rem;
          display: flex;
          flex-direction: column;
          font-family:'Instrument Serif', sans-serif;
          align-items: center;
          position: relative;
        }
        .medium-text {
          padding-top: 1.5rem;
        }
        .text-section p.small-text {
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #374151;
          font-size: 0.75rem;
        }
        .text-section .bottom-text {
          position: absolute;
          bottom: -80vh;
          left: 50%;
          transform: translateX(-50%);
          max-width: 22rem;
          text-align: center;
          font-size: 1.125rem;
          color: #374151;
        }
        @media (min-width: 768px) {
          .text-section .bottom-text {
            max-width: 34rem;
          }
          .text-section p.small-text {
            font-size: 10px;
          }
        }
        .clip-section {
          height: 100dvh;
          width: 100%;
          position: relative;
          overflow-x: hidden; /* ✅ Prevent overflow */
        }
        .mask-clip-path {
          position: absolute;
          left: 50%;
          top: 0;
          transform: translateX(-50%);
          height: 60vh;
          width: 90%;
          max-width: 100%; /* ✅ keep inside viewport */
          overflow: hidden;
          border-radius: 1.5rem;
          z-index: 20;
        }
        @media (min-width: 768px) {
          .mask-clip-path {
            width: 30vw;
            height: 70vh;
            max-width: 100%;
          }
        }
        .mask-clip-path img {
          position: absolute;
          top: -10%;
          left: 0;
          height: 100%;
          width: 100%;
          object-fit: cover;
          object-position: center; /* ✅ controls visible focus */
          transform: translateY(0);
        }
        /* ✅ Mobile-specific image adjustments */
        @media (max-width: 768px) {
          .mask-clip-path {
            height: 50vh; /* smaller container */
          }
          .mask-clip-path img {
            object-position: top center; /* show top part of image */
            transform: scale(1.1) translateY(-10px); /* zoom & shift */
          }
        }
      `}</style>

      <div id="about" className="scrollfade-container">
        {/* Text Section */}
        <div className="text-section">
          <p className="medium-text" style={{ color: "rgb(85, 85, 204)" }}>
            Welcome to KAP
          </p>

          <AnimatedTitle
            title="Disc<b>o</b>ver the world's <br /> largest shared <b>D</b>esigns"
            containerClass=" text-center text-primary mt-3 pb-3"
          />

          <div className="bottom-text">
            <p className="mb-2">Building the Web of Tomorrow</p>
            <p style={{ color: "rgba(107, 114, 128, 1)" }}>
              We craft fast, modern, and responsive websites that turn ideas
              into powerful digital experiences. Your vision, our code — together
              we build the future.
            </p>
          </div>
        </div>

        {/* Image Clip Section */}
        <div className="clip-section" id="clip">
          <div className="mask-clip-path">
            <img src={img1} alt="Background" />
          </div>
        </div>
      </div>
      <StarfieldFadeShadowDown />
    </>
  );
};

export default Scrollfade;
