import React from "react";

const ServiceCard = ({ service }) => {
  const { img, title, price, description } = service;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-2xl font-semibold text-orange-600">
          Price: ${price}
        </p>
        <p>{description.slice(0, 100)}...</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
