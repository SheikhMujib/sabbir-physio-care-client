import React, { useEffect, useState } from "react";

const ReviewRow = ({myReview}) => {
    const {serviceName, review, customer, email, service} = myReview;
    const [serviceReview, setServiceReview] = useState({});

    useEffect(()=>{
      fetch(`http://localhost:5000/services/${service}`)
      .then(res => res.json())
      .then(data => setServiceReview(data))
    }, [service])
  return (
    <tr>
      <th>
        <label>
          <button className="btn btn-ghost">X</button>
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="rounded w-24 h-24">
              {
                serviceReview?.img &&
                <img
                src={serviceReview.img}
                alt="Avatar Tailwind CSS Component"
              />
              }
            </div>
          </div>
          <div>
            <div className="font-bold">{serviceName}</div>
            <div className="text-sm opacity-50">United States</div>
          </div>
        </div>
      </td>
      <td>
        {review}
        <br />
        <span className="badge badge-ghost badge-sm">
          Reviewed by {customer}
        </span>
        <br />
        <span className="badge badge-ghost badge-sm">
          email: {email}
        </span>
      </td>
      <td>Purple</td>
      <th>
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
  );
};

export default ReviewRow;
