import { createBrowserRouter } from "react-router";
import error from '../assets/visuals-JpTY4gUviJM-unsplash.jpg';
import HomeLayout from "../Laytout/HomeLayout";
import Services from "../Page/Services";
import MyProfile from "../Page/MyProfile";
import Categorynews from "../Page/Categorynews";
import Home from "../Page/Home";
import Login from "../Page/Login";
import Register from "../Page/Register";
import AuthLayout from "../Laytout/AuthLayout";
import Details from "../Page/Details";
import PrivateRouter from "../Provider/PrivateRouter";
import { CircleLoader } from "react-spinners";
import ForgotPassword from "../Components/ForgotPassword";
import About from "../Page/About";
import Contact from "../Page/Contact";
import Support from "../Page/Support";

const router = createBrowserRouter([
   {
      path: "/",
      element: <HomeLayout></HomeLayout>,
      children: [
         {
            path: "/",
            element: <Home></Home>,
         },
         {
            path: "/service",
            element: <Services></Services>,
         },
         {
            path: "/about",
            element: <About></About>,
         },
         {
            path: "/contact",
            element: <Contact></Contact>,
         },
         {
            path: "/support",
            element: <Support></Support>,
         },
         {
            path: "/myprofile",
            element: (
               <PrivateRouter>
                  <MyProfile></MyProfile>
               </PrivateRouter>
            ),
         },
         {
            path: "/category/:id",
            element: <Categorynews />,
            loader: () => fetch("/cart.json"),
            hydrateFallbackElement: <CircleLoader color="#fb8500" />,
         },
      ],
   },
   {
      path: "/auth",
      element: <AuthLayout></AuthLayout>,
      children: [
         {
            path: "/auth/login",
            Component: Login,
         },
         {
            path: "/auth/register",
            Component: Register,
         },
         {
            path: "/auth/forgot-password", 
            Component: ForgotPassword,
         },
      ],
   },
   {
      path: "/detail/:id",
      element: <Details></Details>,
      loader: () => fetch("/cart.json"),
      hydrateFallbackElement: <CircleLoader color="#fb8500" />,
   },
   {
      path: "/*",
      element: <img src={error} alt="Error Page" />,
   },
]);

export default router;