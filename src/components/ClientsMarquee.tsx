import React from 'react';
import './ClientsMarquee.css';
import StarfieldFadeShadowUp from './StarfieldFadeShadowUp.tsx';
import StarfieldFadeShadowDown from './StarfieldFadeShadowDown.tsx';
import img01 from "../assets/clients/geocon-logo.png";
import img02 from "../assets/clients/amay-logo.png";
import img03 from "../assets/clients/som-logo.png";
import img04 from "../assets/clients/aj-logo.png";

const clientLogos = [
  { src: img01, alt: 'Client Logo 1' },
  { src: img02, alt: 'Client Logo 2' },
  { src: img03, alt: 'Client Logo 3' },
  { src: img04, alt: 'Client Logo 4' },
];

const ClientsMarquee = () => (
  <section className="clients">
    <StarfieldFadeShadowUp />
    <div className="container" style={{ backgroundColor: 'black' }}>
      <p className="section-subtitle text-center mb-4">
        Helping businesses succeed worldwide
      </p>
      <div className="client-logos-marquee">
        <div className="marquee-track">
          {clientLogos.map((logo, idx) => (
            <div className="client-logo-item" key={idx}>
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
    <StarfieldFadeShadowDown />
  </section>
);

export default ClientsMarquee;
