import React from 'react';
import Marquee from 'react-marquee-slider';
import '../index.css';

const MarqueeText = () => {
  return (
    <div>
      <div className="marquee-container">
        <Marquee velocity={25}>
        <a href="https://www.banderamusical.com.mx/" target="_blank" rel="noreferrer">
            <img
              src="../images/icon.png"
              className="sponsor-2"
              alt="bandera"
            />
          </a>
          {[
            <span className="marquee-text" key="1">
              Bienvenido a Bandera Musical!
            </span>
          ]}
          <a href="https://banderamusical.com/" target="_blank" rel="noreferrer">
            <img
              src="../images/icon.png"
              className="sponsor-2"
              alt="bandera"
            />
          </a>
        </Marquee>
      </div>
    </div>
  );
}

export default MarqueeText;
