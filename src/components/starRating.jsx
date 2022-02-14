import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa'

const StarRating = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div className='flex flex-wrap justify-center'>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <label>
            <input
              type='radio'
              name='rating' 
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
              className='in-line appearance-none'
              />
            <FaStar
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
              className='cursor-pointer'
              color = {ratingValue <= (hover || rating) ? "#ffc107" : "#b0b2b8"}
            />
          </label>
        );   
      })}
    </div>
  );
};

export default StarRating;