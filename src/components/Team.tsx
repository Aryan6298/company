import React from "react";
import StarfieldFadeShadowUp from "./StarfieldFadeShadowUp.tsx";
import StarfieldFadeShadowDown from "./StarfieldFadeShadowDown.tsx";

const teamMembers = [
  {
    letter: "A",
    name: "Alice Johnson",
    title: "Lead AI Engineer",
    desc: "Expert in machine learning and natural language processing, leading our AI innovation.",
  },
  {
    letter: "B",
    name: "Brian Smith",
    title: "Automation Architect",
    desc: "Designs scalable automation systems to streamline business operations.",
  },
  {
    letter: "C",
    name: "Chloe Lee",
    title: "Product Manager",
    desc: "Bridges the gap between technology and user needs for seamless product experiences.",
  },
  {
    letter: "D",
    name: "David Kim",
    title: "Integration Specialist",
    desc: "Ensures smooth integration of our AI solutions with your existing tools and platforms.",
  },
];

const Team = () => (
    <section>
        <StarfieldFadeShadowUp/>
  
  <div className="team-section py-5">
    <style>{`
      .team-section {
        background: #000;
        width: 100%;
        padding: 0;
        height:600px;
        min-height: 60vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      .team-heading {
        color: #fff;
        font-size: 2.5rem;
        font-weight: 800;
        text-align: center;
        margin-bottom: 3.5rem;
        letter-spacing: -1px;
      }
      .team-cards-row {
        display: flex;
        gap: 2.5rem;
        justify-content: center;
        flex-wrap: nowrap;
      }
      .team-card {
        background: #13161d;
        border-radius: 2.2rem;
        box-shadow: 0 8px 32px 0 #000a1a33;
        padding: 2.5rem 2.2rem 2.2rem 2.2rem;
        min-width: 280px;
        max-width: 340px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        margin-bottom: 2rem;
        transition: box-shadow 0.2s;
      }
      .team-card:hover {
        box-shadow: 0 12px 40px 0 #2563eb55;
      }
      .team-card-avatar {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        background: #2563eb;
        margin: 0 auto 2rem auto;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2.5rem;
        font-weight: 800;
        color: #fff;
        letter-spacing: 0.02em;
        box-shadow: 0 2px 12px 0 #2563eb33;
      }
      .team-card-name {
        color: #fff;
        font-size: 1.35rem;
        font-weight: 700;
        margin-bottom: 0.3rem;
      }
      .team-card-title {
        color: #6ea8fe;
        font-size: 1.08rem;
        font-weight: 600;
        margin-bottom: 1.1rem;
      }
      .team-card-desc {
        color: #bfc9d8;
        font-size: 1.13rem;
        font-weight: 400;
        line-height: 1.5;
      }
      @media (max-width: 1200px) {
        .team-cards-row {
          gap: 1.2rem;
        }
        .team-card {
          min-width: 220px;
          max-width: 100vw;
        }
      }
      @media (max-width: 991px) {
        .team-cards-row {
          flex-wrap: wrap;
        }
        .team-card {
          min-width: 220px;
          max-width: 100vw;
        }
      }
      @media (max-width: 767px) {
        .team-cards-row {
          flex-direction: column;
          align-items: center;
        }
        .team-card {
          min-width: 0;
          max-width: 98vw;
        }
      }
    `}</style>
    <div className="container">
      <div className="team-heading">Our Team</div>
      <div className="team-cards-row">
        {teamMembers.map((member, idx) => (
          <div className="team-card" key={member.name}>
            <div className="team-card-avatar">{member.letter}</div>
            <div className="team-card-name">{member.name}</div>
            <div className="team-card-title">{member.title}</div>
            <div className="team-card-desc">{member.desc}</div>
          </div>
        ))}
      </div>
    </div>
    </div>
    <StarfieldFadeShadowDown/>
  </section>
);

export default Team;