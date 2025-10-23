import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
   return (
      <footer className="bg-purple-900 text-white py-12">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Contact Info */}
            <div>
               <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
               <p>Email: info@petcare.com</p>
               <p>Phone: +880 1234 56 <span className="text-center">****</span> </p>
               <p>Address: 123 Winter Street, Dhaka, Bangladesh</p>
            </div>

            {/* Social Links */}
            <div className="text-center md:text-left">
               <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
               <div className="flex gap-4 justify-center md:justify-start">
                  <a href="#" className="hover:text-yellow-400 transition"><FaFacebookF /></a>
                  <a href="#" className="hover:text-yellow-400 transition"><FaTwitter /></a>
                  <a href="#" className="hover:text-yellow-400 transition"><FaInstagram /></a>
                  <a href="#" className="hover:text-yellow-400 transition"><FaLinkedinIn /></a>
               </div>
            </div>

            {/* Privacy Policy */}
            <div className="text-center md:text-left">
               <h3 className="text-xl font-semibold mb-4">Legal</h3>
               <a href="#privacy" className="hover:text-yellow-400 transition block">Privacy Policy</a>
               <a href="#terms" className="hover:text-yellow-400 transition block">Terms of Service</a>
            </div>
         </div>

         {/* Bottom Line */}
         <div className="mt-8 border-t border-purple-700 pt-4 text-center text-sm text-purple-300">
            &copy; 2025 PetCare. All rights reserved.
         </div>
      </footer>
   );
};

export default Footer;
