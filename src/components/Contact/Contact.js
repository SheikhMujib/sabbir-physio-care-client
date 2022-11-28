import React from "react";
import { HiOutlineLocationMarker, HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { SlSocialFacebook } from "react-icons/sl";

const Contact = () => {
  return (
    <div className="text-center my-11 text-xl">
      <h2 className="text-5xl font-semibold mb-3">Contact</h2>
      <p>
        Sabbir Physio Care is the best quality physiotherapy service provider in
        Barisal city.
      </p>
      <div className="grid md:grid-cols-4 gap-3">
        <div className="card-normal w-full bg-base-100 shadow-xl">
          <div className="card-body items-center">
            <div className="text-5xl">
              <HiOutlineLocationMarker></HiOutlineLocationMarker>
            </div>
            <h2 className="text-2xl font-bold">Address</h2>
            <p>Korim Kutir, Nobogram Road, Barisal Sadar.</p>
          </div>
        </div>
        <div className="card-normal w-full bg-base-100 shadow-xl">
          <div className="card-body items-center">
            <div className="text-5xl">
              <HiOutlinePhone></HiOutlinePhone>
            </div>
            <h2 className="text-2xl font-bold">Phone</h2>
            <p>01711000000</p>
          </div>
        </div>
        <div className="card-normal w-full bg-base-100 shadow-xl">
          <div className="card-body items-center">
            <div className="text-5xl">
              <HiOutlineMail></HiOutlineMail>
            </div>
            <h2 className="text-2xl font-bold">Email</h2>
            <p>sabbirphysio@gmail.com</p>
          </div>
        </div>
        <div className="card-normal w-full bg-base-100 shadow-xl">
          <div className="card-body items-center">
            <div className="text-5xl">
                <SlSocialFacebook></SlSocialFacebook>
            </div>
            <h2 className="text-2xl font-bold">Facebook</h2>
            <p>https://www.facebook.com/sabbirphysio</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
