import React from 'react'
import Marquee from 'react-marquee-slider'
import '../index.css'

const Patrocinios = () => {
  return (
    <div>
      <h5 className="boletinera">Patrocinios</h5>
      <div className="marquee-container">
        <Marquee velocity={25}>
          <a href="https://www.viagogo.com.mx/" target="_blank" rel="noreferrer">
            <img
              src="../images/viagogo.jpeg"
              className="sponsor"
              alt="viagogo"
            />
          </a>
          <a href="https://oui-restaurant.netlify.app/" target="_blank" rel="noreferrer">
            <img
              src="../images/ouirestaurant.png"
              className="sponsor"
              alt="oui"
            />
          </a>
          <a href="https://malaracha.com/" target="_blank" rel="noreferrer">
            <img
              src="../images/malaracha.png"
              className="sponsor"
              alt="malaracha"
            />
          </a>
          <a href="https://www.casaorendain.com/product/tequila-ollitas/33?idioma=es" target="_blank" rel="noreferrer">
            <img
              src="../images/ollitas2.jpeg"
              className="sponsor"
              alt="ollitas"
            />
          </a>
          <a href="https://tecate.com/codigotecate/agegate" target="_blank" rel="noreferrer">
            <img
              src="../images/tecate.jpg"
              className="sponsor"
              alt="tecate"
            />
          </a>
        </Marquee>
      </div>
    </div>
  )
}

export default Patrocinios
