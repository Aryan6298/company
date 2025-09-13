import React, { useEffect, useState, useRef } from 'react';
import StarfieldFadeShadowUp from './StarfieldFadeShadowUp.tsx';
import StarfieldFadeShadowDown from './StarfieldFadeShadowDown.tsx';

const cards = [
  {
    title: 'Dynamic & Attractive Designs',
    description: 'Visually stunning websites that engage users.',
    icon: '🎨',
  },
  {
    title: 'Expert Guidance & Tools',
    description: 'Top-tier assistance using the latest tech.',
    icon: '🛠️',
  },
  {
    title: '24/7 Support',
    description: 'Always here to solve your tech issues.',
    icon: '📞',
  },
  {
    title: 'Fast & Secure Hosting',
    description: 'Reliable hosting with 99.9% uptime.',
    icon: '🚀',
  },
  {
    title: 'SEO Optimization',
    description: 'Rank higher on search engines.',
    icon: '🔍',
  },
  {
    title: 'Custom Integrations',
    description:
      'Seamlessly connect with APIs, CRMs, and third-party tools. Enhance functionality tailored to your business needs.',
    icon: '🔗',
  },
];

const WhyChooseUs = () => {
  const [angle, setAngle] = useState(0);
  const radius = 300;
  const totalCards = cards.length;
  const anglePerCard = 360 / totalCards;

  const intervalRef = useRef(null);

  const rotateLeft = () => {
    setAngle((prev) => prev + anglePerCard);
    pauseAutoRotate();
  };

  const rotateRight = () => {
    setAngle((prev) => prev - anglePerCard);
    pauseAutoRotate();
  };

  const pauseAutoRotate = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setAngle((prev) => prev - anglePerCard);
    }, 3000);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setAngle((prev) => prev - anglePerCard);
    }, 3000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const normalizeAngle = (deg) => ((deg % 360) + 360) % 360;

  return (
    <div >
      <StarfieldFadeShadowUp />
    <div style={styles.wrapper} id="why-choose-us">
      <h2 style={styles.title}>Why Choose Us?</h2>
      <p style={styles.subtitle}>The Top Web Design & Development Firm in India!</p>

      <div style={styles.carouselOuter}>
        <button onClick={rotateLeft} style={styles.arrowLeft} className="modern-arrow">&#10094;</button>
        <button onClick={rotateRight} style={styles.arrowRight} className="modern-arrow">&#10095;</button>

        <div style={{ ...styles.carousel, transform: `rotateY(${angle}deg)` }}>
          {cards.map((card, index) => {
            const rotationY = anglePerCard * index;
            const relativeAngle = normalizeAngle(rotationY + angle);
            const isVisible = relativeAngle <= 90 || relativeAngle >= 270;
            const tilt = isVisible ? Math.sin((relativeAngle * Math.PI) / 180) * -10 : 0;

            return (
              
              <div
                key={index}
                className="carousel-card"
                style={{
                  ...styles.card,
                  transform: `
                    rotateY(${rotationY}deg)
                    translateZ(${radius}px)
                    rotateY(${tilt}deg)
                  `,
                  opacity: isVisible ? 1 : 0,
                  pointerEvents: isVisible ? 'auto' : 'none',
                  transition: 'transform 0.6s ease, opacity 0.5s ease',
                  backgroundColor: index % 2 === 0 ? '#1e1e2f' : '#101a2b',
                }}
              >
                <div className="card-inner" style={styles.cardInner}>
                  <div style={styles.icon}>{card.icon}</div>
                  <h5 style={styles.cardTitle}>{card.title}</h5>
                  <p style={styles.cardText}>{card.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>
        {`
          .carousel-card {
            transition: all 0.4s ease;
          }

          .card-inner {
            transition: transform 0.3s ease;
          }
               .carousel-card:hover{
               border: 2px solid white
               }

        .card-inner:hover {
            transform: scale(1.12);
            z-index: 999;
          }

          .modern-arrow {
            backdrop-filter: blur(10px);
            background: rgba(255, 255, 255, 0.08);
            border: 1px solid rgba(255, 255, 255, 0.2);
            color: #fff;
            font-size: 2.2rem;
            border-radius: 50%;
            width: 52px;
            height: 52px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 0 12px rgba(255, 255, 255, 0.15);
          }

          .modern-arrow:hover {
            transform: scale(1.2);
            background: rgba(255, 255, 255, 0.2);
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
          }
        `}
      </style>
    </div>
    <StarfieldFadeShadowDown />
 </div> );
};

const styles = {
  wrapper: {
    padding: '60px 20px',
    background: '#000',
    color: '#fff',
    textAlign: 'center',
    position: 'relative',
  },
  title: {
    fontSize: '2.5rem',
    color: 'rgb(85, 85, 204)',
    fontWeight: 700,
  },
  subtitle: {
    fontSize: '1rem',
    color: '#cbd5e1',
    marginBottom: '40px',
  },
  carouselOuter: {
    width: '100%',
    height: '400px',
    perspective: '1600px',
    overflow: 'hidden',
    position: 'relative',
  },
  carousel: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    transformStyle: 'preserve-3d',
    transition: 'transform 1s ease-in-out',
  },
  card: {
    width: '260px',
    height: '280px',
    position: 'absolute',
    left: 'calc(50% - 130px)',
    top: '40px',
    padding: '20px',
    borderRadius: '20px',
    boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
    color: '#fff',
    textAlign: 'center',
    backdropFilter: 'blur(4px)',
  },
  cardInner: {
    width: '100%',
    height: '100%',
  },
  icon: {
    fontSize: '3rem',
    marginBottom: '10px',
    color: '#facc15',
    textShadow: '0 0 10px rgba(250, 204, 21, 0.6)',
  },
  cardTitle: {
    fontSize: '1.2rem',
    marginBottom: '10px',
    fontWeight: '600',
  },
  cardText: {
    fontSize: '0.95rem',
    color: '#cbd5e1',
  },
  arrowLeft: {
    position: 'absolute',
    top: '50%',
    left: '300px',
    transform: 'translateY(-50%)',
    zIndex: 10,
  },
  arrowRight: {
    position: 'absolute',
    top: '50%',
    right: '300px',
    transform: 'translateY(-50%)',
    zIndex: 10,
  },
};

export default WhyChooseUs;
