import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';

const HeaderTop = () => {
  return (
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
        <div className="cartdiv">
          <a href="https://wa.me/523324949195">
            <span>
              <FaWhatsapp className="whatsapp-icon" />
            </span>
          </a>
        </div>
        <div className="cartdiv">
        <Link to="/cart">
          <img src="images/cart.svg" alt="cart" />
        </Link>
        </div>
        <div className="userdiv">
        <Link to="/user">
          <img src="images/user.svg" alt="user" />
        </Link>
        </div>
      </div>
    </header>
  );
}

export default HeaderTop;
