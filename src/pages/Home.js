import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../index.css'

const Home = () => {
  return (
    <section>
      <div>
        <h3 className="dezlisante">←←Dezliza para ver Galeria→→</h3>
      </div>
      <div className="scroll-container">
        <div className="scroll-item">
          <div className="small-banner position-relative py-2">
            <img
              src="t-shirts/t-shirt-sp.png"
              className="img-fluid rounded-2"
              alt="small banner"
            />
            <div className="small-banner-content position-absolute">
              <h4>CAMISETAS</h4>
              <h5>Smashing Pumpkins</h5>
              <p className="pricetag">$200</p>
              <a href="#" className="button">
                Ver Mas
              </a>
            </div>
          </div>
        </div>

        <div className="scroll-item">
          <div className="small-banner position-relative py-2">
            <img
              src="t-shirts/hoodies.jpg"
              className="img-fluid rounded-2"
              alt="small banner"
            />
            <div className="small-banner-content position-absolute">
              <h4>CAPUCHAS</h4>
              <h5>Surtido Extenso</h5>
              <p className="pricetag">$200</p>
              <a href="#" className="button">
                Ver Mas
              </a>
            </div>
          </div>
        </div>
        <div className="scroll-item">
          <div className="small-banner position-relative py-2">
            <img
              src="t-shirts/sweaters.jpg"
              className="img-fluid rounded-2"
              alt="small banner"
            />
            <div className="small-banner-content position-absolute">
              <h4>SUDADERAS</h4>
              <h5>NIRVANA</h5>
              <p className="pricetag">$600</p>
              <a href="#" className="button">
                Ver Mas
              </a>
            </div>
          </div>
        </div>
        <div className="scroll-item">
          <div className="small-banner position-relative py-2">
            <img
              src="t-shirts/gorras.png"
              className="img-fluid rounded-2"
              alt="small banner"
            />
            <div className="small-banner-content position-absolute">
              <h4>GORRAS</h4>
              <h5>bLINK-182</h5>
              <p className="pricetag">$250</p>
              <a href="#" className="button">
                Ver Mas
              </a>
            </div>
          </div>
        </div>

        <div className="scroll-item">
          <div className="small-banner position-relative py-2">
            <img
              src="t-shirts/tazas.png"
              className="img-fluid rounded-2"
              alt="small banner"
            />
            <div className="small-banner-content position-absolute">
              <h4>Tazas</h4>
              <h5>Pink Floyd</h5>
              <p className="pricetag">$200</p>
              <a href="#" className="button">
                Ver Mas
              </a>
            </div>
          </div>
        </div>

        <div className="scroll-item">
          <div className="small-banner position-relative py-2">
            <img
              src="t-shirts/Llaveros.png"
              className="img-fluid rounded-2"
              alt="small banner"
            />
            <div className="small-banner-content position-absolute">
              <h4>Llaveros</h4>
              <h5>AC/DC</h5>
              <p className="pricetag">$150</p>
              <a href="#" className="button">
                Ver Mas
              </a>
            </div>
          </div>
        </div>
        <div className="scroll-item">
          <div className="small-banner position-relative py-2">
            <img
              src="t-shirts/kiss.png"
              className="img-fluid rounded-2"
              alt="small banner"
            />
            <div className="small-banner-content position-absolute">
              <h4>Figuras de Accion</h4>
              <h5>KISS</h5>
              <p className="pricetag">$1200</p>
              <a href="#" className="button">
                Ver Mas
              </a>
            </div>
          </div>
        </div>

        <div className="scroll-item">
          <div className="small-banner position-relative py-2">
            <img
              src="t-shirts/rockcards.jpg"
              className="img-fluid rounded-2"
              alt="small banner"
            />
            <div className="small-banner-content position-absolute">
              <h4>CARTITAS</h4>
              <h5>Paquetes de 10</h5>
              <p className="pricetag">$200</p>
              <a href="#" className="button">
                Ver Mas
              </a>
            </div>
          </div>
        </div>
        <div className="scroll-item">
          <div className="small-banner position-relative py-2">
            <img
              src="t-shirts/tixs.png"
              className="img-fluid rounded-2"
              alt="small banner"
            />
            <div className="small-banner-content position-absolute">
              <h4>BOLETOS</h4>
              <h5>Conciertos Locales</h5>
              <p className="pricetag">$200</p>
              <a href="#" className="button">
                Ver Mas
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
