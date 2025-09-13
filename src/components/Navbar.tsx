import React, { useState, useEffect } from "react";
import img01 from "../assets/logo-main.png";

const Navbar: React.FC = () => {
  const [hovered, setHovered] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
  const [activeSection, setActiveSection] = useState<string>("/");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);

      const path = window.location.pathname;
      const hash = window.location.hash;
      const current = hash || path;

      if (current.startsWith("/")) {
        setActiveSection(path);
      } else {
        const sections = ["services", "portfolio", "pricing", "about-us"];
        let found = false;
        for (const section of sections) {
          const el = document.getElementById(section);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
              setActiveSection(`#${section}`);
              found = true;
              break;
            }
          }
        }
        if (!found) {
          setActiveSection("/");
        }
      }
    };

    const handleResize = () => setIsMobile(window.innerWidth < 992);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    window.addEventListener("hashchange", handleScroll);
    window.addEventListener("popstate", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("hashchange", handleScroll);
      window.removeEventListener("popstate", handleScroll);
    };
  }, []);

  const styles: { [key: string]: React.CSSProperties } = {
    header: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      height: "60px",
      background: scrolled ? "rgba(0, 0, 0, 0.95)" : "transparent",
      transition: "background 0.3s ease",
    },
    nav: {
      height: 60,
      width: "100%",
      display: "flex",
      alignItems: "center",
      position: "relative",
    },
    container: {
      maxWidth: 1200,
      margin: "0 auto",
      height: 60,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 1rem",
      width: "100%",
    },
    logoWrapper: {
      position: "relative",
      display: "inline-block",
    },
    logoOverlay: {
      position: "absolute",
      top: 0,
      left: 0,
      height: "79%",
      width: "100%",
      background: "rgb(0,0,0)",
      borderRadius: "12px",
      zIndex: 1,
    },
    logoImg: {
      height: "55px",
      width: "auto",
      verticalAlign: "middle",
      display: "inline-block",
      position: "relative",
      zIndex: 2,
    },
    hamburger: {
      display: isMobile ? "flex" : "none",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "30px",
      height: "30px",
      cursor: "pointer",
      zIndex: 1100,
    },
    bar: {
      width: "100%",
      height: "3px",
      backgroundColor: "#fff",
      margin: "4px 0",
      borderRadius: "2px",
      transition: "0.3s",
    },
    navMenu: {
      display: isMobile ? (menuOpen ? "flex" : "none") : "flex",
      flexDirection: isMobile ? "column" : "row",
      listStyle: "none",
      gap: "1.25rem",
      margin: 0,
      justifyContent: isMobile ? "flex-start" : "flex-end",
      alignItems: isMobile ? "flex-start" : "center",
      position: isMobile ? "fixed" : "static",
      top: 0,
      right: 0,
      width: isMobile ? "100%" : "auto",
      height: isMobile ? "100vh" : "auto",
      background: isMobile ? "rgba(0,0,0,0.97)" : "transparent",
      padding: isMobile ? "5rem 2rem" : 0,
      transition: "all 0.3s ease",
    },
    navLink: {
      color: "#fff",
      fontFamily: "Inter, sans-serif",
      fontWeight: 700,
      fontSize: "1.1rem",
      letterSpacing: "0.04em",
      padding: "0.5em 0.7em",
      borderRadius: "6px",
      borderBottom: "2px solid transparent",
      background: "transparent",
      textShadow: "0 1px 4px rgba(0,0,0,0.3)",
      transition: "background 0.2s, color 0.2s, border-bottom 0.2s",
      textDecoration: "none",
      width: isMobile ? "100%" : "auto",
      display: "block",
    },
    navLinkHover: {
      borderBottom: "2px solid #fff",
      background: "rgba(37,99,235,0.10)",
    },
    navLinkActive: {
      borderBottom: "2px solid #fff",
      color: "#60a5fa",
      background: "rgba(37,99,235,0.25)",
    },
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/project-portfolio", label: "Portfolio" },
    { href: "/services", label: "Services" },
    { href: "/pricing", label: "Pricing" },
    { href: "/about-us", label: "About Us" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        <div style={styles.container}>
          {/* Logo */}
          <div style={{ zIndex: 2 }}>
            <div style={styles.logoWrapper}>
              <div style={styles.logoOverlay}></div>
              <img src={img01} alt="Kap Logo" style={styles.logoImg} />
            </div>
          </div>

          {/* Hamburger */}
          <div style={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
            <div
              style={{
                ...styles.bar,
                transform: menuOpen ? "rotate(45deg) translate(5px,5px)" : "",
              }}
            ></div>
            <div
              style={{
                ...styles.bar,
                opacity: menuOpen ? 0 : 1,
              }}
            ></div>
            <div
              style={{
                ...styles.bar,
                transform: menuOpen ? "rotate(-45deg) translate(6px,-6px)" : "",
              }}
            ></div>
          </div>

          {/* Nav Links */}
          <ul style={styles.navMenu}>
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <li key={link.href} style={{ width: isMobile ? "100%" : "auto" }}>
                  <a
                    href={link.href}
                    style={{
                      ...styles.navLink,
                      ...(isActive ? styles.navLinkActive : {}),
                      ...(hovered === link.href ? styles.navLinkHover : {}),
                    }}
                    onMouseEnter={() => setHovered(link.href)}
                    onMouseLeave={() => setHovered(null)}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
