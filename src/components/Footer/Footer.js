import React from 'react'
import Sucursales from './Sucursales'
import RedesSociales from './RedesSociales'
import Channel from './Channel'
import EmailInput from './EmailInput'
import './Footer.css';



const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-container">
        <div>
          <EmailInput/>
          </div>
          <div className="columns">
          <div className="column-item">
          <Channel/>
          </div>
          <div className="column-item">
          <Sucursales/>
          </div>
          <div className="column-item">
          <RedesSociales/>
          </div>
          </div>
          </div>
      </footer>
    </>
  )
}

export default Footer
