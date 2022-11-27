import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';

const AllReviews = () => {
    const [reviews, setReviews] = useState([]);
  console.log(reviews)

  useEffect(()=>{
    fetch('http://localhost:5000/reviews')
    .then(res => res.json())
    .then(data => setReviews(data))
  }, []);
    return (
        <div>
          <h1 className='text-2xl text-center my-5'>All reviews by customers </h1>
          {
            reviews.map(review => <ReviewCard
            key={review._id}
            review={review}
            ></ReviewCard>)
          }
        </div>
    );
};

export default AllReviews;