import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    quote: "  [{KAP Developer}] transformed our outdated site into a sleek, modern platform that boosted our sales. Truly impressed with their speed and professionalism.",
    name: "Neha Verma",
    role: "E-commerce Business Owner",
    initials: "NV"
  },
  {
    quote: "The team delivered a fully responsive portfolio site that not only looks great but also loads incredibly fast. Amazing attention to detail!",
    name: "Rishi Tiwari",
    role: "Photographer",
    initials: "RT"
  },
  {
    quote: "They built us a custom web dashboard with real-time features. It's smooth, intuitive, and exactly what we needed for managing our clients.",
    name: "Aarav Mehta",
    role: "Startup Founder",
    initials: "AM"
  }
];

const BootstrapTestimonialSection = () => {
  useEffect(() => {
    const initCarousel = async () => {
      if (typeof window !== 'undefined') {
        const bootstrap = await import('bootstrap/dist/js/bootstrap.bundle.min.js');
        const carousel = document.getElementById('testimonialCarousel');
        if (carousel && bootstrap.Carousel) {
          new bootstrap.Carousel(carousel, {
            interval: 5000,
            ride: 'carousel',
            wrap: true
          });
        }
      }
    };
    initCarousel();
  }, []);

  return (
    <motion.section 
      className="container py-5 d-flex flex-column align-items-center justify-content-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
    <style>{`
      .testimonial-section {
        background: rgba(0, 0, 0, 0.8);
        border: 1px solid rgb(255,255,255);
        color: #f1f5f9;
   

      }

      .testimonial-initials {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        font-size: 22px;
        font-weight: bold;
        background: linear-gradient(135deg, #0ea5e9, #3b82f6);
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 0 15px rgba(59, 130, 246, 0.4);
      }

      .testimonial-quote {
        font-size: 1.2rem;
        line-height: 1.8;
        color: #e2e8f0;
        text-align: center;
        position: relative;
      }

      .quote-icon {
        position: absolute;
        top: -20px;
        left: -20px;
        color: rgba(255, 255, 255, 0.05);
        font-size: 5rem;
        z-index: -1;
      }

      .testimonial-name {
        color: #38bdf8;
        font-weight: 700;
        margin: 0;
      }

      .testimonial-role {
        color: #67e8f9;
        font-size: 0.95rem;
      }

      .carousel-control-prev,
      .carousel-control-next {
        width: 40px;
        height: 40px;
        background: #0ea5e9;
        border-radius: 50%;
        top: 50%;
        transform: translateY(-50%);
        border: 2px solid #38bdf8;
        box-shadow: 0 0 10px rgba(14, 165, 233, 0.5);
      }

      .carousel-control-prev-icon,
      .carousel-control-next-icon {
        filter: invert(100%) sepia(100%) saturate(300%) hue-rotate(180deg);
      }

      .review-btn {
        background: linear-gradient(to right, #0ea5e9, #38bdf8);
        border: none;
        padding: 0.8rem 2rem;
        font-weight: 600;
        color: #0f172a;
        border-radius: 50px;
        transition: 0.3s ease;
      }

      .review-btn:hover {
        background: linear-gradient(to right, #0369a1, #0ea5e9);
        transform: translateY(-2px);
        color: white;
      }

      .section-title {
        position: relative;
        color: #6366f1;
        font-weight: 700;
        padding-bottom: 15px;
        text-align: center;
      }

      .section-title::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 100px;
        height: 3px;
        background: #a78bfa;
        border-radius: 2px;
      }

      @media (max-width: 767.98px) {
        .testimonial-initials {
          width: 60px;
          height: 60px;
          font-size: 18px;
        }
        .testimonial-quote {
          font-size: 1rem;
          padding: 0 1rem;
        }
        .quote-icon {
          font-size: 3rem;
        }
      }
    `}</style>

    <motion.div 
      className="testimonial-section rounded-4 shadow-lg p-4 p-md-5 w-100"
      style={{ maxWidth: '800px' }}
      initial={{ scale: 0.95 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="text-center mb-4">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          What People Say About Us
        </motion.h2>
      </div>

      <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {testimonials.map((t, i) => (
            <div className={`carousel-item${i === 0 ? ' active' : ''}`} key={i}>
              <div className="d-flex flex-column align-items-center">
                <motion.div className="testimonial-initials mb-4" whileHover={{ scale: 1.05 }}>
                  {t.initials}
                </motion.div>
                <div className="position-relative mb-4">
                  <FaQuoteLeft className="quote-icon" />
                  <blockquote className="testimonial-quote px-md-4">{t.quote}</blockquote>
                </div>
                <p className="testimonial-name mb-1">{t.name}</p>
                <p className="testimonial-role mb-0">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <motion.div className="text-center mt-5" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <p className="mb-3" style={{ color: '#cbd5e1' }}>
          Loved our work? Share your experience and help others find quality web solutions!
        </p>
        <a
          href="https://www.google.com/search?q=Flown+Developer+Reviews"
          target="_blank"
          rel="noopener noreferrer"
          className="btn review-btn"
        >
          Leave your Review
        </a>
      </motion.div>
    </motion.div>
  </motion.section>
  );
};

export default BootstrapTestimonialSection;
