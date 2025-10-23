import { PawPrint, Eye, EyeOff } from "lucide-react";
import React, { useContext, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
   const { createUser, setUser, updateUser } = useContext(AuthContext);
   const [showPassword, setShowPassword] = useState(false); //  state for password toggle

   const handleRegister = (e) => {
      e.preventDefault();
      const form = e.target;
      const name = form.name.value;
      const email = form.email.value;
      const photo = form.photo.value;
      const password = form.password.value;

      //  Password validation
      if (password.length < 6) {
         alert("Password must be at least 6 characters long.");
         return;
      }
      if (!/[A-Z]/.test(password)) {
         alert("Password must contain at least one uppercase letter.");
         return;
      }
      if (!/[a-z]/.test(password)) {
         alert("Password must contain at least one lowercase letter.");
         return;
      }

      // Create user with email & password
      createUser(email, password)
         .then((userCredential) => {
            const user = userCredential.user;

            updateUser({ displayName: name, photoURL: photo })
               .then(() => {
                  setUser({ ...user, displayName: name, photoURL: photo });
                  alert(" Registration successful!");
                  form.reset();
               })
               .catch((error) => {
                  console.error("Profile update error:", error);
                  setUser(user);
               });
         })
         .catch((error) => {
            console.error("Registration error:", error);
            alert(error.message);
         });
   };

   return (
      <div className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gradient-to-tr from-pink-400 via-purple-400 to-indigo-400">
         {/* Background effects */}
         <div className="absolute w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse -top-10 -left-10"></div>
         <div className="absolute w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse -bottom-10 -right-10"></div>

         <div className="relative z-10 w-full max-w-lg p-10 bg-white/20 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/30">
            <h2 className="text-4xl font-extrabold text-center text-white mb-8 drop-shadow-lg flex gap-4 justify-center items-center">
               Create Account <PawPrint className="w-10 h-10" />
            </h2>

            <form onSubmit={handleRegister} className="space-y-6">
               {/* Full Name */}
               <div className="relative">
                  <input
                     type="text"
                     name="name"
                     required
                     className="peer w-full px-4 pt-6 pb-2 bg-transparent border-b-2 border-white/50 text-white placeholder-transparent focus:outline-none focus:border-white transition"
                     placeholder="Full Name"
                  />
                  <label
                     htmlFor="name"
                     className="absolute left-4 top-2 text-white/70 text-sm transition-all 
                     peer-placeholder-shown:top-6 peer-placeholder-shown:text-base 
                     peer-placeholder-shown:text-white/50 peer-focus:top-2 
                     peer-focus:text-sm peer-focus:text-white"
                  >
                     Full Name
                  </label>
               </div>

               {/* Email */}
               <div className="relative">
                  <input
                     type="email"
                     name="email"
                     required
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

               {/* Photo URL */}
               <div className="relative">
                  <input
                     type="text"
                     name="photo"
                     className="peer w-full px-4 pt-6 pb-2 bg-transparent border-b-2 border-white/50 text-white placeholder-transparent focus:outline-none focus:border-white transition"
                     placeholder="Photo URL"
                  />
                  <label
                     htmlFor="photo"
                     className="absolute left-4 top-2 text-white/70 text-sm transition-all 
                     peer-placeholder-shown:top-6 peer-placeholder-shown:text-base 
                     peer-placeholder-shown:text-white/50 peer-focus:top-2 
                     peer-focus:text-sm peer-focus:text-white"
                  >
                     Photo URL
                  </label>
               </div>

               {/* Password with Toggle */}
               <div className="relative">
                  <input
                     type={showPassword ? "text" : "password"}
                     name="password"
                     required
                     className="peer w-full px-4 pt-6 pb-2 bg-transparent border-b-2 border-white/50 
                     text-white placeholder-transparent focus:outline-none focus:border-white transition"
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

                  {/* Toggle Button */}
                  <button
                     type="button"
                     onClick={() => setShowPassword(!showPassword)}
                     className="absolute right-4 top-3 text-white/70 hover:text-white transition"
                  >
                     {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
                  </button>
               </div>

               {/* Terms */}
               <div className="flex items-center text-white/80 text-sm">
                  <input type="checkbox" className="mr-2 accent-pink-400" required /> I agree to{" "}
                  <a href="#" className="underline hover:text-white ml-1">
                     Terms & Conditions
                  </a>
               </div>

               {/* Submit */}
               <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-pink-500 to-indigo-500 text-white font-semibold py-2 rounded-full hover:from-pink-600 hover:to-indigo-600 transition"
               >
                  Register
               </button>
            </form>

            <p className="text-center text-white/80 mt-6 text-sm">
               Already have an account?{" "}
               <Link to="/auth/login" className="text-indigo-300 hover:text-white underline">
                  Login
               </Link>
            </p>
         </div>
      </div>
   );
};

export default Register;
