import React from 'react'
import './Footer.css'

const Sucursales = () => {
  return (
    <div>
      <h5 className="boletinera">Sucursales</h5>
      <ul className="organized-list">
        <li>
          <a href="https://www.plazadelsol.com/" target="_blank" rel="noreferrer">
            <h6 className="boletin">Plaza del Sol</h6>
          </a>
        </li>
        <li>
          <a href="https://plazamexicogdl.mx/" target="_blank" rel="noreferrer">
            <h6 className="boletin">Plaza Mexico</h6>
          </a>
        </li>
        <li>
          <a href="http://www.plazaterranova.mx/" target="_blank" rel="noreferrer">
            <h6 className="boletin">Plaza Terranova</h6>
          </a>
        </li>
        <li>
          <a href="https://www.lagranplazafashionmall.com/" target="_blank" rel="noreferrer">
            <h6 className="boletin">La Gran Plaza</h6>
          </a>
        </li>
        <li>
          <a href="https://mid-townjalisco.com.mx/" target="_blank" rel="noreferrer">
            <h6 className="boletin">Midtown</h6>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sucursales
