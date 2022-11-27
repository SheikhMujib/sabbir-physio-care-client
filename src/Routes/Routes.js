import { createBrowserRouter } from "react-router-dom";
import AllReviews from "../components/AllReviews/AllReviews";
import Blogs from "../components/Blogs/Blogs";
import Home from "../components/Home/Home";
import ServiceDetails from "../components/Home/Services/ServiceDetails";
import Services from "../components/Home/Services/Services";
import Login from "../components/Login/Login";
import MyReviews from "../components/MyReviews/MyReviews";
import Signup from "../components/Signup/Signup";
import UpdateReview from "../components/Update/UpdateReview";
import Main from "../layout/Main/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/services/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/reviews/:id",
        element: <AllReviews></AllReviews>,
        loader: ({params})=> fetch(`http://localhost:5000/reviews/${params.id}`)
      },
      {
        path: "/myreviews",
        element: <MyReviews></MyReviews>
      },
      {
        path: "/updatereview/:id",
        element: <UpdateReview></UpdateReview>,
        loader: ({params})=> fetch(`http://localhost:5000/reviews/${params.id}`)
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>
      }
    ],
  },
]);

export default router;
