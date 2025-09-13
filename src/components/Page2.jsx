import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import gsap from "gsap";

import img1 from "../assets/beyonce/project-som.png";
import img2 from "../assets/beyonce/project-amay.png";
import img3 from "../assets/beyonce/project-geocon.png";
import img4 from "../assets/beyonce/project-portfolio.png";
import img5 from "../assets/beyonce/project-beyonce01.jpg";
import { div } from "framer-motion/client";
import StarfieldFadeShadowUp from "./StarfieldFadeShadowUp.tsx";
import StarfieldFadeShadowDown from "./StarfieldFadeShadowDown.tsx";

const Page2Effect = () => {
  useEffect(() => {
    const elems = document.querySelectorAll(".elem");
    const page2 = document.querySelector("#page2");
    let forceImg5 = false;

    // Function to set Beyonce (img5) background
    const setImg5 = () => {
      gsap.to(page2, {
        opacity: 0,
        duration: 0.2,
        onComplete: () => {
          page2.style.backgroundImage = `url(${img5})`;
          page2.style.backgroundSize = "cover";
          page2.style.backgroundRepeat = "no-repeat";
          page2.style.backgroundPosition = "center";
          gsap.to(page2, { opacity: 1, duration: 0.2 });
        },
      });
    };

    // Scroll event to lock background to img5 after 50px
    const handleScroll = () => {
      if (window.scrollY >= 50 && !forceImg5) {
        forceImg5 = true;
        setImg5();
      } else if (window.scrollY < 50 && forceImg5) {
        forceImg5 = false;
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Hover events only work if not locked to img5
    elems.forEach((ele) => {
      ele.addEventListener("mouseenter", () => {
        if (forceImg5) return; // prevent override
        const bgimg = ele.getAttribute("data-img");

        gsap.to(page2, {
          opacity: 0,
          duration: 0,
          onComplete: () => {
            page2.style.backgroundImage = `url(${bgimg})`;
            page2.style.backgroundSize = "contain";
            page2.style.backgroundRepeat = "no-repeat";
            page2.style.backgroundPosition = "center";
            gsap.to(page2, { opacity: 1, duration: 0.2 });
          },
        });
      });
    });

    // ✅ On mount, check scroll position immediately
    // if (window.scrollY >= 50) {
    //   forceImg5 = true;
    //   setImg5();
    // }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <StarfieldFadeShadowUp />
      <h2 className="d-flex flex-colums  align-item-center justify-content-center " style={{fontSize:"3rem", color:'rgb(85, 85, 204)' ,background:'black'}}>Our Projects</h2>
    <div
      id="page2"
      className=" d-flex flex-column justify-content-center align-items-center text-center text-white"
      style={{
        height: "100vh",
        marginTop:"-1.2vh",
       
        width: "100%",
        backgroundColor: "#000",
        transition: "background-image 0.3s ease-in",
      }}
    >
   
       
      {[
        { title: "SOM", img: img1, blur: "blur-others" },
        { title:  "Amay Foundation", img: img2, blur: " blur" },
        { title: "Geocon", img: img3, blur: "blur-others" },
        { title: "Portfolio", img: img4, blur: "blur-future" },
        { title: "Beyonce Project", img: img5, blur: "blur" },
      ].map((item, i) => (
        <div
          key={i}
          className="elem w-100 position-relative"
          data-img={item.img} // ✅ still passes string path
        >
          <h2 className="m-0">{item.title}</h2>
          <div className="moving">
            <div className={item.blur}></div>
            {[...Array(3)].map((_, idx) => (
              <div className="moving-in" key={idx}>
                <h5>Creative Direction</h5>
                <h5>Digital Design</h5>
                <h5>Art Direction</h5>
                <h5>Branding and Identity</h5>
                <h5>Type Design</h5>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Internal CSS (same as before) */}
      <style>{`
        .elem {
          cursor: pointer;
        }
        .elem h2 {
          font-size: 6.8vw;
          text-transform: uppercase;
          font-weight: 100;
          position: relative;
          z-index: 9;
          line-height: 5vw;
        }
        .elem:hover h2 {
          font-style: italic;
          color:gold;
        }
        .elem .moving {
          background-color: black;
          width: 100%;
          white-space: nowrap;
          overflow: hidden;
          padding: 7px 0;
          position: absolute;
          top: 50%;
          transform: translate(0, -45%) scaleY(0);
          transition: all ease 0.3s;
        }
        .elem:hover .moving {
          transform: translate(0, -45%) scaleY(1);
        }
        .elem .moving .moving-in {
          display: inline-block;
          white-space: nowrap;
          animation: moving 5s linear infinite;
        }
        .elem .moving .moving-in h5 {
          color: white;
          display: inline-block;
          font-size: 19px;
          font-weight: 500;
          text-transform: uppercase;
          margin-right: 35px;
          opacity: 0;
          transition: all ease 0.5s;
          transition-delay: 0.2s;
        }
        .elem:hover .moving .moving-in h5 {
          opacity: 1;
        }
        @keyframes moving {
          from { transform: translateX(0); }
          to { transform: translateX(-100%); }
        }
        .blur, .blur-others, .blur-future {
          position: absolute;
          left: 50%;
          top: 50%;
          height: 100%;
          transform: translate(-50%, -50%);
          background: linear-gradient(to right, black, black, black);
          box-shadow: 10px 0 20px 20px black, -10px 0 20px 100px black;
          z-index: 9;
        }
        .blur { width: 35%; }
        .blur-others { width: 10%; }
        .blur-future { width: 20%; }

         @media (max-width: 480px) {
            .elem h2 {
              font-size: 11vw;
            }
            .elem {
              padding: 0.8rem 0;
            }
            .elem .moving .moving-in h5 {
              font-size: 10px;
              margin-right: 6px;
            }
      `}</style>
    </div>
    <StarfieldFadeShadowDown />
    </div>
  );
};

export default Page2Effect;
