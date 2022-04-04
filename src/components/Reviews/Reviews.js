import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div>
            <div className='grid grid-cols-3 gap-11 px-10 my-10'>
                {
                    reviews.map(review => <Review 
                        key={review.id} 
                        review={review}
                        ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;