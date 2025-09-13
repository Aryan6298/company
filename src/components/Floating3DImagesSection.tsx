import React, { useEffect, useRef, useState } from 'react';
import img001 from '../assets/card01-seo.png';
import img002 from '../assets/card02-web.png';
import img003 from '../assets/card03-web.png';

const cardTransforms = [
  'skewY(8deg) rotateY(-18deg) scale(0.92) translateX(-40px)',
  'skewY(8deg) rotateY(-18deg) scale(0.92) translateX(-40px)',
  'skewY(8deg) rotateY(-18deg) scale(0.92) translateX(-40px)',
];

const Floating3DImageCard = ({
  image,
  index,
  hovered,
  setHovered,
}: {
  image: string;
  index: number;
  hovered: number | null;
  setHovered: (idx: number | null) => void;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    if (hovered === index) {
      card.style.transform = 'scale(1.12) rotateY(-10deg) skewY(4deg) translateY(-20px)';
      card.style.boxShadow = '0 8px 40px 0 #2563eb99, 0 0 64px 0 #2563eb44';
      card.style.border = '2px solid #2563eb';
      card.style.zIndex = '10';
      card.style.transition = 'transform 0.35s cubic-bezier(.21,1.02,.73,1), box-shadow 0.25s, border 0.25s, z-index 0.25s';
    } else {
      card.style.transform = cardTransforms[index];
      card.style.boxShadow = '0 4px 32px 0 #2563eb33, 0 0 48px 0 #2563eb22';
      card.style.border = '1px solid rgba(255,255,255,0.06)';
      card.style.zIndex = '1';
      card.style.transition = 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s, border 0.25s, z-index 0.25s';
    }
  }, [hovered, index]);

  return (
    <div
      className="floating-3d-image-card"
      ref={cardRef}
      style={{
        width: '90%',
        maxWidth: 320,
        height: 'auto',
        aspectRatio: '4 / 5',
        borderRadius: '2rem',
        background: 'rgba(36, 58, 99, 0.13)',
        backdropFilter: 'blur(32px)',
        WebkitBackdropFilter: 'blur(32px)',
        overflow: 'hidden',
        position: 'relative',
        margin: '0.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        willChange: 'transform, box-shadow',
        cursor: 'pointer',
        perspective: 800,
        outline: 'none',
        animation: 'float 6s ease-in-out infinite',
      }}
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
    >
      <img
        src={image}
        alt=""
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          borderRadius: '2rem',
          maskImage: 'linear-gradient(to right, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 100%)',
          WebkitMaskImage: 'linear-gradient(to right, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 100%)',
        }}
      />
    </div>
  );
};

const Floating3DImagesSection: React.FC = () => {
  const images = [img001, img002, img003];
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      className="floating-3d-images-section"
      style={{
        padding: '6rem 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        className="floating-3d-images-container d-flex justify-content-center align-items-end flex-wrap"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-end',
          flexWrap: 'wrap',
          gap: '1rem',
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 1rem',
          position: 'relative',
          height: 'auto',
        }}
      >
        {images.map((src, index) => (
          <Floating3DImageCard
            key={index}
            image={src}
            index={index}
            hovered={hovered}
            setHovered={setHovered}
          />
        ))}
      </div>
    </section>
  );
};

export default Floating3DImagesSection;
