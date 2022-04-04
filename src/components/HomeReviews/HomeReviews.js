import React from 'react';
import { useNavigate } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';

const HomeReviews = () => {
    const [reviews, setReviews] = useReviews();
    const navigate = useNavigate();
    const reviewBtn = () => {
      navigate('/reviews');
    }
    return (
        <div>
            <h1 className='text-5xl'>Customer Reviews(3)</h1>
            <div className='grid grid-cols-3 gap-11 px-10 my-10'>
                {
                    reviews.slice(0, 3).map(review => <Review 
                        key={review.id} 
                        review={review}
                        ></Review>)
                }
            </div>
            <div>
                <button onClick={reviewBtn} className='px-10 py-2 bg-blue-700 rounded-lg'>See All reviews</button>
            </div>
        </div>
    );
};

export default HomeReviews;