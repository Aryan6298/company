import React, { useEffect, useState, useRef } from 'react';

const stats = [
  {
    label: '30+ Technologies',
    desc: 'Expertise across modern web technologies and tools.',
    target: 30,
    prefix: '',
    suffix: '+',
    duration: 3000,
    icon: '🛠️',
  },

  {
    label: '99% Client Satisfaction',
    desc: 'Delivering reliable, scalable digital solutions.',
    target: 99,
    prefix: '',
    suffix: '%',
    duration: 3000,
    icon: '👍',
  },
 
  {
    label: '20+ Projects',
    desc: 'Websites & web apps crafted for clients worldwide.',
    target: 20,
    prefix: '',
    suffix: '+',
    duration: 3000,
    icon: '🌐',
  },
];

function useCountUp(target: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startVal = 0;
    const increment = target / (duration / 16);
    let frame: number;
    function animate() {
      startVal += increment;
      if (startVal < target) {
        setCount(Math.floor(startVal));
        frame = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    }
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [target, duration, start]);
  return count;
}

const OurReach: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // ✅ Hook calls in fixed order
  const count1 = useCountUp(stats[0].target, stats[0].duration, inView);
  const count2 = useCountUp(stats[1].target, stats[1].duration, inView);
  const count3 = useCountUp(stats[2].target, stats[2].duration, inView);
  const counts = [count1, count2, count3];

  return (
    <section
      ref={sectionRef}
      className={`our-reach-section py-5 d-flex justify-content-center align-items-center ${
        inView ? 'fade-in' : ''
      }`}
      style={{ minHeight: 200, background: 'transparent' }}
    >
      <style>{`
        .our-reach-section {
          background: transparent;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 2.5rem;
        }
        .fade-in {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 1.2s cubic-bezier(.4,1,.4,1), transform 1.2s cubic-bezier(.4,1,.4,1);
        }
        .our-reach-section:not(.fade-in) {
          opacity: 0;
          transform: translateY(60px);
        }
        .our-reach-card {
          background: rgba(24, 28, 40, 0.3);
          border-radius: 1.5rem;
          box-shadow: 0 8px 32px 0 #2563eb33, 0 0 24px 0 #2563eb44;
          padding: 2.5rem 2.2rem 2.2rem 2.2rem;
          min-width: 280px;
          max-width: 340px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-bottom: 2rem;
          transition: box-shadow 0.3s, transform 0.3s;
          border: 1.5px solid rgba(255,255,255,0.08);
          position: relative;
          overflow: hidden;
        }
        .our-reach-card:hover {
          box-shadow: 0 12px 40px 0 #2563eb99, 0 0 64px 0 #2563eb55;
          transform: scale(1.045) translateY(-6px);
        }
        .our-reach-icon {
          font-size: 2.5rem;
          margin-bottom: 1.1rem;
          color: #6ea8fe;
          filter: drop-shadow(0 0 12px #2563eb88);
          animation: icon-pop 1.2s cubic-bezier(.4,1,.4,1);
        }
        @keyframes icon-pop {
          0% { transform: scale(0.7); opacity: 0; }
          60% { transform: scale(1.2); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        .our-reach-count {
          font-family: 'Instrument Serif', serif;
          font-size: 2.8rem;
          font-weight: 600;
          color: #fff;
          margin-bottom: 1.1rem;
          letter-spacing: 1px;
          text-shadow: 0 2px 16px #000a1a99;
        }
        .our-reach-desc {
          color: #e0e2ed;
          font-size: 1.18rem;
          font-weight: 400;
        }
        .our-reach-card::after {
          content: '';
          position: absolute;
          left: 50%;
          top: 50%;
          width: 180%;
          height: 180%;
          background: radial-gradient(circle, #2563eb22 0%, transparent 70%);
          transform: translate(-50%, -50%);
          z-index: 0;
          pointer-events: none;
        }
        @media (max-width: 991px) {
          .our-reach-section {
            flex-direction: column;
            gap: 2rem;
          }
          .our-reach-card {
            min-width: 220px;
            max-width: 100vw;
          }
        }
      `}</style>

      {stats.map((stat, idx) => (
        <div className="our-reach-card shadow-lg" key={stat.label}>
          <span className="our-reach-icon" role="img" aria-label={stat.label}>{stat.icon}</span>
          <div className="our-reach-count">
            {stat.prefix}
            {stat.suffix === '%' ? counts[idx] : counts[idx].toLocaleString()}
            {stat.suffix}
          </div>
          <div className="our-reach-desc">{stat.desc}</div>
        </div>
      ))}
    </section>
  );
};

export default OurReach;
