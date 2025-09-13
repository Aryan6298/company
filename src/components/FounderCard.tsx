/**
 * Enhanced FoundersSection with attractive background and card hover effect
 */
import React from "react";
import StarfieldFadeShadowUp from "./StarfieldFadeShadowUp.tsx";
import StarfieldFadeShadowDown from "./StarfieldFadeShadowDown.tsx";

export default function FoundersSection() {
  return (<>
         <StarfieldFadeShadowUp />
    <section className="founders-section py-5">
      <style>{`
        .founders-section {
          background: black;
          position: relative;
          height: 55vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          overflow: hidden;
        }
        .founders-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background: url('https://www.transparenttextures.com/patterns/stardust.png');
          opacity: 0.18;
          z-index: 0;
        }
        .founders-quote {
          color: #fff;
          font-size: 2.4rem;
          font-style: italic;
          font-weight: 400;
          text-align: center;
          margin-bottom: 4.5rem;
          margin-top: 0.5rem;
          line-height: 1.3;
          z-index: 1;
          position: relative;
          text-shadow: 0 2px 16px #1e2a4a99;
        }
        .founder-card {
          background: rgba(26,34,51,0.98);
          border-radius: 2rem;
          box-shadow: 0 8px 48px 0 #2563eb55, 0 0 0 0 #2563eb;
          padding: 1.7rem 2.7rem 1.7rem 2.7rem;
          display: flex;
          align-items: center;
          width:420px;
          margin: 0 auto;
          position: relative;
          transition: box-shadow 0.35s cubic-bezier(.4,1,.4,1), transform 0.35s cubic-bezier(.4,1,.4,1);
          z-index: 1;
        }
        .founder-card:hover {
          box-shadow: 0 0 64px 8px #2563ebcc, 0 0 0 0 #2563eb;
          transform: scale(1.035);
        }
        .founder-avatar {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background: #111;
          border: 4px solid #3b82f6;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.1rem;
          font-weight: 700;
          color: #fff;
          margin-right: 1.5rem;
          box-shadow: 0 0 0 4px #23233a, 0 0 24px #3b82f6cc;
          transition: box-shadow 0.35s cubic-bezier(.4,1,.4,1);
        }
        .founder-card:hover .founder-avatar {
          box-shadow: 0 0 0 4px #2563eb, 0 0 32px #2563ebcc;
        }
        .founder-info {
          display: flex;
          flex-direction: column;
        }
        .founder-name {
          color: #fff;
          font-size: 1.35rem;
          font-weight: 700;
          margin-bottom: 0.2rem;
        }
        .founder-role {
          color: #b0b6c3;
          font-size: 1.08rem;
          font-weight: 400;
        }
        @media (max-width: 600px) {
          .founders-quote {
            font-size: 1.2rem;
            margin-bottom: 2.2rem;
            margin-top: 1.5rem;
          }
          .founder-card {
            padding: 1.1rem 0.5rem 1.1rem 0.5rem;
            width: 98vw;
          }
          .founder-avatar {
            width: 48px;
            height: 48px;
            font-size: 1.1rem;
            margin-right: 0.8rem;
          }
        }
      `}</style>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="founders-quote">
              "AI unlocks efficiency—let automation do the work while you focus on what matters."
            </div>
          </div>
          <div className="col-12 d-flex justify-content-center">
            <div className="founder-card">
              <div className="founder-avatar">AJ</div>
              <div className="founder-info">
                <div className="founder-name">Carlos Jonson</div>
                <div className="founder-role">Founder &amp; CEO</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <StarfieldFadeShadowDown />
    </>
  );
}
