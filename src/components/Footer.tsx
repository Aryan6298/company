import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { Link } from "react-router-dom";
import logoImg from "../assets/logo-main.png";

const mainPages = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/project-portfolio" },
  { name: "Pricing", path: "/pricing" },
  { name: "About Us", path: "/about-us" },
  { name: "Contact Us", path: "/contact" },
];

const usefulLinks = [
  { name: "Refund & Cancellation", path: "/refund-policy" },
  { name: "Privacy Policy", path: "/privacy-policy" },
];

const Footer = () => (
  <footer className="footer-section pt-5 pb-3 ">
    <style>{`
      .footer-section {
        background: transparent;
        color: #fff;
        width: 100%;
        font-family: inherit;
        overflow: hidden;
        padding-bottom: 3rem;
      }

      .footer-logo img {
        height: 200px;
        width: 230px;
        margin-top: -50px;
        margin-bottom: -40px;
        margin-left: 20px;
        margin-right: 20px;
      }

      .logo-overlay-bg {
        background: rgb(0, 0, 0);
        padding: 2px;
        border-radius: 12px;
        display: inline-block;
      }

      .footer-desc {
        color: #c7c9d3;
        font-size: 1.15rem;
        margin-bottom: 2rem;
      }

      .footer-title {
        font-size: 1.18rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
        color: #fff;
        display: inline-block;
        position: relative;
      }

      .footer-title::after {
        content: "";
        display: block;
        height: 3px;
        background-color: #22c55e;
        border-radius: 2px;
        margin-top: 0.35rem;
        width: 100%;
      }

      .footer-link {
        color: #e0e2ed;
        font-size: 1.05rem;
        text-decoration: none;
        display: block;
        margin-bottom: 0.7rem;
        transition: color 0.18s;
      }

      .footer-link:hover {
        color: #2563eb;
      }

      .subscribe-input-wrapper {
        background: #0f172a;
        border-radius: 8px;
        overflow: hidden;
        display: flex;
        align-items: center;
        width: 100%;
        max-width: 280px;
        margin-top: 0.5rem;
      }

      .subscribe-input-wrapper input {
        flex: 1;
        background: transparent;
        border: none;
        color: #fff;
        padding: 10px 15px;
        outline: none;
      }

      .subscribe-input-wrapper button {
        background: rgb(0, 0, 0);
        border: none;
        color: white;
        padding: 10px 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      }

      .footer-bottom {
        border-top: 1px solid #353657;
        margin-top: 2.5rem;
        padding-top: 1.2rem;
        color: #bfc9d8;
        font-size: 1.05rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
      }

      /* Responsive Fixes */
      @media (max-width: 991px) {
        .footer-cols {
          flex-direction: column;
          gap: 2.5rem;
        }
        .footer-bottom {
          flex-direction: column;
          gap: 0.7rem;
          text-align: center;
        }
      }

      @media (max-width: 576px) {
       

        .footer-logo img {
          height: 120px;
          width: auto;
          margin-top: -20px;
          margin-bottom: -20px;
        }

        .footer-desc {
          font-size: 1rem;
        }
      }
    `}</style>

    <div className="container ">
      <div className="row footer-cols d-flex justify-content-between align-items-start mb-4">
        <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
          <div className="footer-logo logo-overlay-bg">
            <img src={logoImg} alt="Flown Developer Logo" />
          </div>
          <div className="footer-desc">
            We are India’s Leading Web Development Company, delivering high-quality, custom websites and engaging animated motion graphic videos — all at unbeatable prices.
          </div>
        </div>

        <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
          <div className="footer-title">Main Pages</div>
          {mainPages.map(({ name, path }) => (
            <Link to={path} className="footer-link" key={name}>
              {name}
            </Link>
          ))}
        </div>

        <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
          <div className="footer-title">Useful Links</div>
          {usefulLinks.map(({ name, path }) => (
            <Link to={path} className="footer-link" key={name}>
              {name}
            </Link>
          ))}
        </div>

        <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
          <div className="footer-title">Subscribe</div>
          <div style={{ fontSize: "0.95rem", color: "#cbd5e1" }}>
            Get the latest updates and offers.
          </div>
          <div className="subscribe-input-wrapper mt-2">
            <input type="email" placeholder="KAPWebdeveloper@gmail.com" />
            <button type="submit">
              <FaPaperPlane />
            </button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} KAP Developer. Built with precision by AJ.
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;
