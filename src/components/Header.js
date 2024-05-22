import { Link } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'
import { ImMenu2 } from 'react-icons/im'
import { FaWhatsapp } from 'react-icons/fa'
import { MdOutlineFavoriteBorder } from 'react-icons/md'

const Header = () => {
  return (
    <div>
      <div>
        <header className="header-top-strip">
          <div>
            <img
              src="./images/mobileregistered.png"
              alt="Mobile Registered"
              className="banner"
            />
          </div>
          <p className="envios">Envios de $1000MXN o mas seran Gratis</p>
          <div className="header-links">
            {/* <div>
              <a href="https://wa.me/523324949195">
                <span>
                  <FaWhatsapp className="whatsapp-icon" />
                </span>
              </a>
  </div>*/}
            <Link>
              <img src="images/user.svg" alt="user" />
            </Link>
          </div>
        </header>
      </div>

      <div>
        <header className="header-middle">
          <Link to="https://banderamusical.com/">
            <img
              className="logo"
              src="./images/icon.png"
              alt="Icon"
              width="100px"
              height="100px"
            />
          </Link>

          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Busca tu Grupo Favorito"
              aria-label="Busca La Mercancia de tu Grupo"
              aria-describedby="basic-addon2"
            />
            <span className="input-group-text1">
              <BsSearch className="searchbar" />
            </span>
          </div>
        </header>
      </div>

      <div>
        <header className="header-bottom">
          <div className="dropdown">
            <div className="favoritecart">
              <div className="cart-links">
                <Link>
                  <img
                    src="images/cart.svg"
                    alt="cart"
                    color="goldenrod"
                    fontSize={'1.5rem'}
                  />
                  <span className="cart-span">0</span>
                </Link>
                <Link>
                  <MdOutlineFavoriteBorder color="red" fontSize={'2rem'} />
                  <span className="cart-span">0</span>
                </Link>
              </div>
            </div>
            <button
              className="btn btn-secondary dropdown-toggle bg-transparent border-0 d-flex align-items-center"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <ImMenu2 fontSize="2rem" />
              <span className="dropdown-button">Tipos De Bandas</span>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <Link className="dropdown-item" to="/rock">
                  Rock
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/rap">
                  Rap
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/rockesp">
                  Rock en Español
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/pop">
                  Pop
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/banda">
                  Banda
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/sierno">
                  Sierreños y Norteño
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/rancheras">
                  Rancheras
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/pedidos">
                  Pedidos Especiales
                </Link>
              </li>
            </ul>

            <button
              className="btn btn-secondary dropdown-toggle bg-transparent border-0  me-5 d-flex align-items-center"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <ImMenu2 fontSize="2rem" />
              <span className="dropdown-button">Tipo De Accessorio</span>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <Link className="dropdown-item" to="/camisetas">
                  Camisetas
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/sudaderas">
                  Sudaderas
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/gorras">
                  Gorras
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/llaveros">
                  Llaveros
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/tazas">
                  Tazas
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/cartitas">
                  Cartitas
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/figuras">
                  Figuras de Accion
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/boletos">
                  Boletos
                </Link>
              </li>
            </ul>
          </div>
        </header>
      </div>
    </div>
  )
}

export default Header
