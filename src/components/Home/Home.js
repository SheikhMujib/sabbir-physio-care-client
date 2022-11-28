import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import useTitle from "../../hooks/useTitle";
import Booking from "../Booking/Booking";
import Contact from "../Contact/Contact";
import Banner from "./Banner/Banner";
import ServiceCard from "./Services/ServiceCard";

const Home = () => {
  useTitle("Home");

  const [services, setServices] = useState([]);
  const { loading } = useContext(AuthContext);

  useEffect(() => {
    fetch("https://sabbir-physio-care-server.vercel.app/limitedservices")
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
    <div>
      <Banner></Banner>

      <div className="my-7">
        <div className="text-center mb-5">
          <p className="text-2xl font-bold text-orange-600">Services</p>
          <h2 className="text-5xl font-semibold mb-3">My Service Area</h2>
          <p>
            I am committed to delivering high-quality service to the people of
            Barisal and to being as transparent as possible about service I
            provide. I am also committed to continuous improvement, and
            receiving regular feedback through patient surveys to ensure I am
            providing the best quality service.
          </p>
        </div>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
        </div>
        <div className="flex justify-center my-5">
          <Link to="/services">
            <button className="btn btn-wide btn-primary">See All</button>
          </Link>
        </div>
      </div>

      <Booking></Booking>
      <Contact></Contact>
    </div>
  );
};

export default Home;
