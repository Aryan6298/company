import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import customimg from '../assets/customisation.png';
import standardimg from '../assets/final-standard-plan-img.png';
import premiumimg from '../assets/premium-quality.png';
import StarfieldFadeShadowDown from './StarfieldFadeShadowDown.tsx';
import StarfieldFadeShadowUp from './StarfieldFadeShadowUp.tsx';

const PricingSlider = () => {
  const allPlans = [
    {
      title: 'Standard Website Plan',
      price: '₹7,999',
      originalPrice: '₹10,000',
      gst: '₹1,440',
      image: standardimg,
      bg: 'linear-gradient(to right, #1e3a8a, #2563eb)',
      summary: [
        '5 Pages Dynamic Website',
        '1 Year Domain & Hosting',
        'Responsive & SEO Optimized',
        'Free SSL + 1 Email ID',
        'Live Chat & Payment Setup',
        '1 Year Tech Support',
      ],
    },
    {
      title: 'Premium Website Plan',
      tag: 'Popular',
      price: '₹13,999',
      originalPrice: '₹20,000',
      gst: '₹2,520',
      image: premiumimg,
      bg: '#111827',
      summary: [
        '12 Pages Website with Admin',
        'Free Domain & Hosting for 1 Year',
        'Google Search Console Setup',
        '2 Email IDs + SSL + Chat & Payment',
        'WooCommerce Features Included',
        '1 Year Tech Support',
      ],
    },
    {
      title: 'Custom Website Plan',
      price: '₹????',
      originalPrice: '₹????',
      gst: 'Applicable',
      image: customimg,
      bg: 'linear-gradient(to right, #1e3a8a, #2563eb)',
      summary: [
        'Pages as per Requirement',
        '1 Year Domain & Hosting',
        'Responsive & Dynamic Layout',
        'Custom Features + SEO Friendly',
        'Live Chat + WhatsApp & Inquiry',
        'Custom Pricing Based on Needs',
      ],
    },
    {
      title: 'Premium E-commerce Plan',
      price: '₹21,999',
      originalPrice: '₹30,000',
      gst: '₹3,960',
      image: standardimg,
      bg: '#111827',
      summary: [
        '30 Pages Ecommerce Website',
        '20 Categories, 30 Products',
        'Responsive & Premium Design',
        'Live Chat, Payment Gateway',
        'OTP Verification + Wallet System',
        'Auto Invoice + 1 Yr Support',
      ],
    },
    {
      title: 'Multi-vendor E-commerce Plan',
      tag: 'Popular',
      price: '₹50,000',
      originalPrice: '₹60,000',
      gst: '₹9,000',
      image: premiumimg,
      bg: 'linear-gradient(to right, #1e3a8a, #2563eb)',
      summary: [
        '40 Pages Multi-vendor Website',
        '50 Categories, 30 Listings',
        'Multi-level Vendor Features',
        'Payment, Wallet, OTP, Chat',
        '20 Email IDs + Auto Invoices',
        'Full Ecommerce Admin Panel',
      ],
    },
    {
      title: 'Custom Multi-vendor ',
      price: '₹????',
      originalPrice: '₹????',
      gst: 'Applicable',
      image: customimg,
      bg: '#111827',
      summary: [
        'Fully Tailored Vendor Platform',
        'Custom Categories & Listings',
        'Advanced Admin & Seller Tools',
        'Wallet + OTP + Invoice System',
        '20 Email IDs, SSL, SEO Ready',
        'Custom Pricing Based on Scope',
      ],
    },
    {
      title: 'Basic Logo Design',
      price: '₹2,599',
      originalPrice: '₹4,000',
      gst: '₹468',
      image: premiumimg,
      bg: 'linear-gradient(to right, #1e3a8a, #2563eb)',
      summary: [
        '2 Design Concepts',
        '1 Revision',
        'Delivery in PNG & JPG Format',
        'Suitable for Startups',
        '100% Ownership Rights',
        '3 Days Delivery Time',
      ],
    },
    {
      title: 'Standard Logo Package',
      price: '₹4,599',
      originalPrice: '₹6,000',
      gst: '₹828',
      image: standardimg,
      bg: '#111827',
      summary: [
        '4 Unique Logo Concepts',
        '3 Revisions',
        'High-Resolution Formats (PNG, PDF)',
        'Black & White Versions Included',
        'Brand Guidelines Mini Sheet',
        '5 Days Delivery Time',
      ],
    },
    {
      title: 'Premium Logo Identity Kit',
      tag: 'Popular',
      price: '₹9,999',
      originalPrice: '₹15,000',
      gst: '₹1,800',
      image: customimg,
      bg: 'linear-gradient(to right, #1e3a8a, #2563eb)',
      summary: [
        '6 Logo Concepts + Unlimited Revisions',
        'All Source Files (AI, PSD, SVG)',
        'Social Media Kit Included',
        'Stationery Design Addon',
        'Complete Brand Identity Guide',
        '7 Days Priority Delivery',
      ],
    },
    {
      title: 'Video Editing Services',
      price: '₹??',
      originalPrice: '₹??',
      gst: 'Depends',
      image: standardimg,
      bg: '#111827',
      summary: [
        'Add music, effects, or branding',
        'Video Restoration & Enhancement',
        'Convey a story/message clearly',
        'Batch Processing Available',
        'Optimized for Web ',
        'Pricing varies by complexity',
      ],
    },
    {
      title: 'SEO Sevice',
      price: '₹??',
      originalPrice: '₹??',
      gst: 'Depends',
      image: premiumimg,
      bg: 'linear-gradient(to right, #1e3a8a, #2563eb)',
      summary: [
        'On-page & Off-page Optimization',
        'Keyword Research & Planning',
        'Technical SEO Fixes',
        'Monthly Performance Reports',
        'Google Console & Analytics Setup',
        'Pricing depends on scope',
      ],
    },
    {
      title: 'App Development',
      tag: 'Popular',
      price: '₹??',
      originalPrice: '₹??',
      gst: 'Depends',
      image: customimg,
      bg: '#111827',
      summary: [
        'iOS & Android Native Apps',
        'Cross-Platform Flutter Apps',
        'Custom UI/UX Design',
        'Backend & API Integration',
        'Publishing & Support',
        'Pricing based on app scale',
      ],
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  const renderCards = (plans) =>
    plans.map((plan, index) => (
      <div key={index} className="px-2 d-flex justify-content-center">
        <div className="card text-white h-100 text-center p-4 d-flex flex-column position-relative" style={{ ...styles.card, background: plan.bg }}>
          {plan.tag === 'Popular' && (
            <div className="ribbon"><span>🔥 Popular</span></div>
          )}
          <img src={plan.image} alt={plan.title} style={styles.image} />
          <h5 className="badge bg-warning text-dark rounded-pill px-3 py-2 mt-3">{plan.title}</h5>
          <div className="mb-2">
            <p className="text-white-50 mb-1" style={{ fontSize: '14px' }}>
              <del>{plan.originalPrice}</del>
            </p>
            <h4 className="fw-bold text-info">{plan.price}</h4>
            <p className="text-white-50 small mb-2">(+ 18% GST {plan.gst})</p>
          </div>
          <ul className="text-start small text-white-50 px-3 mb-3 flex-grow-1">
            {plan.summary.map((line, i) => (
              <li key={i} style={styles.li}>✔ {line}</li>
            ))}
          </ul>
          <a href="/pricing" className="btn gradient-btn mt-auto">View Details</a>
        </div>
      </div>
    ));

  return (
    <section>
      <StarfieldFadeShadowUp />
      <div style={{ backgroundColor: '#000000', padding: '40px 0' }}>
        <div className="container">
          <h2 className=" text-center mb-4"  style={{color:'rgb(85, 85, 204)'}}>Value-Packed Plans Tailored to Your Needs</h2>
          <Slider {...settings}>{renderCards(allPlans)}</Slider>

          <style>{`
            .gradient-btn {
              background: linear-gradient(to right, #06b6d4, #3b82f6);
              border: none;
              color: white;
              font-weight: bold;
              transition: all 0.3s ease;
              border-radius: 8px;
            }
            .gradient-btn:hover {
              background: linear-gradient(to left, #06b6d4, #3b82f6);
              transform: scale(1.05);
              box-shadow: 0 0 12px #06b6d4;
            }
            .slick-dots li button:before {
              color: white;
            }
            .slick-prev:before, .slick-next:before {
              color: white;
            }
            .slick-center .card {
              border: 2px solid #22d3ee;
              box-shadow: 0 0 20px rgba(6, 182, 212, 0.5);
              transform: scale(1.03);
              z-index: 2;
            }
            .slick-center .badge {
              background: linear-gradient(to right, #06b6d4, #3b82f6) !important;
              color: white !important;
              
            }
            .ribbon {
              width: 120px;
              height: 120px;
              overflow: hidden;
              position: absolute;
              top: -10px;
              right: -10px;
              z-index: 3;
            }
            .ribbon span {
              position: absolute;
              display: block;
              width: 180px;
              padding: 6px 0;
              background: linear-gradient(to right, #f43f5e, #ec4899);
              color: white;
              font-size: 12px;
              font-weight: bold;
              text-align: center;
              transform: rotate(45deg);
              box-shadow: 0 0 10px rgba(255, 0, 70, 0.5);
              top: 25px;
              left: -45px;
              animation: fadeInRibbon 0.6s ease-in-out;
            }
            @keyframes fadeInRibbon {
              0% {
                opacity: 0;
                transform: rotate(45deg) scale(0.8);
              }
              100% {
                opacity: 1;
                transform: rotate(45deg) scale(1);
              }
            }

            @media (max-width: 991px) {
              .card {
                max-width: 100% !important;
                min-height: auto !important;
                padding: 20px !important;
              }
              .card img {
                height: 60px !important;
              }
              .card h5.badge {
                font-size: 14px !important;
                padding: 6px 12px !important;
              }
              .card ul {
                font-size: 12px !important;
                padding-left: 1rem !important;
              }
              .card .btn {
                font-size: 14px !important;
                padding: 8px 16px !important;
              }
            }

            @media (max-width: 575px) {
              .card {
                margin-bottom: 20px !important;
                width: 90% !important;
                
              }
              .card h4 {
                font-size: 18px !important;
              }
              .card ul li {
                font-size: 12px !important;
              }
                @media (max-width: 575px) {
  .slick-prev, .slick-next {
    top: auto;
    bottom: -10px;
    transform: translateY(0);
  }
  .slick-prev {
    left: 40%;
  }
  .slick-next {
    right: 40%;
  }
}

               
            }
          `}</style>
        </div>
      </div>
      <StarfieldFadeShadowDown />
    </section>
  );
};

const styles = {
  card: {
    width: '100%',
    maxWidth: '320px',
    minHeight: '550px',
    borderRadius: '16px',
    boxShadow: '0 10px 20px rgba(0,0,0,0.3)',
    transition: 'transform 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  image: {
    height: '80px',
    objectFit: 'contain',
    marginBottom: '10px',
  },
  li: {
    listStyle: 'none',
    marginBottom: '8px',
    fontSize: '13px',
  },
};

export default PricingSlider;
