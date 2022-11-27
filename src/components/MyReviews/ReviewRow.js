import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const ReviewRow = ({ myReview, handleDelete }) => {
  const { _id, serviceName, review, customer, email, service, photo } = myReview;

  const {user} = useContext(AuthContext);

  const [serviceReview, setServiceReview] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/services/${service}`)
      .then((res) => res.json())
      .then((data) => setServiceReview(data));
  }, [service]);

  return (
    <tr>
      <th>
        <label>
          <button onClick={() => handleDelete(_id)} className="btn btn-ghost">
            X
          </button>
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="rounded w-24 h-24">
              {serviceReview?.img && (
                <img
                  src={serviceReview.img}
                  alt="Avatar Tailwind CSS Component"
                />
              )}
            </div>
          </div>
          <div>
            <div className="font-bold">{serviceName}</div>
          </div>
        </div>
      </td>
      <td>
        {review}
        <br />
        <div className="flex items-center">
        <img src={user?.photoURL || photo} className="w-16 rounded-full" alt="p" />
        <span className="badge badge-ghost badge-sm">
          Reviewed by {user?.displayName || customer}
        </span>
        <br />
        <span className="badge badge-ghost badge-sm">email: {email}</span>
        </div>
      </td>

      <th>
        <Link to={`/updatereview/${_id}`}>
          <button className="btn btn-ghost">Edit Review</button>
        </Link>
      </th>
    </tr>
  );
};

export default ReviewRow;
