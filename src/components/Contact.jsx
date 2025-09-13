import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import img1 from '../assets/contact-img.jpg';
import StarfieldFadeShadowUp from './StarfieldFadeShadowUp.tsx';
import StarfieldFadeShadowDown from './StarfieldFadeShadowDown.tsx';

const ContactFormSection = () => {
  const [countryCode, setCountryCode] = useState('+91');
  const [phoneNumber, setPhoneNumber] = useState('');

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handlePhoneChange = (e) => {
    const numeric = e.target.value.replace(/\D/g, '');
    setPhoneNumber(numeric);
  };

  return (
    <section className='overflow-hidden' data-aos="fade-up">
      <StarfieldFadeShadowUp />
      <div className="contact-section py-5 text-white">
        <style>{`
          .contact-section {
            background-color: #000;
          }
          .contact-box {
            background: radial-gradient(circle at top left, #111827, #0f172a);
            border-radius: 1.25rem;
            padding: 2.5rem;
            color: #fff;
            box-shadow: 0 0 40px 10px rgba(2, 65, 255, 0.4);
            backdrop-filter: blur(10px);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .contact-box:hover {
            transform: translateY(-5px);
            box-shadow: 0 0 60px 20px rgba(2, 132, 199, 0.5);
          }
          .contact-box input,
          .contact-box textarea {
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid #3b82f6;
            border-radius: 0.5rem;
            color: white;
            transition: all 0.3s ease;
          }
          .contact-box input::placeholder,
          .contact-box textarea::placeholder {
            color: #9ca3af;
          }
          .contact-box input:focus,
          .contact-box textarea:focus {
            background: #0f172a;
            border-color: #60a5fa;
            box-shadow: 0 0 0 0.3rem rgba(96, 165, 250, 0.25);
            color: white;
          }
          .contact-btn {
            background: linear-gradient(to right, #3b82f6, #2563eb);
            color: white;
            font-weight: 600;
            border: none;
            width: 100%;
            border-radius: 0.5rem;
            padding: 0.75rem;
            transition: all 0.3s ease;
          }
          .contact-btn:hover {
            background: linear-gradient(to right, #2563eb, #1d4ed8);
            transform: scale(1.03);
            box-shadow: 0 0 10px #2563eb;
          }
          @media (max-width: 767px) {
            .contact-box {
              padding: 1.5rem;
            }
          }
        `}</style>

        <div className="container">
          <div className="row align-items-center g-5">
            {/* Form Section */}
            <div className="col-md-6" data-aos="fade-right">
              <div className="contact-box">
                <h3 className="fw-bold mb-1">🚀 Submit Your Query</h3>
                <p className="text-white mb-4">We’ll get back to you as soon as possible</p>
                <form autoComplete="on">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Name"
                        name="name"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Your E-mail"
                        name="email"
                        required
                      />
                    </div>

                    {/* Editable Phone Section */}
                    <div className="col-md-6 d-flex gap-2">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="+91"
                        name="countryCode"
                        value={countryCode}
                        onChange={(e) => setCountryCode(e.target.value)}
                        style={{ flex: '0 0 40%' }}
                        required
                      />
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="9876543210"
                        name="phone"
                        value={phoneNumber}
                        onChange={handlePhoneChange}
                        pattern="[0-9]{7,14}"
                        title="Enter a valid phone number (7–14 digits)"
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Subject"
                        name="subject"
                        required
                      />
                    </div>

                    <div className="col-12">
                      <textarea
                        className="form-control"
                        rows="4"
                        placeholder="Message"
                        name="message"
                        required
                      ></textarea>
                    </div>

                    <div className="col-12 pt-5">
                      <button type="submit" className="btn contact-btn">
                        Send Your Message
                      </button>
                    </div>
                  </div>
                </form>

                <div className="contact-info mt-4">
                  <p>📞 <a href="tel:+916266039350" className="text-info">+91-XXXXXXXXXX</a></p>
                  <p>📩 <a href="mailto:yo@gmail.com" className="text-info">yo@gmail.com</a></p>
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div className="col-md-6 text-center" data-aos="fade-left">
              <h5 className="fw-semibold mb-2 text-white-50">We are available 24x7 for you!</h5>
              <h3 className="fw-bold text-primary mb-4">Contact Us</h3>
              <img
                src={img1}
                alt="Support Illustration"
                className="img-fluid"
                style={{ maxWidth: '80%', filter: 'drop-shadow(0 0 10px #0ea5e9)' }}
              />
            </div>
          </div>
        </div>
      </div>
      <StarfieldFadeShadowDown />
    </section>
  );
};

export default ContactFormSection;
