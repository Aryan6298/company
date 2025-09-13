import React from 'react';
import '../assets/black-space.jpg';
import './starfield-fade-shadow-down.css';

const StarfieldFadeShadowDown = ({ style }: { style?: React.CSSProperties }) => (
  <div className="starfield-fade-shadow-down" style={style}>
    <div className="fade-overlay-down"></div>
    </div>
);

export default StarfieldFadeShadowDown; 