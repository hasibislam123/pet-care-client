import React, { useContext, useState } from "react";
import { Menu } from "lucide-react";
import { Link, NavLink } from "react-router";
import { BiUser } from "react-icons/bi";
import Marquee from "react-fast-marquee";
import { AuthContext } from "../Provider/AuthProvider";
import { FcGoogle, FcOk } from "react-icons/fc";
import { toast } from "react-toastify";

const Navbar = () => {
   const { user, logout } = useContext(AuthContext);
   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

   const handleLogout = () => {
      logout()
         .then(() => toast.success("You logged out successfully!"))
         .catch((error) => toast.error(error.message));
   };

   return (
      <nav className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white shadow-md sticky top-0 z-50">
         <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between h-16 items-center gap-3">

               <div className="grid grid-cols-1">
                  <div className="flex-shrink-0 text-2xl font-bold tracking-wide">
                     PetCare
                  </div>

                  {/* Show user email below logo if logged in */}
                  {user && (
                     <span className="text-sm text-white flex items-center mt-1">
                        {user.email}
                        <FcOk className="ml-1" />
                     </span>
                  )}
               </div>

               {/* Marquee */}
               <div className="w-[600px] border-2 rounded-2xl px-3 hidden md:block">
                  <Marquee pauseOnHover={true}>
                     <span className="bg-gradient-to-r from-[#e77457] via-[#e85d04] to-[#ffba08] bg-clip-text text-transparent font-bold text-lg rounded-2xl">
                        Keep your furry friends warm and healthy during the chilly season. Explore winter care tips, grooming services, and cozy outfits.
                     </span>
                  </Marquee>
               </div>

               {/* Desktop Menu */}
               <div className="hidden md:flex items-center space-x-6">
                  <NavLink to='/' className="hover:text-yellow-300 transition">
                     Home
                  </NavLink>
                  <NavLink to='/service' className="hover:text-yellow-300 transition px-3 py-2 rounded-3xl">
                     Services
                  </NavLink>
                  <NavLink to='/myprofile' className="hover:text-yellow-300 transition px-3 py-2 rounded-3xl flex">
                     Profile
                  </NavLink>

                  <div className="flex items-center space-x-2">
                     {user ? (
                        <>
                           {/* User Image */}
                           {user.photoURL ? (
                              <img
                                 src={user.photoURL}
                                 alt={user.displayName || "User"}
                                 className="w-8 h-8 rounded-full object-cover border-2 border-white"
                              />
                           ) : (
                              <BiUser className="text-2xl" />
                           )}

                           


                           {/* Logout Button */}
                           <button
                              onClick={handleLogout}
                              className="bg-transparent border-2 border-white px-2 py-1 rounded-lg hover:bg-white hover:text-purple-700 transition"
                           >
                              Logout
                           </button>
                        </>
                     ) : (
                        <>
                           <BiUser className="text-2xl" />
                           <Link
                              to="/auth/login"
                              className="bg-transparent border-2 border-white px-4 py-1 rounded-lg hover:bg-white hover:text-purple-700 transition"
                           >
                              Login
                           </Link>
                           
                        </>
                     )}
                  </div>
               </div>

               {/* Mobile Menu Button */}
               <div className="md:hidden flex items-center">
                  <button
                     onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                     className="focus:outline-none"
                  >
                     <Menu size={28} />
                  </button>
               </div>
            </div>
         </div>

         {/* Mobile Menu */}
         {isMobileMenuOpen && (
            <div className="md:hidden bg-purple-700">
               <NavLink to='/' className="block px-4 py-2 text-white hover:bg-purple-600 rounded-3xl">
                  Home
               </NavLink>
               <NavLink to='/service' className="block px-4 py-2 text-white hover:bg-purple-600 rounded-3xl">
                  Services
               </NavLink>
               <NavLink to='/myprofile' className=" block px-4 py-2 text-white hover:bg-purple-600 rounded-3xl">
                  Profile
               </NavLink>

               <div className="flex items-center space-x-2">
                  {user ? (
                     <>
                        {/* User Photo when logged in */}
                        {user.photoURL ? (
                           <img
                              src={user.photoURL}
                              alt={user.displayName || "User"}
                              className="w-8 h-8 rounded-full object-cover border-2 border-white"
                           />
                        ) : (
                           <BiUser className="text-2xl" />
                        )}

                        {/* Logout Button */}
                        <button
                           onClick={handleLogout}
                           className="bg-transparent border-2 border-white px-2 py-1 rounded-lg hover:bg-white hover:text-purple-700 transition"
                        >
                           Logout
                        </button>
                     </>
                  ) : (
                     <>
                        {/* Show BiUser icon only if not logged in */}
                        <BiUser className="text-2xl" />
                        <Link
                           to="/auth/login"
                           className="bg-transparent border-2 border-white px-4 py-1 rounded-lg hover:bg-white hover:text-purple-700 transition"
                        >
                           Login
                        </Link>
                        
                     </>
                  )}
               </div>
            </div>
         )}
      </nav>
   );
};

export default Navbar;
