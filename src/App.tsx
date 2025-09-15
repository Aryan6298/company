import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Home from './pages/Home.jsx';
import ContactPage from './pages/Contact.jsx';
import AboutUs from './pages/AboutUs.jsx';
import './App.css';

import CustomCursor from './components/Customcursor.tsx';
import Navbar from './components/Navbar.tsx'; // ✅ Assuming your custom Navbar
import Footer from './components/Footer.tsx';
import Services from './pages/Services.jsx';
import PricingPlans from './pages/Pricingplans.jsx';
import Portfolio from './pages/Portfoliopage.jsx';
import ScrollToTop from './components/Scrolltotop.jsx';
import RefundAndCancellation from './pages/Refundandcancelationpage.jsx';
import PrivacyPolicy from './pages/Privacypolicy.jsx';


function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Router  basename="/company">
      <div style={styles.overlay1}>
        <CustomCursor />
        <ScrollToTop/>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<PricingPlans />} />
           <Route path="/project-portfolio" element={<Portfolio />} />
                     <Route path="/refund-policy" element={<RefundAndCancellation />} />
                         <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          
          
          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

const styles = {
  overlay1: {
    position: 'relative',
    width: '100%',
    marginTop: '-70px',
    paddingTop: '30px',
    minHeight: '100%',
    background: 'rgba(10, 20, 40, 0.3)',
    backgroundSize: 'cover',
  } as React.CSSProperties,
};

export default App;
