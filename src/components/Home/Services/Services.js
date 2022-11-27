import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  const { loading } = useContext(AuthContext);

  useEffect(() => {
    fetch("https://sabbir-physio-care-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  if (loading) {
    return (
      <div className="grid place-content-center mb-11">
        <button className="btn loading">loading</button>
      </div>
    );
  }

  return (
    <div className="my-7">
      <div className="text-center mb-5">
        <p className="text-2xl font-bold text-orange-600">Services</p>
        <h2 className="text-5xl font-semibold mb-3">My Service Area</h2>
        <p>
          I am committed to delivering high-quality service to the people of
          Barisal and to being as transparent as possible about service I
          provide. I am also committed to continuous improvement, and receiving
          regular feedback through patient surveys to ensure I am providing the
          best quality service.
        </p>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
