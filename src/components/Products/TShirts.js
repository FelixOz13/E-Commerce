import React from 'react';
import './products.css';

const TShirts = () => {
  // Array of T-shirt image file names
  const tshirtImages = [
    't-shirt-be.png',
    't-shirt-doors.png',
    't-shirt-dp.png',
    't-shirt-ea.png',
    't-shirt-kq.png',
    't-shirt-led.png',
    't-shirt-lfc.png',
    't-shirt-sp.png',
  ];

  return (
    <div>
      <h1 className="t-shirts">Surtido de Camisetas</h1>
      <p className="t-shirts">Busca tu Grupo Favorito o encarga sobre pedido!</p>
      <div className="tshirt-container">
        {tshirtImages.map((image, index) => (
          <img
            key={index}
            src={`../t-shirts/${image}`}
            alt={`T-Shirt ${index + 1}`}
            className="tshirt-image"
          />
        ))}
      </div>
    </div>
  );
};

export default TShirts;
