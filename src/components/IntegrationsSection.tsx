import { useNavigate } from 'react-router-dom';
import React from 'react';
import StarfieldFadeShadowDown from './StarfieldFadeShadowDown.tsx';

const integrations = [
  { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
  { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
  { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { icon: 'https://assets.vercel.com/image/upload/front/favicon/vercel/152x152.png' },
];

const IntegrationsSection = () => {
  const ICON_COUNT = integrations.length;
  const [ellipse, setEllipse] = React.useState({ x: 320, y: 60 });
  const [angles, setAngles] = React.useState<number[]>(
    Array.from({ length: ICON_COUNT }, (_, i) => (360 / ICON_COUNT) * i)
  );


// Inside your component
const navigate = useNavigate();

const handleExploreClick = () => {
  navigate('/project-portfolio');
};

  React.useEffect(() => {
    setAngles(Array.from({ length: ICON_COUNT }, (_, i) => (360 / ICON_COUNT) * i));
  }, [ICON_COUNT]);

  React.useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      setEllipse({
        x: Math.max(180, Math.min(400, width / 2.5)),
        y: Math.max(120, Math.min(180, width / 6)),
      });
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  React.useEffect(() => {
    let start: number | null = null;
    let frame: number;
    function animate(now: number) {
      if (!start) start = now;
      const elapsed = (now - start) / 1000;
      const base = (elapsed / 18) * 360;
      setAngles(
        Array.from({ length: ICON_COUNT }, (_, i) => (360 / ICON_COUNT) * i + base)
      );
      frame = requestAnimationFrame(animate);
    }
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section>
      <div
        className="py-5"
        style={{
          position: 'relative',
          minHeight: 300,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0) 30%)',
          overflow: 'visible',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 200,
        }}
      >
        <div style={{ position: 'relative', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {/* Orbiting Logos */}
          <div style={{ position: 'absolute', left: '48%', top: '12%', width: 0, height: 0, zIndex: 1, transform: 'translate(-50%, -50%)', marginTop: -120 }}>
            {integrations.map((integration, i) => {
              const angle = angles[i] % 360;
              const rad = (angle * Math.PI) / 180;
              const x = ellipse.x * Math.cos(rad);
              const y = ellipse.y * Math.sin(rad);

              const headingY = 20;
              const fadeZone = 40;
              let opacity = 1;
              if (y > headingY) opacity = Math.max(0, 1 - (y - headingY) / fadeZone);

              return (
                <div
                  key={i}
                  style={{
                    position: 'absolute',
                    transform: `translate(${x}px, ${y}px)`,
                    opacity,
                  }}
                >
                  <div className="integration-icon">
                    <img src={integration.icon} alt="icon" style={{ width: 48, height: 48, objectFit: 'contain' }} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Heading */}
          <div style={{ position: 'relative', zIndex: 2, width: '100%', textAlign: 'center' }}>
            <h2 className="display-4 fw-bold text-white" style={{ textShadow: '0 2px 16px #000' }}>
              Tools We Use to Build <br /> Fast & Stunning Web Apps
            </h2>
            <p className="lead text-white-50 mb-4" style={{ maxWidth: 600, margin: '0 auto' }}>
              We combine industry-standard technologies and creative design tools to deliver world-class websites and web applications.
            </p>
            <button onClick={handleExploreClick}  className="btn btn-primary btn-lg px-4 mt-2" style={{ borderRadius: 10, fontWeight: 600 }}>
              Explore Technologies
            </button>
          </div>
        </div>

        <style>{`
          .integration-icon {
            width: 64px;
            height: 64px;
            background: #fff;
            border-radius: 50%;
            box-shadow: 0 4px 24px rgba(0,0,0,0.2);
            display: flex;
            align-items: center;
            justify-content: center;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .integration-icon:hover {
            transform: scale(1.1);
            box-shadow: 0 6px 32px rgba(0,0,0,0.3);
            z-index: 3;
          }
          @media (max-width: 768px) {
            .integration-icon {
              width: 35px !important;
              height: 35px !important;
              margin-left: -10px;
            }
            .integration-icon img {
              width: 20px;
              height: 20px;
            }
                 @media (max-width: 576px) {
            .display-4 {
              font-size: 1.8rem !important;
            }
            .lead {
              font-size: 1rem !important;
            }
            button.btn-lg {
              font-size: 1rem !important;
              padding: 0.6rem 1.2rem !important;
            }
          }
        
          }
        `}</style>
      </div>
      <StarfieldFadeShadowDown />
    </section>
  );
};

export default IntegrationsSection;
