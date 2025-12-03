import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
   return (
      <footer className="bg-purple-900 text-white py-12">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div>
               <h2 className="text-2xl font-bold mb-4">PetCare</h2>
               <p className="text-purple-200 mb-4">
                  Providing the best care for your furry friends during the chilly season. 
                  Professional services and expert advice for happy, healthy pets.
               </p>
            </div>

            {/* Contact Info */}
            <div>
               <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
               <p className="mb-2">Email: info@petcare.com</p>
               <p className="mb-2">Phone: +880 1234 56####</p>
               <p>Address: 123 Winter Street, Dhaka, Bangladesh</p>
            </div>

            {/* Quick Links */}
            <div>
               <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
               <ul className="space-y-2">
                  <li><a href="/" className="hover:text-yellow-400 transition">Home</a></li>
                  <li><a href="/category/1" className="hover:text-yellow-400 transition">All Services</a></li>
                  <li><a href="/service" className="hover:text-yellow-400 transition">Special Offers</a></li>
                  <li><a href="/about" className="hover:text-yellow-400 transition">About Us</a></li>
                  <li><a href="/contact" className="hover:text-yellow-400 transition">Contact</a></li>
               </ul>
            </div>

            {/* Social Links */}
            <div>
               <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
               <div className="flex gap-4 mb-4">
                  <a href="#" className="hover:text-yellow-400 transition text-2xl"><FaFacebookF /></a>
                  <a href="#" className="hover:text-yellow-400 transition text-2xl"><FaTwitter /></a>
                  <a href="#" className="hover:text-yellow-400 transition text-2xl"><FaInstagram /></a>
                  <a href="#" className="hover:text-yellow-400 transition text-2xl"><FaLinkedinIn /></a>
               </div>
               <div className="mt-6">
                  <h3 className="text-xl font-semibold mb-4">Legal</h3>
                  <a href="#privacy" className="hover:text-yellow-400 transition block">Privacy Policy</a>
                  <a href="#terms" className="hover:text-yellow-400 transition block">Terms of Service</a>
               </div>
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