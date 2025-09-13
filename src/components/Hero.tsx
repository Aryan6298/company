import React, { useState } from 'react';
import img001 from '../assets/img001.webp';
import { backIn, color, motion, Variants } from 'framer-motion';
import Floating3DImagesSection from './Floating3DImagesSection.tsx';

const gradientText = {
  background: 'linear-gradient(130deg, #fff, #bfc9d8 40%, #2563eb 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  color: 'transparent',
  display: 'inline-block',
};

const heroSubtitle = {
  color: '#bfc9d8',
  fontSize: '1.25rem',
  fontWeight: 400,
  marginBottom: '2.5rem',
  maxWidth: 700,
  marginLeft: 'auto',
  marginRight: 'auto',
  fontFamily: 'Inter, sans-serif',
};

const heroRatingBar = {
  fontSize: '1.2rem',
  color: '#fff',
  marginBottom: '2rem',
  fontFamily: 'Inter, sans-serif',
};

const heroStar = {
  color: '#ffe066',
  fontSize: '1.3em',
  verticalAlign: 'middle',
};

const heroRatingText = {
  color: '#fff',
  fontSize: '1.1em',
  verticalAlign: 'middle',
};

// --- Cosmic-themed buttons --- //
const baseBtnStyle = {
  border: "none",
  fontWeight: 700,
  fontSize: "1.1rem",
  padding: "0.8em 2.5em",
  borderRadius: "50px",
  cursor: "pointer",
  textDecoration: "none",
  transition: "all 0.3s ease",
  display: "inline-block",
  position: "relative" as const,
  overflow: "hidden",
  fontFamily: "Inter, sans-serif",
};

// Services Button (galaxy gradient)
const featuresBtnStyle = {
  ...baseBtnStyle,
  background: "linear-gradient(135deg, #3b82f6, #9333ea)", // blue → purple
  color: "#fff",

};

const featuresBtnHoverStyle = {
  ...featuresBtnStyle,
  transform: "scale(1.05)",
  boxShadow: "0 0 30px rgba(147, 51, 234, 0.8)",
  color: "#3b82f6",
  background: "linear-gradient(135deg, #d6dce6ff, #cdd5e3ff )", // darker blue → darker purple
};

// Quote Button (nebula gradient)
const pricingBtnStyle = {
  ...baseBtnStyle,
  background: "linear-gradient(135deg, white, white)", // gold → red
  color: "black",

};

const pricingBtnHoverStyle = {
  ...pricingBtnStyle,
  transform: "scale(1.05)",
  boxShadow: "0 0 30px rgba(237, 237, 237, 0.8)",
  color: "white",
  background: "linear-gradient(135deg, black, black)",
};

const heroImageList = [
  { src: img001, alt: 'Photo Editing' },
  { src: img001, alt: 'App & Web Development' },
  { src: img001, alt: 'SEO & Branding' },
];

const heroImageCardBaseStyle = {
  position: 'relative' as const,
  width: 200,
  height: 200,
  borderRadius: 20,
  overflow: 'hidden' as const,
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  cursor: 'pointer',
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const heroImageStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover' as const,
  transition: 'transform 0.4s ease',
};

