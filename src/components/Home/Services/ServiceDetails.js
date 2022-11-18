import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const ServiceDetails = () => {
  const {_id, title, img, description } = useLoaderData();
  const { user } = useContext(AuthContext);

  const handleReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = user?.email || 'unregistered';
    const review = form.review.value;

    const newReview = {
      service: _id,
      serviceName: title,
      customer: name,
      email,
      review
    }

    fetch('http://localhost:5000/reviews', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newReview)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.acknowledged){
        alert('Review added successfully')
        form.reset();
      }
    })
    .catch(error => console.error(error))

  };
  return (
    <div className="flex flex-col w-full mb-5">
      <div className="grid card bg-base-300 rounded-box place-items-center">
        <div className="card w-full bg-base-100 shadow-xl">
          <h2 className="text-center font-semibold text-2xl mb-3">{title}</h2>
          <figure>
            <img src={img} alt="Service" />
          </figure>
          <div className="card-body">
            <p>{description}</p>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="grid card bg-base-300 rounded-box place-items-center">
        <form onSubmit={handleReview}>
          <p className="text-xl my-3">
            <label htmlFor="review">PLEASE, WRITE YOUR REVIEW ON {title}</label>
          </p>
          <textarea
            name="review"
            className="textarea textarea-primary w-full h-36 mb-1"
            placeholder="Write Your Review"
            required
          ></textarea>
          <input
            name="name"
            type="text"
            placeholder="Write your name"
            className="input input-bordered w-full mb-3"
            required
          />
          <input
            name="email"
            type="email"
            className="input input-ghost w-full"
            defaultValue={user?.email}
            hidden
          />
          <button className="btn btn-outline btn-primary mb-3">
            Share Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default ServiceDetails;
