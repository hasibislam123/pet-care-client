import { PawPrint, Eye, EyeOff } from "lucide-react";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Contexts/AuthContext";
import toast from "react-hot-toast";

const Register = () => {
   const { createUser, setUser, updateUser, signInWithGoogle } = useContext(AuthContext) || {};
   const [showPassword, setShowPassword] = useState(false);
   const navigate = useNavigate();

   //  Google Sign-In
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
            setUser && setUser(user);
            toast(`Welcome ${user.displayName || "User"}!`, {
               style: {
                  borderRadius: "10px",
                  background: "#333",
                  color: "#fff",
               },
            });
            navigate("/"); // redirect to home after success
         })
         .catch((error) => {
            console.error("Google Sign-In Error:", error);
            console.error("Error code:", error.code);
            console.error("Error message:", error.message);
            
            let errorMessage = error.message;
            // Handle common Firebase Google auth errors
            if (error.code === 'auth/popup-blocked') {
               errorMessage = "Popup blocked by browser. Please allow popups for this site.";
            } else if (error.code === 'auth/cancelled-popup-request') {
               errorMessage = "Authentication popup was closed.";
            } else if (error.code === 'auth/popup-closed-by-user') {
               errorMessage = "Google sign in was cancelled.";
            } else if (error.code === 'auth/internal-error') {
               errorMessage = "Internal error occurred. Please try again.";
            }
            
            toast(errorMessage, {
               style: {
                  borderRadius: "10px",
                  background: "#ffe169",
                  border: "2px solid black",
                  color: "#000",
               },
            });
         });
   };

   //  Normal Register
   const handleRegister = (e) => {
      e.preventDefault();
      
      if (!createUser || !updateUser || !setUser) {
         alert("Authentication is not available");
         return;
      }
      
      const form = e.target;
      const name = form.name.value;
      const email = form.email.value;
      const photo = form.photo.value;
      const password = form.password.value;

      // Password validation
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

      // Create user
      createUser(email, password)
         .then((userCredential) => {
            const user = userCredential.user;
            updateUser({ displayName: name, photoURL: photo })
               .then(() => {
                  setUser && setUser({ ...user, displayName: name, photoURL: photo });
                  alert("Registration successful!");
                  form.reset();
                  navigate("/"); // redirect after success
               })
               .catch((error) => {
                  console.error("Profile update error:", error);
                  setUser && setUser(user);
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

               {/* Password */}
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

               {/* Divider */}
               <div className="flex items-center justify-center my-6">
                  <div className="flex-grow h-px bg-white/40"></div>
                  <span className="px-4 text-white text-sm font-medium">or</span>
                  <div className="flex-grow h-px bg-white/40"></div>
               </div>

               {/* Google Sign-In */}
               <button
                  type="button"
                  onClick={handleGoogleSignin}
                  className="w-full rounded-3xl bg-white text-black border border-gray-200 py-2 flex justify-center items-center gap-2 hover:bg-gray-100 transition"
               >
                  <svg aria-label="Google logo" width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                     <g>
                        <path fill="#fff" d="M0 0H512V512H0z"></path>
                        <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
                        <path fill="#4285f4" d="M386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
                        <path fill="#fbbc02" d="M90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
                        <path fill="#ea4335" d="M153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
                     </g>
                  </svg>
                  Login with Google
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