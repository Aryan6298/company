import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useProgressAnimation } from './hooks/useProgressAnimation.ts';
import StarfieldFadeShadowDown from './StarfieldFadeShadowDown.tsx';
import StarfieldFadeShadowUp from './StarfieldFadeShadowUp.tsx';

const Skills = () => {
  const { progressRefs, textRefs } = useProgressAnimation();

  const defaultColors = [
    '#FF6B6B', '#4ECDC4', '#FFD93D', '#1DD1A1', '#54a0ff',
    '#ff9ff3', '#feca57', '#48dbfb', '#10ac84', '#5f27cd',
    '#29425fff', '#ee5253'
  ];

  const skills = [
    { name: "HTML/CSS/JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", level: 90 },
    { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", level: 85 },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", level: 82 },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", level: 80 },
    { name: "MERN Stack", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", level: 85 },
    { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", level: 75 },
    { name: "Git / Version Control", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", level: 85 },
    { name: "WordPress", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg", level: 78 },
    { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", level: 75 },
    { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", level: 80 },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", level: 82 },
    { name: "Vercel", icon: "https://assets.vercel.com/image/upload/front/favicon/vercel/152x152.png", level: 78 },
  ];

  return (
    <section>
        <StarfieldFadeShadowUp/>
    <div 
      id="skills" 
      className="section-padding position-relative overflow-hidden"
      style={{
         backgroundColor: 'rgb(41, 41, 81)',
        color: '#ffffff'
      }}
    >
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{
        background: 'radial-gradient(circle at 0% 100%, rgba(45,91,255,0.1) 0%, rgba(255,255,255,0) 50%)',
        zIndex: 0
      }}></div>
      <Container className="position-relative">
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <span className="badge bg-primary-custom px-3 py-2 mb-3" data-aos="fade-down">
              Technical Expertise
            </span>
            <h2 className="display-5 fw-bold mb-4" data-aos="fade-up">
              Skills & <span className="text-primary-custom">Technologies</span>
            </h2>
            <p className="lead text-light opacity-75 mb-5" data-aos="fade-up" data-aos-delay="100">
              Proficient in modern web technologies with expertise in full-stack development,
              focusing on the MERN stack and various supporting technologies.
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg={8}>
            <div 
              className="p-4 rounded"
              style={{
                background: 'rgba(0, 0, 0, 0.31)',
                backdropFilter: 'blur(10px)',
               marginBottom: '2rem',
              }}
            >
              {skills.map((skill, index) => {
                const color = defaultColors[index % defaultColors.length];
                return (
                  <div
                    key={skill.name}
                    className="skill-item mb-4"
                    data-aos="fade-up"
                    data-aos-delay={100 * (index + 1)}
                  >
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <div className="d-flex align-items-center">
                        <img 
                          src={skill.icon} 
                          alt={skill.name} 
                          width="24" 
                          height="24" 
                          className="me-2"
                          style={{ objectFit: "contain" }}
                        />
                        <span className="fw-bold text-white">{skill.name}</span>
                      </div>
                      <span
                        className="text-light opacity-75 small"
                        ref={(el) => {
                          if (textRefs.current) {
                            textRefs.current[index] = el;
                          }
                        }}
                      >
                        0%
                      </span>
                    </div>
                    <div className="progress rounded-pill" style={{ 
                      height: '8px', 
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.2)'
                    }}>
                      <div
                        ref={(el) => {
                          if (progressRefs.current) {
                            progressRefs.current[index] = el;
                          }
                        }}
                        className="progress-bar rounded-pill"
                        role="progressbar"
                        style={{
                          width: '0%', // animated by IntersectionObserver
                          backgroundColor: color,
                          boxShadow: `0 0 10px ${color}40`
                        }}
                        aria-valuenow={skill.level}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>
      </div>
      <StarfieldFadeShadowDown />
    </section>
  );
};

export default Skills;
