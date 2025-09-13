import React from 'react';
import { motion } from 'framer-motion';
import StarfieldFadeShadowUp from './StarfieldFadeShadowUp.tsx';
import StarfieldFadeShadowDown from './StarfieldFadeShadowDown.tsx';

const SloganSection = () => {
  return (
    <section>
      <StarfieldFadeShadowUp />
      <div className="text-center" style={styles.section}>
        <motion.div
          className="container py-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h2 className="fw-bold mb-3 slogan-heading">Design. Develop. Dominate.</h2>
          <p className="slogan-para mx-auto">
            We don’t just build websites — we craft digital powerhouses. Whether you’re launching or scaling,
            our design precision and development expertise ensure your brand makes a lasting impact.
          </p>
          <a href="/contact" className="btn btn-sm bw-btn mt-3 px-4 py-2 fw-semibold">
            Work With Us
          </a>
        </motion.div>

        <style>{`
          .bw-btn {
            background: white;
            color: black;
            border: 2px solid white;
            border-radius: 30px;
            transition: all 0.3s ease;
          }
          .bw-btn:hover {
            background: black;
            color: white;
            border: 2px solid white;
          }
          .slogan-heading {
            font-size: 2.1rem;
            letter-spacing: 1px;
            color: white;
          }
          .slogan-para {
            max-width: 700px;
            font-size: 1.05rem;
            line-height: 1.6;
            color: #d1d5db;
          }
          @media (max-width: 576px) {
            .slogan-heading {
              font-size: 1.5rem;
            }
            .slogan-para {
              font-size: 0.95rem;
            }
          }
        `}</style>
      </div>
      <StarfieldFadeShadowDown />
    </section>
  );
};

const styles = {
  section: {
    background: 'black',
    padding: '10px 0',
    boxShadow: 'inset 0 0 30px rgba(255, 255, 255, 0.05)',
  },
};

export default SloganSection;
