import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Rating from 'react-rating';

const Review = ({review}) => {
    const { user, img, rating, description } = review;
  return (
    <div className="p-3 shadow-lg bg-slate-200 rounded-xl">
        <img className="w-20 h-20 mx-auto rounded-full" src={img} alt={user} />
      <h3 className="text-3xl">{user}</h3>
      <p className="text-justify">{description}</p>
      <Rating
        initialRating={rating}
        emptySymbol={<FontAwesomeIcon icon={faStar} style={{color: 'gray'}} />}
        fullSymbol={
          <FontAwesomeIcon style={{ color: "goldenrod" }} icon={faStar} />
        }
        readonly
      ></Rating>
    </div>
  );
};

export default Review;