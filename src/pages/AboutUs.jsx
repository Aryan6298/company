import React from 'react';
import aboutImg from '../assets/About-us-img.svg';
import StarfieldFadeShadowDown from '../components/StarfieldFadeShadowDown.tsx';
import StarfieldFadeShadowUp from '../components/StarfieldFadeShadowUp.tsx';
import ClientsMarquee from '../components/ClientsMarquee.tsx';

const AboutUs = () => {
  return (
    <section style={{ paddingTop: '50px' }}>
      <StarfieldFadeShadowUp />
      <div style={{ backgroundColor: 'rgb(41, 41, 81)', padding: '2rem 1rem' }}>
        <div style={styles.container} className="container py-4">
          <h2 style={styles.heading} className="text-center mb-5">
            Define Us!
          </h2>

          <div className="row align-items-center">
            {/* Image */}
            <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
              <style>{`
                .about-img-glow:hover {
                  transform: scale(1.02);
                  filter: drop-shadow(0 0 20px #38bdf8);
                }

                @media (max-width: 768px) {
                  .responsive-img {
                    max-height: 250px !important;
                  }
                }
              `}</style>

              <img
                src={aboutImg}
                alt="About Flown Developer"
                className="img-fluid about-img-glow responsive-img"
                style={styles.image}
              />
            </div>

            {/* Text Content */}
            <div className="col-12 col-md-6">
              <h3 style={styles.subheading}>
                Welcome to KAP Web Developer – A Professional Web Development Agency
              </h3>
              <p style={styles.paragraph}>
                KAP Web Developer is a trusted and registered web development company based in India. We
                specialize in building professional websites that are visually engaging, functional,
                and tailored to deliver meaningful results for our clients. Whether it's
                multi-functional web portals or elegant business sites, we craft every solution with
                precision and care.
              </p>

              <p style={styles.paragraph}>
                We’ve consistently helped businesses bring their digital vision to life. Our team is
                experienced in creating websites that are accessible, responsive, and user-focused.
                We focus on intuitive UI/UX, thoughtful design elements, and strong technical
                foundations. While we don't claim to be in the top 10, our quality speaks for
                itself—serving 100+ clients across industries with satisfaction and ongoing support.
              </p>

              <p style={styles.paragraph}>
                Our commitment is to deliver result-oriented websites with a clean design language,
                strategic content flow, and modern web standards. We ensure that your online
                presence aligns with your business goals and enhances your brand image across
                digital platforms.
              </p>
            </div>
          </div>
        </div>
      </div>

      <StarfieldFadeShadowDown />

      <div style={{ marginBottom: '-110px', marginTop: '100px' }}>
        <ClientsMarquee />
      </div>
    </section>
  );
};

const styles = {
  container: {
    backgroundColor: 'rgb(41, 41, 81)',
    color: '#fff',
    borderRadius: '12px',
    width: '100%',
  },
  heading: {
    fontWeight: '700',
    fontSize: '2.2rem',
    color: '#fff',
  },
  subheading: {
    fontWeight: '600',
    fontSize: '1.5rem',
    marginBottom: '20px',
  },
  paragraph: {
    fontSize: '1rem',
    lineHeight: '1.8',
    marginBottom: '15px',
  },
  image: {
    maxHeight: '400px',
    objectFit: 'contain',
    backgroundColor: '#fff',
    borderRadius: '12px',
    filter: 'drop-shadow(0 0 10px #0ea5e9)',
    transition: 'transform 0.3s ease, filter 0.3s ease',
  },
};

export default AboutUs;
