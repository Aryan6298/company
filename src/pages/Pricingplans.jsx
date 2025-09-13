import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import customimg from '../assets/customisation.png';
import standardimg from '../assets/final-standard-plan-img.png';
import premiumimg from '../assets/premium-quality.png';
import StarfieldFadeShadowDown from "../components/StarfieldFadeShadowDown.tsx";
import StarfieldFadeShadowUp from "../components/StarfieldFadeShadowUp.tsx";

const PricingPlans = () => {
  return (
    <section>
      <StarfieldFadeShadowUp />
    <div className="pricing-wrapper py-5" style={styles.wrapper}>
      <div className="text-center mb-5 text-white">
        <h5 className="fw-bold">Web Development and Website Design</h5>
        <h2 className="fw-bold text-info">Plans & Pricing</h2>
        <p className="text-light mx-auto" style={{ maxWidth: "800px" }}>
          We are among India’s best web solution companies committed to offering full ROI-driven customized web services
          at affordable prices. Due to its excellent e-commerce website and graphics designs, KAP Web developer is one of
          the top web development companies in India.
        </p>
      </div>

      <div className="container px-4" style={{ maxWidth: "1140px" }}>
        <div className="row g-4 justify-content-center">

          {/* Standard Plan */}
          <div className="col-lg-4 col-md-6">
            <div className="card h-100 d-flex flex-column shadow border-0 text-center p-4 bg-dark text-white rounded-4">
              <img src={standardimg} alt="Standard Plan Icon" height="80" className="mx-auto" />
              <h5 className="mt-3 badge bg-warning text-dark rounded-pill px-3 py-2">Standard Plan</h5>
              <h2 className="fw-bold text-info">₹7,999</h2>
              <p><del>₹10,000</del></p>
              <p className="text-white-50">(+ 18% GST ₹1440)</p>
              <ul className="text-start ps-3 small mb-4">
                <li>5 pages Website</li>
                <li>1 Year Free Domain (.com, .in, .org)</li>
                <li>1 Year Free Cloud Hosting</li>
                <li>Dynamic Modern Website</li>
                <li>Responsive Website</li>
                <li>24/7 Free Hosting Support</li>
                <li>Unlimited Media Upload</li>
                <li>Free SSL Certificates</li>
                <li>1 Free Email ID</li>
                <li>SEO Friendly & Responsive</li>
                <li>Live Chat, Payment & Social Integration</li>
                <li>WhatsApp & Call Button</li>
                <li>Inquiry Form</li>
                <li>1 Year Free Technical Support</li>
              </ul>
              <div className="mt-auto">
                <p className="text-white-50">Annual Renewal For Hosting Rs.4000</p>
                <a href="tel:+919999999999" className="btn gradient-btn w-100 mt-3">Call Now</a>
              </div>
            </div>
          </div>

          {/* Premium Plan */}
          <div className="col-lg-4 col-md-6">
            <div className="card h-100 d-flex flex-column shadow border-0 text-center p-4 text-white rounded-4" style={styles.premiumCard}>
              <img src={premiumimg} alt="Premium Plan Icon" height="80" className="mx-auto" />
              <h5 className="mt-3 badge bg-warning text-dark rounded-pill px-3 py-2">Premium Plan</h5>
              <h2 className="fw-bold text-white">₹13,999</h2>
              <p><del>₹20,000</del></p>
              <p className="text-white-50">(+ 18% GST ₹2520)</p>
              <ul className="text-start ps-3 small mb-4">
                <li>12 pages Website</li>
                <li>1 Year Free Domain (.com, .in, .org)</li>
                <li>1 Year Free Cloud Hosting</li>
                <li>Dynamic Modern Website</li>
                <li>Responsive Website</li>
                <li>Admin Access</li>
                <li>Google Search Console Setup</li>
                <li>24/7 Free Hosting Support</li>
                <li>Unlimited Media Upload</li>
                <li>Free SSL Certificates</li>
                <li>2 Free Email IDs</li>
                <li>SEO Friendly & Responsive</li>
                <li>Live Chat, Payment & Social Integration</li>
                <li>WhatsApp & Call Button</li>
                <li>Inquiry Form</li>
                <li>WooCommerce Features</li>
                <li>1 Year Free Technical Support</li>
              </ul>
              <div className="mt-auto">
                <p className="text-white-50">Annual Renewal For Hosting Rs.4000</p>
                <a href="tel:+919999999999" className="btn call-btn w-100 mt-3">Call Now</a>
              </div>
            </div>
          </div>

          {/* Custom Plan */}
          <div className="col-lg-4 col-md-6">
            <div className="card h-100 d-flex flex-column shadow border-0 text-center p-4 bg-dark text-white rounded-4">
              <img src={customimg} alt="Custom Plan Icon" height="80" className="mx-auto" />
              <h5 className="mt-3 badge bg-warning text-dark rounded-pill px-3 py-2">Custom Plan</h5>
              <h2 className="fw-bold text-info">₹????</h2>
              <p><del>₹????</del></p>
              <p className="text-white-50">(+ 18% GST Applicable)</p>
              <ul className="text-start ps-3 small mb-4">
                <li>Pages: As per Requirement</li>
                <li>1 Year Free Domain (.com, .in, .org)</li>
                <li>1 Year Free Cloud Hosting</li>
                <li>Dynamic Modern Website</li>
                <li>Responsive Website</li>
                <li>Google Search Console Setup</li>
                <li>24/7 Free Hosting Support</li>
                <li>Unlimited Media Upload</li>
                <li>Free SSL Certificates</li>
                <li>5 Free Email IDs</li>
                <li>SEO Friendly & Responsive</li>
                <li>Live Chat, Payment & Social Integration</li>
                <li>WhatsApp & Call Button</li>
                <li>Inquiry Form</li>
                <li>WooCommerce Features</li>
                <li>1 Year Free Technical Support</li>
              </ul>
              <div className="mt-auto">
                <p className="text-white-50">Annual Renewal For Hosting Rs.4000</p>
                <a href="tel:+919999999999" className="btn gradient-btn w-100 mt-3">Call Now</a>
              </div>
            </div>
          </div>

          {/* ------------------- NEW E-COMMERCE PLANS ------------------- */}
          <div className="text-center text-white my-5">
            <h2 className="fw-bold text-info">E-Commerce Packages</h2>
            <p className="text-light">Advanced solutions for online stores and marketplaces.</p>
          </div>

          {/* Premium E-commerce Plan */}
          <div className="col-lg-4 col-md-6">
            <div className="card h-100 d-flex flex-column shadow border-0 text-center p-4 bg-dark text-white rounded-4" style={styles.premiumCard}>
              <img src={standardimg} alt="Premium E-commerce Plan Icon" height="80" className="mx-auto" />
              <h5 className="mt-3 badge bg-warning text-dark rounded-pill px-3 py-2">Premium E-commerce Plan</h5>
              <h2 className="fw-bold text-info">₹21,999</h2>
              <p><del>₹30,000</del></p>
              <p className="text-white-50">(+ 18% GST ₹3,960)</p>
              <ul className="text-start ps-3 small mb-4">
                <li>30 Pages Website</li>
                <li>1 Year Free Domain (.com / .in / .org)</li>
                <li>1 Year Free Cloud Hosting</li>
                <li>20 Product Categories</li>
                <li>30 Product Listings</li>
                <li>Premium Design & Dynamic Website</li>
                <li>Free SSL Certificate</li>
                <li>10 Free Email IDs</li>
                <li>SEO Friendly & Responsive</li>
                <li>Live Chat, Payment Gateway</li>
                <li>Social Media, Call & WhatsApp Integration</li>
                <li>Inquiry Form, Ecommerce Features</li>
                <li>Wallet & OTP Verification System</li>
                <li>Auto Invoice Generator</li>
                <li>1 Year Free Technical Support</li>
              </ul>
              <div className="mt-auto">
                <p className="text-white-50">Annual Renewal For Hosting Rs.4000</p>
                <a href="tel:+919999999999" className="btn call-btn w-100 mt-3">Call Now</a>
              </div>
            </div>
          </div>

          {/* Multi-vendor Business Plan */}
          <div className="col-lg-4 col-md-6">
            <div className="card h-100 d-flex flex-column shadow border-0 text-center p-4 bg-dark text-white rounded-4">
              <img src={premiumimg} alt="Multi-vendor Plan Icon" height="80" className="mx-auto" />
              <h5 className="mt-3 badge bg-warning text-dark rounded-pill px-3 py-2">Multi-vendor Business Plan</h5>
              <h2 className="fw-bold text-info">₹50,000</h2>
              <p><del>₹60,000</del></p>
              <p className="text-white-50">(+ 18% GST ₹9,000)</p>
              <ul className="text-start ps-3 small mb-4">
                <li>40 Pages Website</li>
                <li>1 Year Free Domain (.com / .in / .org)</li>
                <li>1 Year Free Cloud Hosting</li>
                <li>50 Product Categories</li>
                <li>30 Product Listings</li>
                <li>Multi-level Ecommerce Features</li>
                <li>Unlimited Media Upload</li>
                <li>20 Free Email IDs</li>
                <li>SEO Friendly & Responsive</li>
                <li>Live Chat, Payment Gateway</li>
                <li>Wallet System & OTP Verification</li>
                <li>Auto Invoice Generator</li>
                <li>1 Year Free Technical Support</li>
              </ul>
              <div className="mt-auto">
                <p className="text-white-50">Annual Renewal For Hosting Rs.4000</p>
                <a href="tel:+919999999999" className="btn call-btn w-100 mt-3">Call Now</a>
              </div>
            </div>
          </div>

          {/* Custom Multi-vendor Plan */}
          <div className="col-lg-4 col-md-6">
            <div className="card h-100 d-flex flex-column shadow border-0 text-center p-4 bg-dark text-white rounded-4" style={styles.premiumCard}>
              <img src={customimg} alt="Custom Multi-vendor Plan Icon" height="80" className="mx-auto" />
              <h5 className="mt-3 badge bg-warning text-dark rounded-pill px-3 py-2">Custom Multi-vendor Plan</h5>
              <h2 className="fw-bold text-info">₹????</h2>
              <p><del>₹????</del></p>
              <p className="text-white-50">(+ 18% GST Applicable)</p>
              <ul className="text-start ps-3 small mb-4">
                <li>Pages: According to Requirements</li>
                <li>1 Year Free Domain (.com / .in / .org)</li>
                <li>1 Year Free Cloud Hosting</li>
                <li>?? Product Categories & Listings</li>
                <li>Multi-level Ecommerce Features</li>
                <li>Unlimited Media Upload</li>
                <li>20 Free Email IDs</li>
                <li>SEO Friendly & Responsive</li>
                <li>Live Chat, Payment Gateway</li>
                <li>Wallet System & OTP Verification</li>
                <li>Auto Invoice Generator</li>
                <li>1 Year Free Technical Support</li>
              </ul>
              <div className="mt-auto">
                <p className="text-white-50">Annual Renewal For Hosting Rs.4000</p>
                <a href="tel:+919999999999" className="btn gradient-btn w-100 mt-3">Call Now</a>
              </div>
            </div>
          </div>

          <div className="text-center text-white my-5">
            <h2 className="fw-bold text-info">Logo Design Packages</h2>
            <p className="text-light">Advanced solutions for online stores and marketplaces.</p>
          </div>

          {/* Basic Logo Design */}
          <div className="col-lg-4 col-md-6">
            <div className="card h-100 d-flex flex-column shadow border-0 text-center p-4 bg-dark text-white rounded-4" style={styles.premiumCard}>
              <img src={standardimg} alt="Premium E-commerce Plan Icon" height="80" className="mx-auto" />
              <h5 className="mt-3 badge bg-warning text-dark rounded-pill px-3 py-2">Basic Logo Design</h5>
              <h2 className="fw-bold text-info">₹2,599</h2>
              <p><del>₹4,000</del></p>
              <p className="text-white-50">(+ 18% GST ₹468)</p>
              <ul className="text-start ps-3 small mb-4">
                <li>2 Design Concepts</li>
                <li>1 Revision</li>
                <li>Delivery in PNG & JPG Format</li>
                <li>Suitable for Startups</li>
                <li>100% Ownership Rights</li>
                <li>3 Days Delivery Time</li>
              </ul>
              <div className="mt-auto">
                <a href="tel:+919999999999" className="btn call-btn w-100 mt-3">Call Now</a>
              </div>
            </div>
          </div>

          {/* Standard Logo Design */}
          <div className="col-lg-4 col-md-6">
            <div className="card h-100 d-flex flex-column shadow border-0 text-center p-4 bg-dark text-white rounded-4">
              <img src={premiumimg} alt="Multi-vendor Plan Icon" height="80" className="mx-auto" />
              <h5 className="mt-3 badge bg-warning text-dark rounded-pill px-3 py-2">Standard Logo Design</h5>
              <h2 className="fw-bold text-info">₹4,599</h2>
              <p><del>₹6,000</del></p>
              <p className="text-white-50">(+ 18% GST ₹828)</p>
              <ul className="text-start ps-3 small mb-4">
                <li>4 Design Concepts</li>
                <li>3 Revision</li>
                <li>Delivery in PNG & PDF Format</li>
                <li>Black & White Versions Included</li>
                <li>Suitable for Startups</li>
                <li>100% Ownership Rights</li>
                <li>5 Days Delivery Time</li>
              </ul>
              <div className="mt-auto">
                <a href="tel:+919999999999" className="btn call-btn w-100 mt-3">Call Now</a>
              </div>
            </div>
          </div>

          {/* Premium logo identity Plan */}
          <div className="col-lg-4 col-md-6">
            <div className="card h-100 d-flex flex-column shadow border-0 text-center p-4 bg-dark text-white rounded-4" style={styles.premiumCard}>
              <img src={customimg} alt="Premium Logo Identity Plan Icon" height="80" className="mx-auto" />
              <h5 className="mt-3 badge bg-warning text-dark rounded-pill px-3 py-2">Premium Logo Identity Plan</h5>
              <h2 className="fw-bold text-info">₹9,999</h2>
              <p><del>₹15,000</del></p>
              <p className="text-white-50">(+ 18% GST ₹1,800)</p>
              <ul className="text-start ps-3 small mb-4">
                <li>6 Logo Concepts + unlimited revisions</li>
                <li>All Source Files (PSD, AI, SVG)</li>
                <li>Social Media kit included</li>
                <li>Stationery Design Addon</li>
                <li>Complete Brand Identity Guide</li>
                <li>7 days Priority Delivery</li>

                <li>100% Ownership Rights</li>
              </ul>
              <div className="mt-auto">
                
                <a href="tel:+919999999999" className="btn gradient-btn w-100 mt-3">Call Now</a>
              </div>
            </div>
          </div>


          

        </div>
      </div>

      <style>
        {`
          .gradient-btn {
            background: linear-gradient(to right, #06b6d4, #3b82f6);
            border: none;
            color: white;
            font-weight: bold;
            transition: all 0.4s ease;
            border-radius: 8px;
          }

          .card {
            transition: transform 0.4s ease, box-shadow 0.4s ease;
            border-radius: 16px;
            overflow: hidden;
            background-color: #111827;
            border: 1px solid #1f2937;
          }

          .card:hover {
            transform: translateY(-10px) scale(1.02);
            box-shadow: 0 15px 25px rgba(6, 182, 212, 0.3), 0 5px 10px rgba(0, 0, 0, 0.2);
            border-color: #06b6d4;
          }

          .card:hover .badge {
            transform: scale(1.1);
            background: linear-gradient(to right, #06b6d4, #3b82f6);
            color: white !important;
          }

          .card img {
            transition: transform 0.4s ease;
          }

          .card:hover img {
            transform: scale(1.1);
          }

          .gradient-btn:hover {
            background: linear-gradient(to left, #06b6d4, #3b82f6);
            transform: scale(1.05);
            box-shadow: 0 0 12px #06b6d4;
          }

          .call-btn {
            background: linear-gradient(to right, #facc15, #f59e0b);
            color: black;
            font-weight: bold;
            border: none;
            transition: 0.3s;
            border-radius: 8px;
          }

          .call-btn:hover {
            background: linear-gradient(to left, #facc15, #f59e0b);
            transform: scale(1.05);
            box-shadow: 0 0 12px #facc15;
          }

          .card li {
            list-style: none;
            margin-bottom: 14px;
            position: relative;
            padding-left: 22px;
          }

          .card li::before {
            content: "✔";
            color: #22c55e;
            position: absolute;
            left: 0;
            top: 0;
          }
        `}
      </style>
    </div>
    <StarfieldFadeShadowDown />
    </section>
  );
};

const styles = {
  wrapper: {
    background: "#000000",
    minHeight: "100vh",
  },
  premiumCard: {
    background: "linear-gradient(to right, #1e3a8a, #2563eb)",
  },
};

export default PricingPlans;
