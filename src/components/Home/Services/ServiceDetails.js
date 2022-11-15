import React from "react";
import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const { title, img, description } = useLoaderData();
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
        content
      </div>
    </div>
  );
};

export default ServiceDetails;
