import React from 'react';
import '../assets/black-space.jpg';
import './starfield-fade-shadow-up.css';

const StarfieldFadeShadowUp = ({ style }: { style?: React.CSSProperties }) => (
  <div className="starfield-fade-shadow-up" style={style}>
    <div className="fade-overlay-up"></div>
  </div>
);

export default StarfieldFadeShadowUp; 