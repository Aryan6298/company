import React, { useState, useEffect, useRef } from "react";
import StarfieldFadeShadowUp from "./StarfieldFadeShadowUp.tsx";
import StarfieldFadeShadowDown from "./StarfieldFadeShadowDown.tsx";
const features = [
  {
    key: "BI",
    name: "Brand Identity",
    title: "Craft a unique & memorable brand presence",
    desc:
      "We design logos, color palettes, and brand systems that resonate with your audience and reflect your values.",
    img: "https://images.unsplash.com/photo-1612832021534-d4a6c4b88e28?auto=format&fit=crop&w=600&q=80",
  },
  {
    key: "WD",
    name: "Web Design",
    title: "Responsive, modern websites that convert",
    desc:
      "Beautiful and fast websites optimized for all devices, delivering a seamless experience for your customers.",
    img: "https://images.unsplash.com/photo-1522202222345-3f8f9929c3f4?auto=format&fit=crop&w=600&q=80",
  },
  {
    key: "SEO",
    name: "SEO & Optimization",
    title: "Rank higher and drive organic growth",
    desc:
      "Our SEO experts ensure your site is search-friendly, helping you climb to the top of Google and stay there.",
    img: "https://images.unsplash.com/photo-1537432376769-00a3ab65b9aa?auto=format&fit=crop&w=600&q=80",
  },
  {
    key: "CS",
    name: "Content Strategy",
    title: "Attract, engage & retain through content",
    desc:
      "We build editorial strategies with impactful blog posts, social media content, and newsletters to grow your brand.",
    img: "https://images.unsplash.com/photo-1587614382346-ac7f2c07dd3f?auto=format&fit=crop&w=600&q=80",
  },
  {
    key: "SM",
    name: "Social Media Growth",
    title: "Expand your brand’s voice across platforms",
    desc:
      "Reach and engage the right audience through tailored strategies on Instagram, LinkedIn, YouTube, and more.",
    img: "https://images.unsplash.com/photo-1629904853893-c2b2b4f79903?auto=format&fit=crop&w=600&q=80",
  },
];


