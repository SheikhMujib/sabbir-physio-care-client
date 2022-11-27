import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import ReviewRow from "./ReviewRow";
import toast from "react-hot-toast";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [myReviews, setMyReviews] = useState({});

  useEffect(() => {
    fetch(
      `https://sabbir-physio-care-server.vercel.app/reviews?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setMyReviews(data));
  }, [user?.email]);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure to delete this review?");
    if (proceed) {
      fetch(`https://sabbir-physio-care-server.vercel.app/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            toast("Deleted Successfully");
            const remaining = myReviews.filter(
              (myReview) => myReview._id !== id
            );
            setMyReviews(remaining);
          }
        });
    }
  };
  return (
    <div>
      {myReviews.length > 0 ? (
        <h3 className="text-center mb-3 text-xl">
          You have {myReviews.length} reviews
        </h3>
      ) : (
        <h3 className="text-center mb-3 text-xl">No reviews were added</h3>
      )}
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
              <th>Update Review</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(myReviews)
              ? myReviews.map((myReview) => (
                  <ReviewRow
                    key={myReview._id}
                    myReview={myReview}
                    handleDelete={handleDelete}
                  ></ReviewRow>
                ))
              : null}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReviews;