const HeroImageList: React.FC = () => {
  const [tilt, setTilt] = useState([
    { rotateX: 0, rotateY: 0, scale: 1 },
    { rotateX: 0, rotateY: 0, scale: 1 },
    { rotateX: 0, rotateY: 0, scale: 1 },
  ]);

  const handleMouseMove = (index: number, e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 15;
    const rotateY = ((x - centerX) / centerX) * 20;
    setTilt(prev =>
      prev.map((t, i) => (i === index ? { rotateX: -rotateX, rotateY, scale: 1.05 } : t))
    );
  };

  const handleMouseLeave = (index: number) => {
    setTilt(prev =>
      prev.map((t, i) => (i === index ? { rotateX: 0, rotateY: 0, scale: 1 } : t))
    );
  };

  return (
    <div
      className="hero-image-list d-flex justify-content-center align-items-center"
      style={{
        gap: '2rem',
        margin: '2rem auto',
        maxWidth: 1200,
        position: 'relative',
        zIndex: 10,
      }}
    >
      {heroImageList.map((img, idx) => (
        <div
          key={img.alt}
          style={{
            ...heroImageCardBaseStyle,
            transform: `perspective(800px) rotateX(${tilt[idx].rotateX}deg) rotateY(${tilt[idx].rotateY}deg) scale(${tilt[idx].scale})`,
            borderColor:
              tilt[idx].scale > 1 ? 'rgba(37, 99, 235, 0.5)' : 'rgba(255, 255, 255, 0.2)',
            boxShadow:
              tilt[idx].scale > 1
                ? '0 20px 40px rgba(0, 0, 0, 0.4)'
                : '0 8px 32px rgba(0, 0, 0, 0.3)',
          }}
          onMouseMove={e => handleMouseMove(idx, e)}
          onMouseLeave={() => handleMouseLeave(idx)}
        >
          <img src={img.src} alt={img.alt} style={heroImageStyle} />
        </div>
      ))}
    </div>
  );
};

const AnimatedHeadingWord = ({ word }: { word: string }) => {
  return (
    <span style={{ display: 'inline-block' }}>
      {word.split('').map((char, i) => (
        <motion.span
          key={i}
          style={{
            display: 'inline-block',
            marginRight: '1px',
            background: 'linear-gradient(130deg, #fff, #bfc9d8 40%, #2563eb 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            color: 'transparent',
          }}
          animate={{
            opacity: [1, 1, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.1,
          }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
};

// Animate paragraph letter-by-letter
const paragraphText = `We build your online presence through modern websites, stunning logos, app development, SEO, and Google profile management.`;

const letterVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.02,
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

const AnimatedParagraph = () => (
  <motion.p
    className="mb-5"
    style={heroSubtitle}
    initial="hidden"
    animate="visible"
  >
    {paragraphText.split('').map((char, index) => (
      <motion.span
        key={index}
        custom={index}
        variants={letterVariants}
        initial="hidden"
        animate="visible"
        style={{ display: 'inline-block' }}
      >
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    ))}
  </motion.p>
);

const Hero: React.FC = () => {
  const [pricingHover, setPricingHover] = useState(false);
  const [featuresHover, setFeaturesHover] = useState(false);

  return (
    <section
      className="d-flex flex-column align-items-center justify-content-center text-center"
      style={{
        minHeight: '50vh',
        position: 'relative',
        zIndex: 2,
        marginTop: 70,
        background: 'transparent',
        paddingTop: 100,
      }}
    >
      <div className="d-flex align-items-center justify-content-center mb-4" style={heroRatingBar}>
        <span role="img" aria-label="star" style={heroStar}>
          ★
        </span>
        <span className="ms-2" style={heroRatingText}>
          <b>4.9/5.0</b> on google.com
        </span>
      </div>
      <h1
        className="display-1 fw-bold"
        style={{
          fontFamily: 'var(--font-family--heading)',
          fontSize: '4.5rem',
          fontWeight: 400,
          lineHeight: 1.2,
          marginBottom: 0,
        }}
      >
        <span style={gradientText}>Grow</span>{' '}
        <span style={gradientText}>your</span>{' '}
        <span style={gradientText}>brand</span>
        <br />
        <span style={gradientText}>with</span>{' '}
        <span style={gradientText}>
          <AnimatedHeadingWord word="Creative Digital Solutions" />
        </span>
      </h1>
      <AnimatedParagraph />
      <div className="d-flex justify-content-center gap-4" style={{ background: 'transparent' }}>
        <a
          href="/services"
          style={featuresHover ? featuresBtnHoverStyle : featuresBtnStyle}
          onMouseEnter={() => setFeaturesHover(true)}
          onMouseLeave={() => setFeaturesHover(false)}
        >
          Our Services
        </a>
        <a
          href="/contact"
          style={pricingHover ? pricingBtnHoverStyle : pricingBtnStyle}
          onMouseEnter={() => setPricingHover(true)}
          onMouseLeave={() => setPricingHover(false)}
        >
          Get a Quote
        </a>
      </div>
      <Floating3DImagesSection />
    </section>
  );
};

export default Hero;
