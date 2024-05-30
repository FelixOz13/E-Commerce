import { Link } from 'react-router-dom';
import { ImMenu2 } from 'react-icons/im';
import { MdOutlineFavoriteBorder } from 'react-icons/md';

const HeaderBottom = () => {
  return (
    <header className="header-bottom">
      <div className="dropdown">
        <div className="favoritecart">
          <div className="cart-links">
            <Link to="/cart">
              <img
                src="images/cart.svg"
                alt="cart"
                color="goldenrod"
                fontSize={'1.5rem'}
              />
              <span className="cart-span">0</span>
            </Link>
            <Link to="/favorites">
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
          <li><Link className="dropdown-item" to="/rock">Rock</Link></li>
          <li><Link className="dropdown-item" to="/rap">Rap</Link></li>
          <li><Link className="dropdown-item" to="/rockesp">Rock en Español</Link></li>
          <li><Link className="dropdown-item" to="/pop">Pop</Link></li>
          <li><Link className="dropdown-item" to="/banda">Banda</Link></li>
          <li><Link className="dropdown-item" to="/sierno">Sierreños y Norteño</Link></li>
          <li><Link className="dropdown-item" to="/rancheras">Rancheras</Link></li>
          <li><Link className="dropdown-item" to="/pedidos">Pedidos Especiales</Link></li>
        </ul>

        <button
          className="btn btn-secondary dropdown-toggle bg-transparent border-0 me-5 d-flex align-items-center"
          type="button"
          id="dropdownMenuButton2"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <ImMenu2 fontSize="2rem" />
          <span className="dropdown-button">Tipo De Accessorio</span>
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
          <li><Link className="dropdown-item" to="/camisetas">Camisetas</Link></li>
          <li><Link className="dropdown-item" to="/sudaderas">Sudaderas</Link></li>
          <li><Link className="dropdown-item" to="/gorras">Gorras</Link></li>
          <li><Link className="dropdown-item" to="/llaveros">Llaveros</Link></li>
          <li><Link className="dropdown-item" to="/tazas">Tazas</Link></li>
          <li><Link className="dropdown-item" to="/cartitas">Cartitas</Link></li>
          <li><Link className="dropdown-item" to="/figuras">Figuras de Accion</Link></li>
          <li><Link className="dropdown-item" to="/boletos">Boletos</Link></li>
        </ul>
      </div>
    </header>
  );
}

export default HeaderBottom;
