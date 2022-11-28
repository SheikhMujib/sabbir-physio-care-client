import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Header = () => {
  const {user, logOut} = useContext(AuthContext);

  const handleSignout = ()=>{
    logOut()
    .then(()=>{})
    .catch(error=> console.error(error))
  }

  const menuItems = (
    <>
      <li>
        <Link to="/" className="font-semibold">
          HOME
        </Link>
      </li>
      <li>
        <Link to="/services" className="font-semibold">
          SERVICES
        </Link>
      </li>
      {
        user?.email ?
        <>
        <li>
        <Link to="/myreviews" className="font-semibold">
          MY REVIEWS
        </Link>
        </li>
        <li>
        <button onClick={handleSignout} className="btn btn-ghost">SIGNOUT</button>
        </li>
        </>
        :
        <li>
        <Link to="/login" className="font-semibold">
          LOGIN
        </Link>
      </li>
      }
      <li>
        <Link to="/blogs" className="font-semibold">
          BLOGS
        </Link>
      </li>
    </>
    
  );
  return (
    <div className="navbar h-20 mb-12 pt-12 bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <img src={logo} alt="" className="h-16" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <div className="navbar-end">
        <Link to="/booking">
        <button className="btn btn-outline btn-primary">Appoinment</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
