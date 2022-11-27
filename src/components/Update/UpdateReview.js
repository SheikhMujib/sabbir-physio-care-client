import React, { useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const UpdateReview = () => {
  const storedReview = useLoaderData();
  const [review, setReview] = useState(storedReview);

  const handleUpdateReview = (event) => {
    event.preventDefault();
    console.log(review);

    fetch(
      `https://sabbir-physio-care-server.vercel.app/reviews/${storedReview._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(review),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast("Review Updated Successfully");
        }
      });
  };

  const handleInputChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const newReview = { ...review };
    newReview[field] = value;
    setReview(newReview);
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-lg">
          <h1 className="text-2xl font-bold">
            Please, edit and update your review.
          </h1>
          <form onSubmit={handleUpdateReview}>
            <p className="py-6">
              <input
                onChange={handleInputChange}
                type="text"
                name="review"
                defaultValue={storedReview.review}
                className="input input-ghost w-full"
              />
            </p>
            <input
              type="submit"
              value="Update Review"
              className="btn btn-primary"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateReview;
