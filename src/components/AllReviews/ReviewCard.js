import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const ReviewCard = ({ review }) => {
  const { user } = useContext(AuthContext);
  const { serviceName, photo } = review;

  return (
    <div className="card card-side bg-base-100 shadow-xl mb-5">
      <div className="avatar mt-7 ml-3">
        <div className="w-24 h-24 rounded-full">
          <img src={photo || user?.photoURL} alt="customerPhoto" />
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">{serviceName}</h2>
        <p>{review.review}</p>
        <p>Reviewed by {review.customer}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
