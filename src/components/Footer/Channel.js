import React from 'react';
import './Footer.css';

const Channel = () => {
  return (
    <div className="channel-container">
      <h5 className="boletinera">Plataforma de Videos</h5>
      <ul className="organized-list">
        <li>
          <a href="https://banderamusical.com" className="boletin">
            Rock Clasico
          </a>
        </li>
        <li>
          <a href="https://banderamusical.com/classicrock" className="boletin">
            Rap Latino
          </a>
        </li>
        <li>
          <a href="https://banderamusical.com/raptrap" className="boletin">
            Sierreños
          </a>
        </li>
        <li>
          <a href="https://banderamusical.com/sierre%C3%B1o" className="boletin">
            Banda
          </a>
        </li>
        <li>
          <a href="https://banderamusical.com/banda" className="boletin">
            Rock en Español
          </a>
        </li>
        <li>
          <a href="https://banderamusical.com/rockesp" className="boletin">
            Rock en Español
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Channel;
