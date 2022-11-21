import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import img from "../../assets/login.png";
import googleLogo from "../../assets/google.png";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Login = () => {
  const { logIn, googleLogin, loading } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();

  if(loading){
    return <div className="grid place-content-center mb-11">
      <button className="btn loading">loading</button>
    </div>
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    logIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };

  const handleGoogleLogin = () => {
    googleLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="hero w-full my-20">
      <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
        <div className="text-center">
          <img src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
          <h1 className="text-5xl text-center font-bold">Login</h1>
          <button
            onClick={handleGoogleLogin}
            className="btn btn-ghost mx-7 mt-5"
          >
            <img
              src={googleLogo}
              alt="Google Logo"
              className="w-7 mr-3 rounded-full"
            />
            Login with Google
          </button>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#p" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-warning" type="submit" value="Login" />
            </div>
          </form>
          <p className="text-center">
            New to Sabbir Physio Care{" "}
            <Link className="font-bold text-orange-600" to="/signup">
              Sign Up
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
