import { PawPrint, Eye, EyeOff } from "lucide-react";
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Contexts/AuthContext";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
   const { signIn, signInWithGoogle } = useContext(AuthContext) || {};
   const location = useLocation();
   const navigate = useNavigate();

   const [showPassword, setShowPassword] = useState(false);
   const [email, setEmail] = useState("");

   // ✅ Google Sign In Function
   const handleGoogleSignin = () => {
      if (!signInWithGoogle) {
         toast("Authentication is not available", {
            style: {
               borderRadius: "10px",
               background: "#ffe169",
               border: "2px solid black",
               color: "#000",
            },
         });
         return;
      }
      
      signInWithGoogle()
         .then((result) => {
            const user = result.user;
            toast(`Welcome, ${user.displayName || "Google User"}!`, {
               style: {
                  borderRadius: "10px",
                  background: "#333",
                  color: "#fff",
               },
            });
            navigate(`${location.state ? location.state : "/"}`);
         })
         .catch((error) => {
            toast(error.message, {
               style: {
                  borderRadius: "10px",
                  background: "#ffe169",
                  border: "2px solid black",
                  color: "#000",
               },
            });
         });
   };

   // ✅ Email/Password Login Function
   const handleLogin = (e) => {
      e.preventDefault();
      
      if (!signIn) {
         toast("Authentication is not available", {
            style: {
               borderRadius: "10px",
               background: "#ffe169",
               border: "2px solid black",
               color: "#000",
            },
         });
         return;
      }
      
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;

      signIn(email, password)
         .then((result) => {
            const user = result.user;
            toast(`Welcome back, ${user.email || "User"}!`, {
               style: {
                  borderRadius: "10px",
                  background: "#333",
                  color: "#fff",
               },
            });
            navigate(`${location.state ? location.state : "/"}`);
         })
         .catch((error) => {
            toast(error.message, {
               style: {
                  borderRadius: "10px",
                  background: "#ffe169",
                  border: "2px solid black",
                  color: "#000",
               },
            });
         });
   };

   return (
      <div className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gradient-to-tr from-indigo-400 via-purple-400 to-pink-400">
         {/* Background animation */}
         <div className="absolute w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse -top-10 -left-10"></div>
         <div className="absolute w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse -bottom-10 -right-10"></div>

         {/* Glassmorphism card */}
         <div className="relative z-10 w-full max-w-md p-8 bg-white/20 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/30">
            <h2 className="text-4xl font-extrabold text-center text-white mb-8 drop-shadow-lg flex gap-3 justify-center items-center">
               Welcome Back <PawPrint className="w-10 h-10" />
            </h2>

            <form onSubmit={handleLogin} className="space-y-6">
               {/* Email field */}
               <div className="relative">
                  <input
                     type="email"
                     name="email"
                     required
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     className="peer w-full px-4 pt-6 pb-2 bg-transparent border-b-2 border-white/50 text-white placeholder-transparent focus:outline-none focus:border-white transition"
                     placeholder="Email Address"
                  />
                  <label
                     htmlFor="email"
                     className="absolute left-4 top-2 text-white/70 text-sm transition-all 
                     peer-placeholder-shown:top-6 peer-placeholder-shown:text-base 
                     peer-placeholder-shown:text-white/50 peer-focus:top-2 
                     peer-focus:text-sm peer-focus:text-white"
                  >
                     Email Address
                  </label>
               </div>

               {/* Password field with toggle */}
               <div className="relative">
                  <input
                     type={showPassword ? "text" : "password"}
                     name="password"
                     required
                     className="peer w-full px-4 pt-6 pb-2 bg-transparent border-b-2 border-white/50 text-white placeholder-transparent focus:outline-none focus:border-white transition"
                     placeholder="Password"
                  />
                  <label
                     htmlFor="password"
                     className="absolute left-4 top-2 text-white/70 text-sm transition-all 
                     peer-placeholder-shown:top-6 peer-placeholder-shown:text-base 
                     peer-placeholder-shown:text-white/50 peer-focus:top-2 
                     peer-focus:text-sm peer-focus:text-white"
                  >
                     Password
                  </label>

                  {/* Toggle button */}
                  <button
                     type="button"
                     onClick={() => setShowPassword(!showPassword)}
                     className="absolute right-4 top-3 text-white/70 hover:text-white transition"
                  >
                     {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
                  </button>
               </div>

               {/* Remember Me / Forgot Password */}
               <div className="flex items-center justify-between text-white/80 text-sm">
                  <label className="flex items-center">
                     <input type="checkbox" className="mr-2 accent-pink-400" /> Remember me
                  </label>
                  <Link
                     to={`/auth/forgot-password?email=${encodeURIComponent(email)}`}
                     className="hover:text-white underline"
                  >
                     Forgot password?
                  </Link>
               </div>

               {/* Submit */}
               <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold py-2 rounded-full hover:from-indigo-600 hover:to-pink-600 transition"
               >
                  Login
               </button>

               {/* Divider */}
               <div className="flex items-center justify-center my-6">
                  <div className="flex-grow h-px bg-white/40"></div>
                  <span className="px-4 text-white text-sm font-medium">or</span>
                  <div className="flex-grow h-px bg-white/40"></div>
               </div>

               {/* Google Login Button */}
               <button
                  type="button"
                  onClick={handleGoogleSignin}
                  className="btn w-full rounded-3xl bg-white text-black border-[#e5e5e5] flex justify-center items-center gap-2 hover:bg-gray-100 transition"
               >
                  <FcGoogle className="text-xl" />
                  Login with Google
               </button>
            </form>

            <p className="text-center text-white/80 mt-6 text-sm">
               Don't have an account?{" "}
               <Link to="/auth/register" className="text-pink-300 hover:text-white underline">
                  Register
               </Link>
            </p>
         </div>
      </div>
   );
};

export default Login;