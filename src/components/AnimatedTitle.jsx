import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimatedTitle = ({ title, containerClass }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const words = containerRef.current.querySelectorAll(".animated-word");

      // Ensure initial state
      gsap.set(words, { opacity: 0, y: 30, rotateY: 90 });

      gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%" ,
          end: "top 50%",
          toggleActions: "play none none reverse",
        },
      }).to(words, {
        opacity: 1,
         
          transform: "translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)",
        y: 0,
        rotateY: 0,
        ease: "power2.out",
        stagger: 0.05,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <style>
        {`
          .animated-title {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            gap: 0.5rem;
          }
          .animated-word {
            display: inline-block;
            opacity: 0;
            transform: translateY(30px) rotateY(90deg);
            font-weight: 700;
            font-size: 1.8rem;
          }
          @media (min-width: 768px) {
            .animated-word {
              font-size: 2.2rem;
            }
          }
        `}
      </style>

      <div ref={containerRef} className={`animated-title ${containerClass}`}>
        {title.split("<br />").map((line, index) => (
          <div key={index} className="d-flex justify-content-center flex-wrap gap-2 px-3">
            {line.split(" ").map((word, idx) => (
              <span
                key={idx}
                className="animated-word"
                dangerouslySetInnerHTML={{ __html: word }}
              />
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default AnimatedTitle;
