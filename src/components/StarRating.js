import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component';

function StarRating({ size = 35, isHalf = true, count = 5 }) {
  const [rating, setRating] = useState(getRandomRating()); // State to store the rating value

  // Function to generate a random value between 2.5 and 5
  function getRandomRating() {
    return (Math.random() * 2.5) + 2.5;
  }

  return (
    <div>
      <ReactStars
        size={size}
        isHalf={isHalf}
        count={count}
        value={rating}
        onChange={(newRating) => setRating(newRating)} // Update the rating value when it changes
      />
    </div>
  );
}

export default StarRating;
