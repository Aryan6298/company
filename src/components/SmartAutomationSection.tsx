import React, { useEffect, useRef, useState, RefObject } from "react";
import StarfieldFadeShadowUp from "./StarfieldFadeShadowUp.tsx";
import StarfieldFadeShadowDown from "./StarfieldFadeShadowDown.tsx";
import { FiPhoneCall } from "react-icons/fi";
import { FaLaptopCode } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";

const cards = [
  {
    icon: <FiPhoneCall size={38} color="#fff" />,
    title: "Step 1: Connect With Us",
    desc: "Reach out via call, WhatsApp, or email — we’re here to understand your needs.",
    step: "Start Your Project",
  },
  {
    icon: <FaLaptopCode size={38} color="#fff" />,
    title: "Step 2: We Build & Design",
    desc: "Our team designs, develops, and delivers your website, app, or graphics — fast and professional.",
    step: "We Get to Work",
  },
  {
    icon: <MdSupportAgent size={38} color="#fff" />,
    title: "Step 3: Ongoing Support",
    desc: "We offer continued support, updates, and SEO to keep your business ahead.",
    step: "Stay Connected",
  },
];

const SmartAutomationSection = () => {
  const [phase, setPhase] = useState(0);
  const cardRefs: Array<RefObject<HTMLDivElement | null>> = [
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setPhase((prev) => (prev + 1) % 3);
    }, 1200);
    return () => clearTimeout(timer);
  }, [phase]);

  return (
    <section style={{ marginTop: '-50px' }}>
      <StarfieldFadeShadowUp />
      <div className="auto-section position-relative w-100 py-5">
        <style>{`
          .auto-section {
            background: #000;
            width: 100vw;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .auto-title {
            color: #fff;
            font-size: 2.7rem;
            font-weight: 800;
            text-align: center;
            margin-bottom: 3.5rem;
            letter-spacing: -1px;
          }
          .auto-cards-row {
            display: flex;
            gap: 2.5rem;
            justify-content: center;
            width: 100%;
          }
          @media (max-width: 991px) {
            .auto-cards-row {
              flex-direction: column;
              align-items: center;
              gap: 2rem;
            }
          }
          .auto-card {
            background: rgba(36,58,99,0.2);
            border-radius: 2.5rem;
            box-shadow: 0 0 24px 0 #2563eb88;
            padding: 2.5rem 2rem 1.5rem 2rem;
            min-width: 290px;
            max-width: 350px;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
            opacity: 1;
            transition:
              box-shadow 0.3s cubic-bezier(.4,1,.4,1),
              scale 0.3s cubic-bezier(.4,1,.4,1),
              transform 0.8s cubic-bezier(0.45, 0.05, 0.55, 0.95);
            z-index: 1;
          }
          .auto-card.card-up {
            transform: translateY(-30px);
          }
          .auto-card.card-down {
            transform: translateY(0px);
          }
          .auto-card:hover {
            box-shadow: 0 0 32px 0 #2563ebcc;
          }
          .auto-card-icon {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            background: #2563eb;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 1.5rem;
            box-shadow: none;
          }
          .auto-card-title {
            color: #fff;
            font-size: 1.35rem;
            font-weight: 700;
            text-align: center;
            margin-bottom: 0.7rem;
          }
          .auto-card-desc {
            color: #aab4c8;
            font-size: 1.05rem;
            text-align: center;
            margin-bottom: 2.2rem;
            font-weight: 400;
          }
          .auto-card-step {
            background: #181b24;
            color: #fff;
            border-radius: 0 0 2rem 2rem;
            width: 100%;
            padding: 0.8rem 0;
            text-align: center;
            font-weight: 600;
            font-size: 1.1rem;
            margin-top: auto;
            letter-spacing: 0.02em;
          }
        `}</style>
        <h2 className="auto-title">Let’s Build Your Digital Presence</h2>
        <div className="auto-cards-row">
          {cards.map((card, i) => {
            let motionClass = "";
            if (phase === 0) {
              if (i === 0) motionClass = "card-up";
              else if (i === 1) motionClass = "card-down";
            } else if (phase === 1) {
              if (i === 1) motionClass = "card-up";
              else if (i === 2) motionClass = "card-down";
            } else if (phase === 2) {
              if (i === 2) motionClass = "card-up";
              else if (i === 0) motionClass = "card-down";
            }
            return (
              <div
                className={`auto-card${motionClass ? " " + motionClass : ""}`}
                ref={cardRefs[i]}
                key={card.title}
                tabIndex={0}
              >
                <div className="auto-card-icon">{card.icon}</div>
                <div className="auto-card-title">{card.title}</div>
                <div className="auto-card-desc">{card.desc}</div>
                <div className="auto-card-step">{card.step}</div>
              </div>
            );
          })}
        </div>
      </div>
      <StarfieldFadeShadowDown />
    </section>
  );
};

export default SmartAutomationSection;
