import React, { useState } from 'react'
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from 'react-icons/md'

function Card({ item }) {
  const [isLiked, setIsLiked] = useState(false)

  const handleLikeClick = () => {
    setIsLiked(!isLiked) // Toggle the 'isLiked' state
  }
  let badgeText
  if (item.openSpots === 0) {
    badgeText = 'Producto Agotado'
  } else if (item.openSpots > 0) {
    badgeText = 'Ultimas Piezas Disponibles'
  }

  return (
    <section>
      <div className="scroll-container">
        <div className="scroll-item">
          <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <div className={`card ${isLiked ? 'card-liked' : 'card-zoom'}`}>
              <img
                src={`../t-shirts/${item.coverImg}`}
                className="card--image"
                alt="card"
              />
              <h1 className="band-title">{item.title}</h1>
              {isLiked ? (
                <MdOutlineFavorite fontSize="25px" onClick={handleLikeClick} />
              ) : (
                <MdOutlineFavoriteBorder
                  fontSize="25px"
                  onClick={handleLikeClick}
                />
              )}
              <p className="category">{item.category}</p>
              <p className="description">{item.description}</p>
              <p className="pricetag">{item.pricetag}</p>
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

export default Card
