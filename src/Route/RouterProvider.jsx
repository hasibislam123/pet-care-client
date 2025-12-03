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
import ErrorPage from "../Page/ErrorPage";

// Create a loader function that handles errors gracefully
const cartLoader = async () => {
  try {
    console.log("Attempting to load cart data...");
    const response = await fetch("/cart.json");
    console.log("Response status:", response.status);
    if (!response.ok) {
      console.error(`HTTP error! status: ${response.status}`);
      return []; // Return empty array as fallback
    }
    const data = await response.json();
    console.log("Successfully loaded cart data with", data.length, "items");
    return data;
  } catch (error) {
    console.error("Failed to load cart data:", error);
    return []; // Return empty array as fallback
  }
};

const router = createBrowserRouter([
   {
      path: "/",
      element: <HomeLayout></HomeLayout>,
      errorElement: <ErrorPage />,
      children: [
         {
            path: "/",
            element: <Home></Home>,
            errorElement: <ErrorPage />,
         },
         {
            path: "/service",
            element: <Services></Services>,
            errorElement: <ErrorPage />,
         },
         {
            path: "/about",
            element: <About></About>,
            errorElement: <ErrorPage />,
         },
         {
            path: "/contact",
            element: <Contact></Contact>,
            errorElement: <ErrorPage />,
         },
         {
            path: "/support",
            element: <Support></Support>,
            errorElement: <ErrorPage />,
         },
         {
            path: "/myprofile",
            element: (
               <PrivateRouter>
                  <MyProfile></MyProfile>
               </PrivateRouter>
            ),
            errorElement: <ErrorPage />,
         },
         {
            path: "/category/:id",
            element: <Categorynews />,
            loader: cartLoader,
            hydrateFallbackElement: <CircleLoader color="#fb8500" />,
            errorElement: <ErrorPage />,
         },
      ],
   },
   {
      path: "/auth",
      element: <AuthLayout></AuthLayout>,
      errorElement: <ErrorPage />,
      children: [
         {
            path: "/auth/login",
            Component: Login,
            errorElement: <ErrorPage />,
         },
         {
            path: "/auth/register",
            Component: Register,
            errorElement: <ErrorPage />,
         },
         {
            path: "/auth/forgot-password", 
            Component: ForgotPassword,
            errorElement: <ErrorPage />,
         },
      ],
   },
   {
      path: "/detail/:id",
      element: <Details></Details>,
      loader: cartLoader,
      hydrateFallbackElement: <CircleLoader color="#fb8500" />,
      errorElement: <ErrorPage />,
   },
   {
      path: "/*",
      element: <img src={error} alt="Error Page" onError={(e) => {
        e.target.src = "https://via.placeholder.com/800x600?text=Page+Not+Found";
      }} />,
   },
]);

export default router;