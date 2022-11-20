import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ReviewRow from './ReviewRow';

const MyReviews = () => {
    const {user} = useContext(AuthContext);
    const [myReviews, setMyReviews] = useState({});

    useEffect(()=>{
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setMyReviews(data))
    }, [user?.email])
    return (
        <div>
            <h1>You have {myReviews.length} reviews</h1>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Service Name</th>
        <th>Review</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      { Array.isArray(myReviews) ?
        (myReviews).map(myReview => <ReviewRow
        key={myReview._id}
        myReview={myReview}
        ></ReviewRow>)
        :null
      }
    </tbody>
    
  </table>
</div>
        </div>
    );
};

export default MyReviews;