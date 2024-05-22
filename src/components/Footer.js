import React from 'react'

import { SiMinutemailer } from 'react-icons/si'
import { MdEmail } from 'react-icons/md'
import { FaFacebook } from 'react-icons/fa'
import { FaTwitterSquare } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'
import { FaInstagramSquare } from 'react-icons/fa'
import { FaTiktok } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { GiBlackFlag } from 'react-icons/gi'
import { FaEnvelope } from 'react-icons/fa'
import { FaWhatsappSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-container">
          <h5 className="boletinera">Recibe Nuestro Boletin</h5>
          <SiMinutemailer className="searchbar" fontSize="2rem" color="Black" />
        </div>

        <div className="input-group">
          <input
            type="text"
            className="form-control-2"
            placeholder="Ingresa tu Correo Electronico"
            aria-label="Boletin"
            aria-describedby="basic-addon2"
          />

          <span className="input-group-text" id="basic-addon2">
            <MdEmail className="email" />
          </span>
        </div>

        <ul>
          <li>
            <a href="https://banderamusical.com">
              <h5 className="boletinera">Plataforma de Videos</h5>
            </a>
            <a href="https://banderamusical.com/classicrock">
              <h6 className="boletin">Rock Clasico</h6>
            </a>
            <a href="https://banderamusical.com/raptrap">
              <h6 className="boletin">Rap Latino</h6>
            </a>
            <a href="https://banderamusical.com/sierre%C3%B1o">
              <h6 className="boletin">Sierreños</h6>
            </a>
            <a href="https://banderamusical.com/banda">
              <h6 className="boletin">Banda</h6>
            </a>

            <a href="https://banderamusical.com/rockesp">
              <h6 className="boletin">Rock en Español</h6>
            </a>
          </li>
          <div>
            <li>
              <h5 className="boletinera">Redes Sociales</h5>
              <div className="third-party-icons">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://api.whatsapp.com/send?phone=523324949195"
                  className="third-party-grid"
                >
                  <FaWhatsappSquare />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.facebook.com/profile.php?id=100087385321347"
                  className="third-party-grid"
                >
                  <FaFacebook />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.youtube.com/channel/UC8XAwIHJzLAnq3-s04WCzhw"
                  className="third-party-grid"
                >
                  <FaYoutube />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/banderamusical/"
                  className="third-party-grid"
                >
                  <FaInstagramSquare />
                </a>

                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://twitter.com/BanderaMusical"
                  className="third-party-grid"
                >
                  <FaTwitterSquare />
                </a>

                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/company/bandera-musical/"
                  className="third-party-grid"
                >
                  <FaLinkedin />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.tiktok.com/@bandera_musical"
                  className="third-party-grid"
                >
                  <FaTiktok />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://banderamusical.com/"
                  className="third-party-grid"
                >
                  <GiBlackFlag />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="mailto:contacto@banderamusical.com"
                  className="third-party-grid"
                >
                  <FaEnvelope />
                </a>
              </div>
            </li>
            <div>
              <img
                src="./images/mobileregistered.png"
                alt="Mobile Registered"
                className="footer-banner"
              />
            </div>
          </div>

          <div>
            <li>
              <h5 className="boletinera">Sucursales</h5>

              <a href="https://www.plazadelsol.com/">
                <h6 className="boletin">Plaza del Sol</h6>
              </a>
              <a href="https://plazamexicogdl.mx/">
                <h6 className="boletin">Plaza Mexico</h6>
              </a>
              <a href="http://www.plazaterranova.mx/">
                <h6 className="boletin">Plaza Terranova</h6>
              </a>
              <a href="https://www.lagranplazafashionmall.com/">
                <h6 className="boletin">La Gran Plaza</h6>
              </a>
              <a href="https://mid-townjalisco.com.mx/">
                <h6 className="boletin">Midtown</h6>
              </a>
            </li>
          </div>
          <div>
            <div>
              <h5 className="boletinera">Patrocinios</h5>

              <a
                href="https://www.viagogo.com.mx/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="../images/viagogo.jpeg"
                  className="sponsor"
                  alt="viagogo"
                  media="(max-width: 400px)"
                />
              </a>

              <a
                href="https://oui-restaurant.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="../images/ouirestaurant.png"
                  className="sponsor"
                  alt="oui"
                  media="(max-width: 400px)"
                />
              </a>

              <a href="https://malaracha.com/" target="_blank" rel="noreferrer">
                <img
                  src="../images/malaracha.png"
                  className="sponsor"
                  alt=""
                  media="(max-width: 400px)"
                />
              </a>
              <a
                href="https://www.casaorendain.com/product/tequila-ollitas/33?idioma=es"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="../images/ollitas2.jpeg"
                  className="sponsor"
                  alt=""
                  media="(max-width: 400px)"
                />
              </a>

              <a
                href="https://tecate.com/codigotecate/agegate"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="../images/tecate.jpg"
                  className="sponsor"
                  alt=""
                  media="(max-width: 400px)"
                />
              </a>
            </div>
          </div>
        </ul>
      </footer>
    </>
  )
}

export default Footer
