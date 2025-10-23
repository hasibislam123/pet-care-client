import React, { useState, useEffect } from "react";
import { Mail } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router";

const ForgotPassword = () => {
   const [email, setEmail] = useState("");
   const [searchParams] = useSearchParams();
   const navigate = useNavigate();

   useEffect(() => {
      const prefilledEmail = searchParams.get("email");
      if (prefilledEmail) setEmail(prefilledEmail);
   }, [searchParams]);

   const handleReset = (e) => {
      e.preventDefault();
      
   };

   return (
      <div className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gradient-to-tr from-pink-400 via-purple-400 to-indigo-400">
         <div className="absolute w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse -top-10 -left-10"></div>
         <div className="absolute w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse -bottom-10 -right-10"></div>

         <div className="relative z-10 w-full max-w-md p-8 bg-white/20 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/30">
            <h2 className="text-3xl font-extrabold text-center text-white mb-8 drop-shadow-lg flex gap-2 justify-center items-center">
               Reset Password <Mail className="w-8 h-8" />
            </h2>

            <form onSubmit={handleReset} className="space-y-6">
               <div className="relative">
                  <input
                     type="email"
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

               <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold py-2 rounded-full hover:from-indigo-600 hover:to-pink-600 transition"
               >
                  Reset Password
               </button>
            </form>

            <p className="text-center text-white/80 mt-6 text-sm">
               Remembered your password?{" "}
               <button
                  onClick={() => navigate("/auth/login")}
                  className="text-indigo-300 hover:text-white underline"
               >
                  Go back to login
               </button>
            </p>
         </div>
      </div>
   );
};

export default ForgotPassword;
