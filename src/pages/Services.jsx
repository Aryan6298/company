import React from 'react';
import brandingImg from '../assets/service-business-listing.png';
import webImg from '../assets/service-web-dev.png';
import appImg from '../assets/service-app-dev.png';
import seoImg from '../assets/service-seo.png';
import contentImg from '../assets/service-product-branding.png';
import marketingImg from '../assets/service-graphic.png';
import StarfieldFadeShadowDown from '../components/StarfieldFadeShadowDown.tsx';
import StarfieldFadeShadowUp from '../components/StarfieldFadeShadowUp.tsx';
import { Link } from 'react-router-dom';

const Services = () => {
  const containerStyle = {
    padding: '3rem 5rem',
  backgroundColor: 'rgb(41, 41, 81)',
  };

  const rowStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1.5rem',
    justifyContent: 'center',
  };

  const colStyle = {
    flex: '1 1 calc(33.333% - 1rem)',
    minWidth: '280px',
  };

  const cardStyle = {
    position: 'relative',
    backgroundColor: '#fff7f7df',
    borderRadius: '12px',
    overflow: 'hidden',
    transition: 'all 0.4s ease',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    color: '#000',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  };

  const overlayStyle = {
    position: 'absolute',
    right: 0,
    top: '50%',
    transform: 'translateY(-50%)',
    width: '16px',
    height: '80%',
    backgroundColor: '#000',
    borderRadius: '12px 0 0 12px',
    transition: 'all 0.4s ease',
    zIndex: 1,
  };

  const imageStyle = {
    width: '100%',
    maxHeight: '250px',
    objectFit: 'contain',
    display: 'block',
    margin: '0 auto',
    transition: 'filter 0.4s ease',
    zIndex: 2,
    position: 'relative',
  };

  const contentStyle = {
    padding: '1.5rem',
    position: 'relative',
    zIndex: 2,
    transition: 'color 0.4s ease',
  };

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '3rem',
  };

  const buttonStyle = {
    padding: '0.8rem 2rem',
    backgroundColor: '#fff',
    color: '#000',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
  };

  const handleMouseEnter = (e) => {
    const card = e.currentTarget;
    const overlay = card.querySelector('.overlay');
    const img = card.querySelector('img');
    const h4 = card.querySelector('h4');
    const h6 = card.querySelector('h6');
    const lis = card.querySelectorAll('li');

    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.borderRadius = '12px';

    card.style.color = '#fff';
    if (img) img.style.filter = 'brightness(0.7)';
    if (h4) h4.style.color = '#fff';
    if (h6) h6.style.color = '#fff';
    lis.forEach(li => (li.style.color = '#fff'));
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    const overlay = card.querySelector('.overlay');
    const img = card.querySelector('img');
    const h4 = card.querySelector('h4');
    const h6 = card.querySelector('h6');
    const lis = card.querySelectorAll('li');

    overlay.style.width = '16px';
    overlay.style.height = '80%';
    overlay.style.borderRadius = '12px 0 0 12px';

    card.style.color = '#000';
    if (img) img.style.filter = 'brightness(1)';
    if (h4) h4.style.color = '#000';
    if (h6) h6.style.color = '#000';
    lis.forEach(li => (li.style.color = '#000'));
  };

  const cards = [
    {
      img: brandingImg,
      title: 'BUSINESS LISTING AND PROMOTION',
      subtitle: 'Get Found, Grow Fast',
      points: [
        'Google My Business setup and optimization',
        'Local and global business listings',
        'Directory listing for maximum visibility',
        'Online reputation management',
        'Review and citation building',
      ],
    },
    {
      img: webImg,
      title: 'WEBSITE DESIGN & DEVELOPMENT',
      subtitle: 'Custom, Responsive, Scalable',
      points: [
        'Custom website design',
        'Responsive web development',
        'E-commerce integration',
        'CMS implementation',
        'Maintenance and support',
      ],
    },
    {
      img: appImg,
      title: 'APP DESIGN & DEVELOPMENT',
      subtitle: 'iOS, Android, Cross-platform',
      points: [
        'UI/UX design',
        'Native and hybrid apps',
        'API integration',
        'App testing and QA',
        'Launch and post-launch support',
      ],
    },
    {
      img: seoImg,
      title: 'SEARCH ENGINE OPTIMIZATION (SEO)',
      subtitle: 'Improve Visibility, Drive Traffic',
      points: [
        'Keyword research and strategy',
        'On-page and off-page SEO',
        'Technical SEO audit',
        'Link building',
        'Performance tracking',
      ],
    },
    {
      img: contentImg,
      title: 'CONTENT WRITING & STRATEGY',
      subtitle: 'Engage, Inform, Convert',
      points: [
        'Blog and article writing',
        'Website content creation',
        'Social media content',
        'Copywriting',
        'Content planning and calendars',
      ],
    },
    {
      img: marketingImg,
      title: 'GRAPHIC DESIGN AND VIDEO EDITING',
      subtitle: 'Create, Edit, and Dominate',
      points: [
        'Logo Design',
        'Banner Design',
        'Social Media Design',
        'Video Editing',
        'UI/UX Design',
        'Brand Identity',
      ],
    },
  ];

  return (
    <section style={{ marginTop: '2rem' }}>
      <StarfieldFadeShadowUp />
      <div style={containerStyle}>
        <h1 align="center" style={{ color: 'white', paddingBottom: '2rem' }}>
          OUR SERVICES
        </h1>
        <div style={rowStyle}>
          {cards.map((card, idx) => (
            <div key={idx} style={colStyle}>
              <div
                className="service-card"
                style={cardStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="overlay" style={overlayStyle}></div>
                <img src={card.img} alt={card.title} style={imageStyle} />
                <div style={contentStyle}>
                  <h4>{card.title}</h4>
                  <h6>{card.subtitle}</h6>
                  <ul style={{ listStyle: 'none', paddingLeft: '1rem' }}>
                    {card.points.map((point, i) => (
                      <li key={i}>+ {point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Button to redirect to Pricing Page */}
        <div style={buttonContainerStyle}>
          <Link to="/pricing" style={buttonStyle} onMouseEnter={e => {
            e.target.style.backgroundColor = '#000';
            e.target.style.color = '#fff';
          }} onMouseLeave={e => {
            e.target.style.backgroundColor = '#fff';
            e.target.style.color = '#000';
          }}>
            View Our Pricing →
          </Link>
        </div>
      </div>
      <StarfieldFadeShadowDown />
    </section>
  );
};

export default Services;
