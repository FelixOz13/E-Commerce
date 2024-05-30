import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css'

const Home = () => {
  return (
    <section>
      <div>
        <h3 className="dezlisante">←←Desliza para ver Galería→→</h3>
      </div>
      <div className="scroll-container">
        {[
          {
            imgSrc: "t-shirts/t-shirt-sp.png",
            title: "CAMISETAS",
            subtitle: "Smashing Pumpkins",
            price: "$200",
            link: "#",
          },
          {
            imgSrc: "t-shirts/hoodies.jpg",
            title: "CAPUCHAS",
            subtitle: "Surtido Extenso",
            price: "$200",
            link: "#",
          },
          {
            imgSrc: "t-shirts/sweaters.jpg",
            title: "SUDADERAS",
            subtitle: "NIRVANA",
            price: "$600",
            link: "#",
          },
          {
            imgSrc: "t-shirts/gorras.png",
            title: "GORRAS",
            subtitle: "bLINK-182",
            price: "$250",
            link: "#",
          },
          {
            imgSrc: "t-shirts/tazas.png",
            title: "Tazas",
            subtitle: "Pink Floyd",
            price: "$200",
            link: "#",
          },
          {
            imgSrc: "t-shirts/Llaveros.png",
            title: "Llaveros",
            subtitle: "AC/DC",
            price: "$150",
            link: "#",
          },
          {
            imgSrc: "t-shirts/kiss.png",
            title: "Figuras de Accion",
            subtitle: "KISS",
            price: "$1200",
            link: "#",
          },
          {
            imgSrc: "t-shirts/rockcards.jpg",
            title: "CARTITAS",
            subtitle: "Paquetes de 10",
            price: "$200",
            link: "#",
          },
          {
            imgSrc: "t-shirts/tixs.png",
            title: "BOLETOS",
            subtitle: "Conciertos Locales",
            price: "$200",
            link: "#",
          },
        ].map((item, index) => (
          <div className="scroll-item" key={index}>
            <div className="small-banner position-relative py-2">
              <img
                src={item.imgSrc}
                className="img-fluid rounded-2"
                alt="small banner"
              />
              <div className="small-banner-content position-absolute">
                <h4>{item.title}</h4>
                <h5>{item.subtitle}</h5>
                <p className="pricetag">{item.price}</p>
                <Link to={item.link} className="button">
                  Ver Más
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
     
    </section>
  )
}

export default Home
