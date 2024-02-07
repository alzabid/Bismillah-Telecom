import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import About from "../Pages/About";
import Area from "../Pages/Area";
import Packages from "../Pages/Packages";
import Services from "../Pages/Services";
import Media from "../Pages/Media";
import ErrorPage from "../Pages/ErrorPage";
import Payment from "../Pages/Payment";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/area",
        element: <Area />,
      },
      {
        path: "/packages",
        element: <Packages />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/media",
        element: <Media />,
      },
      {
        path: "/payment",
        element: <Payment />,
      },
      // {
      //   path: "login",
      //   element: <Login />,
      // },
      // {
      //   path: "register",
      //   element: <Register />,
      // },
    ],
  },
]);
export default Routes;