const AdvancedAIFeaturesSection = () => {
  const [selected, setSelected] = useState(0);
  const [fadeIn, setFadeIn] = useState(false);
  const [cardKey, setCardKey] = useState(0);
  const isFirstRender = useRef(true);
  const [cardAnim, setCardAnim] = useState(false);

  useEffect(() => {
    setTimeout(() => setFadeIn(true), 100);
  }, []);

  useEffect(() => {
    if (!isFirstRender.current) {
      setCardAnim(true);
      const timer = setTimeout(() => setCardAnim(false), 500);
      return () => clearTimeout(timer);
    } else {
      isFirstRender.current = false;
    }
  }, [selected]);

  const handleFeatureClick = (i: number) => {
    if (i !== selected) {
      setSelected(i);
      setCardKey(prev => prev + 1); // force remount for animation
    }
  };

  return (
    <section>
       <StarfieldFadeShadowUp />
    <div className="ai-features-section">

      <style>{`
        .ai-features-section {
          background: #000;
          min-height: 100vh;
          width: 100%;
          font-family: inherit;
          position: relative;
          padding: 0;
          overflow-x: hidden;
          box-sizing: border-box;
        }
        .ai-features-heading {
          color: #fff;
          font-size: 2.8rem;
          font-weight: 800;
          text-align: center;
          
          margin-bottom: 3.5rem;
          letter-spacing: -1px;
        }
        .ai-features-list-col {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          gap: 1.7rem;
          min-width: 340px;
          max-width: 440px;
        }
        .ai-feature-btn {
          display: flex;
          align-items: center;
          background: #181b24;
          border: .5px solid grey;
          border-radius: 1.5rem;
          width:350px;
          padding: 1rem 1.4rem;
          font-size: 1.08rem;
          font-weight: 700;
          color: #fff;
          margin-left:60px;
          margin-bottom: 0;
          cursor: pointer;
          transition: 
            box-shadow 0.25s cubic-bezier(.4,1,.4,1),
            border-color 0.25s cubic-bezier(.4,1,.4,1),
            background 0.25s cubic-bezier(.4,1,.4,1),
            transform 0.25s cubic-bezier(.4,1,.4,1);
          outline: none;
          box-shadow: 0 2px 16px 0 #2563eb22;
          position: relative;
        }
        .ai-feature-btn .ai-feature-icon {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: #000;
          border: 2.5px solid #fff;
          color: #fff;
          font-size: 1rem;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 1rem;
          letter-spacing: 0.02em;
          transition: border-color 0.25s;
          box-shadow: none;
        }
        .ai-feature-btn.selected,
        .ai-feature-btn:active {
          border-color: #2563eb;
          background: linear-gradient(90deg, #2563eb22 0%, #181b24 100%);
          box-shadow: 0 0 24px 0 #2563eb55;
        }
        .ai-feature-btn.selected .ai-feature-icon,
        .ai-feature-btn:active .ai-feature-icon,
        .ai-feature-btn:hover .ai-feature-icon {
          border-color: #2563eb;
          box-shadow: none;
        }
        .ai-feature-btn:hover {
          transform: scale(1.055);
          box-shadow: 0 0 32px 0 #2563ebcc;
          border-color: #2563eb;
        }
        .ai-features-cta-btn {
          /* removed Get started now button styles */
        }
        .ai-features-cta-btn-primary:hover {
          /* removed Get started now button hover styles */
        }
        .ai-features-card {
          background: rgba(17, 20, 28, 0.85);
          border-radius: 2.2rem;
          box-shadow: 0 8px 48px 0 #2563eb33;
          padding: 2.2rem 2.2rem 2.2rem 2.2rem;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          min-width: 0;
          max-width: 800px;
          width: 100%;
          min-height: 480px;
          transition: box-shadow 0.3s cubic-bezier(.4,1,.4,1), transform 0.3s cubic-bezier(.4,1,.4,1), opacity 0.35s cubic-bezier(.4,1,.4,1), transform 0.35s cubic-bezier(.4,1,.4,1);
          opacity: 0;
          transform: translateY(40px);
          box-sizing: border-box;
        }
        .ai-features-card.ai-fade-in {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.7s cubic-bezier(.4,1,.4,1), transform 0.7s cubic-bezier(.4,1,.4,1);
        }
        .ai-features-card-img {
          width: 100%;
          max-width: 420px;
          height: 260px;
          object-fit: cover;
          border-radius: 1.2rem;
          margin-bottom: 2.2rem;
          box-shadow: 0 4px 32px 0 #2563eb33;
          align-self: center;
        }
        .ai-features-card-title {
          color: #fff;
          font-size: 1.7rem;
          font-weight: 800;
          margin-bottom: 0.7rem;
          text-align: left;
        }
        .ai-features-card-desc {
          color: #bfc9d8;
          font-size: 1.22rem;
          text-align: left;
          font-weight: 400;
        }
        /* Fade-in and stagger for feature buttons */
        .ai-feature-btn,
        .ai-features-card {
          opacity: 0;
          transform: translateY(40px);
        }
        .ai-features-fade-in .ai-feature-btn {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.7s cubic-bezier(.4,1,.4,1), transform 0.7s cubic-bezier(.4,1,.4,1);
        }
        .ai-features-fade-in .ai-feature-btn:nth-child(1) { transition-delay: 0.1s; }
        .ai-features-fade-in .ai-feature-btn:nth-child(2) { transition-delay: 0.3s; }
        .ai-features-fade-in .ai-feature-btn:nth-child(3) { transition-delay: 0.5s; }
        .ai-features-fade-in .ai-feature-btn:nth-child(4) { transition-delay: 0.7s; }
        .ai-features-fade-in .ai-features-card { transition-delay: 0.9s; }
        .ai-get-started-btn {
          display: block;
          margin: 1rem 0 0 6rem;
          background: linear-gradient(90deg, #2563eb 60%, #174ea6 100%);
          color: #fff;
          font-size: 1.18rem;
          font-weight: 800;
          border: none;
          border-radius: 2rem;
          padding: 1.1rem 2.8rem;
          box-shadow: 0 2px 12px 0 #2563eb33;
          transition: background 0.16s cubic-bezier(.4,1,.4,1), box-shadow 0.16s cubic-bezier(.4,1,.4,1), transform 0.16s cubic-bezier(.4,1,.4,1);
          cursor: pointer;
          outline: none;
          letter-spacing: 0.01em;
          box-sizing: border-box;
        }
        .ai-get-started-btn:hover {
          background: linear-gradient(90deg, #1d4ed8 60%, #2563eb 100%);
          box-shadow: 0 6px 28px 0 #2563eb66, 0 0 12px 0 #2563eb44;
          transform: translateY(-4px) scale(1.03);
        }
        .ai-features-card-animating {
          opacity: 0;
          transform: translateY(40px) scale(0.97);
          pointer-events: none;
        }
        .ai-features-card-animating-in {
          opacity: 1;
          transform: translateY(-24px) scale(1.03);
          animation: ai-features-card-in 0.35s cubic-bezier(.4,1,.4,1);
        }
        @keyframes ai-features-card-in {
          0% { opacity: 0; transform: translateY(40px) scale(0.97); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .ai-features-card.ai-fade-up {
          opacity: 0;
          transform: translateY(40px);
          animation: ai-fade-up-in 0.5s cubic-bezier(.4,1,.4,1) forwards;
        }
        @keyframes ai-fade-up-in {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 991px) {
          .ai-features-list-col, .ai-features-card-col {
            min-width: 0;
            max-width: 100vw;
          }
          .ai-features-card {
            min-width: 0;
            max-width: 100vw;
          }
        }
        @media (max-width: 767px) {
          .ai-features-heading {
            font-size: 2rem;
            margin-bottom: 2.2rem;
          }
          .ai-features-list-col {
            margin-bottom: 2.2rem;
            min-width: 0;
            max-width: 100vw;
          }
          .ai-features-card {
            padding: 1.5rem 0.5rem 1.5rem 0.5rem;
            min-width: 0;
            max-width: 100vw;
            min-height: 0;
          }
          .ai-features-card-title,
          .ai-features-card-desc {
            text-align: center;
          }
        }
      `}</style>
      <div className="container py-5">
        <h2 className="ai-features-heading">Advanced AI features for smarter automation</h2>
        <div className="row flex-lg-row flex-column-reverse ai-features-fade-in" style={{margin: 0}}>
          {/* Left column: Feature list and CTA */}
          <div className="col-lg-5 d-flex flex-column ai-features-list-col mb-4 mb-lg-0">
            {features.map((f, i) => (
              <button
                key={f.key}
                className={`ai-feature-btn${selected === i ? " selected" : ""}`}
                onClick={() => handleFeatureClick(i)}
                tabIndex={0}
                style={{transitionDelay: fadeIn ? `${0.1 + i * 0.2}s` : "0s"}}
              >
                <span className="ai-feature-icon">{f.key}</span>
                {f.name}
              </button>
            ))}
            <button className="ai-get-started-btn">Get started now</button>
          </div>
          {/* Right column: Feature card */}
          <div className="col-lg-7 d-flex flex-column align-items-center ai-features-card-col">
            <div
              key={cardKey}
              className={`ai-features-card${cardAnim ? " ai-fade-up" : " ai-fade-in"}`}
              style={{transitionDelay: fadeIn ? "0.9s" : "0s"}}
            >
              <img
                src={features[selected].img}
                alt={features[selected].name}
                className="ai-features-card-img"
              />
              <div className="ai-features-card-title">{features[selected].title}</div>
              <div className="ai-features-card-desc">{features[selected].desc}</div>
            
            </div>
          </div>
        </div>
      </div>
    </div>
      <StarfieldFadeShadowDown />
    

    </section>
  );
};

export default AdvancedAIFeaturesSection;