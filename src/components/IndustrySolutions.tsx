import React from 'react';
import img1 from '../assets/img-1.webp';
import img2 from '../assets/img-2.svg';
import img3 from '../assets/img-3.svg';

const leftCardImages = [
  {
    src: img1,
    alt: 'Shoes Card',
    style: { width: 280, height: 250, transform: 'rotate(10deg) scale(1.05)', zIndex: 1, borderRadius: '18px', boxShadow: '0 4px 16px 0 #000a1a33', marginBottom: '0.3rem', position: 'relative', display: 'block', marginLeft: '0px', marginTop: '0px' },
  },
  {
    src: img2,
    alt: 'AutoAI Card',
    style: { width: 280, height: 270, transform: 'rotate(-10deg) scale(1.03)', zIndex: 2, borderRadius: '18px', boxShadow: '0 4px 16px 0 #000a1a33',
       marginTop: '-275px', marginLeft: '200px', marginBottom: '0.3rem', position: 'relative', display: 'block' },
  },
  {
    src: img3,
    alt: 'Prompt Card',
    style: { width: 260, height: 320, transform: 'rotate(-25deg) scale(0.98)', zIndex: 3, borderRadius: '18px', boxShadow: '0 4px 16px 0 #000a1a33',
       marginTop: '-120px', marginLeft: '40px', position: 'relative', display: 'block' },
  },
];

const IndustrySolutions: React.FC = () => {
  const [visibleImages, setVisibleImages] = React.useState<number[]>([]);

  // Slower animation: increase delay and transition duration
  React.useEffect(() => {
    let timeouts: NodeJS.Timeout[] = [];
    leftCardImages.forEach((_, idx) => {
      timeouts.push(
        setTimeout(() => {
          setVisibleImages((prev) => [...prev, idx]);
        }, idx * 1400)
      );
    });
    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <section className="industry-solutions-section">
      <style>{`
        .industry-solutions-section {
          width: 100%;
          min-height: 800px;
          display: flex;
          align-items: center;
          justify-content: center;
          background:rgb(1, 4, 15);
          padding: 0;
        
          margin: 3rem auto 0 auto;
          padding-top: 2rem;
        }
        .industry-solutions-inner {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          gap: 7rem;
          width: 100%;
          max-width: 1200px;
        }
        .industry-left-col {
          flex: 0 0 auto;
          min-width: 220px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
        }
        .industry-img-card {
          opacity: 0;
        }
        .industry-img-card.visible {
          opacity: 1;
        }
        .industry-right-col {
          flex: 1 1 0%;
          min-width: 320px;
          max-width: 620px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          margin-left: 12rem;
          margin-top: -2rem;
        }
        .industry-get-started-btn {
           position: relative;
           background: linear-gradient(to bottom, #fff 0%, #fff 100%);
           color: #181b24;
           border: none;
           border-radius: 10px;
           padding: 0.9rem 2.2rem;
           font-weight: 600;
           font-size: 1.1rem;
           cursor: pointer;
           box-shadow: 0 2px 8px 0 #000a1a22;
           margin-top: 32px;
           overflow: hidden;
           z-index: 1;
           transition: color 0.7s;
        }
        .industry-get-started-btn::before {
           content: '';
           position: absolute;
           top: 0; left: 0; right: 0; bottom: 0;
           border-radius: 10px;
           background: linear-gradient(to bottom, #4f8cff 0%, #eaeef7 100%);
           opacity: 0;
           transition: opacity 0.7s;
           z-index: 0;
        }
        .industry-get-started-btn:hover::before {
           opacity: 1;
        }
        .industry-get-started-btn span, .industry-get-started-btn {
           position: relative;
           z-index: 1;
        }
        .industry-get-started-btn:hover {
           color: #181b24;
        }
        @media (max-width: 1100px) {
          .industry-solutions-inner {
            flex-direction: column;
            align-items: center;
            gap: 2rem;
          }
          .industry-left-col {
            flex-direction: row;
            min-width: 0;
            margin-bottom: 2.5rem;
            align-items: center;
            justify-content: center;
          }
          .industry-right-col {
            min-width: 0;
            max-width: 100vw;
          }
        }
      `}</style>
      <div className="industry-solutions-inner">
        <div className="industry-left-col" style={{ position: 'relative', minHeight: 400 }}>
          {leftCardImages.map((img, idx) => {
            const isVisible = visibleImages.includes(idx);
            return (
              <img
                key={img.alt}
                src={img.src}
                alt={img.alt}
                className={`industry-img-card${isVisible ? ' visible' : ''}`}
                style={{
                  ...img.style,
                  position: 'absolute',
                  left: img.style.marginLeft || 0,
                  bottom: isVisible ? (img.style.marginTop || 0) : 0,
                  zIndex: img.style.zIndex,
                  transition: 'bottom 2.2s cubic-bezier(.4,1,.4,1), opacity 2.2s cubic-bezier(.4,1,.4,1), transform 2.2s cubic-bezier(.4,1,.4,1)',
                } as React.CSSProperties}
              />
            );
          })}
        </div>
        <div className="industry-right-col">
          <h2 style={{ fontSize: '2.6rem', fontWeight: 400, marginBottom: '2rem', color: '#fff', lineHeight: 1.1, fontFamily: 'var(--font-family--heading), serif' }}>
            AI-Powered solutions for<br />every industry
          </h2>
          <Accordion />
        </div>
      </div>
    </section>
  );
};

const accordionData = [
  {
    title: 'E-Commerce automation',
    content: 'Automate product recommendations, sentiment analysis, and customer support to boost sales and engagement.',
  },
  {
    title: 'Financial data processing',
    content: 'Our platform automates and secures financial transactions, ensuring accuracy and efficiency.',
  },
  {
    title: 'Healthcare data management',
    content: 'We streamline the storage, security, and accessibility of medical records for better healthcare operations.',
  },
];

function Accordion() {
  const [openIndex, setOpenIndex] = React.useState(0);
  return (
    <div style={{ width: '100%', background: 'none', color: '#fff', borderRadius: 8 }}>
      {accordionData.map((item, idx) => (
        <div key={item.title} style={{ borderBottom: '1px solid #333', marginBottom: 0 }}>
          <div
            onClick={() => setOpenIndex(idx === openIndex ? -1 : idx)}
            style={{
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '1.25rem',
              padding: '1.1rem 0 0 0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              userSelect: 'none',
            }}
          >
            {item.title}
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: 8,
                transition: 'transform 0.7s',
                transform: openIndex === idx ? 'rotate(180deg)' : 'rotate(0deg)',
              }}
            >
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polyline points="8,20 16,12 24,20" stroke="#bfc6d1" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </span>
          </div>
          <div
            style={{
              maxHeight: openIndex === idx ? 200 : 0,
              opacity: openIndex === idx ? 1 : 0,
              overflow: 'hidden',
              transition: 'max-height 0.5s cubic-bezier(.4,1,.4,1), opacity 0.4s',
              marginBottom: openIndex === idx ? '1.2rem' : 0,
            }}
          >
            <div style={{ fontSize: '1.05rem', color: '#bfc6d1', margin: '0.5rem 0 1.2rem 0', lineHeight: 1.6, display: item.content ? 'block' : 'none' }}>
              {item.content}
            </div>
          </div>
        </div>
      ))}
      <button
        className="industry-get-started-btn"
      >
        <span>Get started now</span>
      </button>
    </div>
  );
}

export default IndustrySolutions; 