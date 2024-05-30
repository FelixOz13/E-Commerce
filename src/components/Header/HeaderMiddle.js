import './Header.css'

const HeaderMiddle = () => {
  return (
    <header className="header-middle">
      <a href="https://banderamusical.com/" target="_blank" rel="noopener noreferrer">
        <img
          className="logo"
          src="./images/icon.png"
          alt="Icon"
          width="100px"
          height="100px"
        />
      </a>
      <div className="search-bar-container">
        <input
          className="searchbar-1"
          type="text"
          placeholder="Ingresa tu Grupo Favorito Aqui 🔍︎"
        />
      </div>
    </header>
  );
}

export default HeaderMiddle;
