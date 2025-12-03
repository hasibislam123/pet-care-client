import React from 'react';
import { Outlet } from 'react-router';
import Hero from '../Components/Hero';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import LeftNav from '../Components/HomeLayout/LeftNav';
import Winter_Grooming from  '../assets/Winter-Grooming.jpg'
import Cozy_Apparel from  '../assets/Cozy_Apparel.jpg'
import Nutrition_Plans from  '../assets/Nutrition_Plans.jpg'
import Health_Checkups from  '../assets/Health_Checkups.jpg'

const HomeLayout = () => {
   return (
      <div>
         {/* Section 1: Navigation */}
         <nav>
            <Navbar></Navbar>
            {import.meta.env.VITE_name}
         </nav>
         
         {/* Section 2: Hero Carousel */}
         <Hero></Hero>
         
         <main className="grid grid-cols-1 md:grid-cols-6 min-h-screen gap-6 p-6 md:p-10 lg:p-16">
            {/* Section 3: Category Navigation - Fixed position on mobile and desktop */}
            <section className="LeftNav col-span-1 flex justify-center md:sticky md:top-6 h-fit">
               <div className="md:sticky md:top-6 w-full">
                  <LeftNav />
               </div>
            </section>

            {/* Section 4: Main Content Area */}
            <section className="col-span-1 md:col-span-5 bg-white rounded-xl">
               <Outlet />
            </section>
         </main>
         
         {/* Section 5: Highlighted/Top-rated Items */}
         <section className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <h2 className="text-3xl font-bold text-center mb-8">Top Rated Services</h2>
               <p className="text-center text-gray-600 mb-10">Our most popular services loved by pet owners</p>
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* Placeholder cards - in a real app, these would be dynamic */}
                  <div className="bg-white p-6 rounded-xl shadow-md">
                     <img className="bg-gray-200  rounded-xl w-16 h-16" src={Winter_Grooming} />
                     <h3 className="font-semibold mt-4">Winter Grooming</h3>
                     <p className="text-gray-600 text-sm mt-2">Professional grooming with moisturizing treatments</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md">
                     <img className="bg-gray-200  rounded-xl w-16 h-16" src={Cozy_Apparel} />
                     <h3 className="font-semibold mt-4">Cozy Apparel</h3>
                     <p className="text-gray-600 text-sm mt-2">Custom sweaters and jackets for small breeds</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md">
                     <img className="bg-gray-200  rounded-xl w-16 h-16" src={Nutrition_Plans} />
                     <h3 className="font-semibold mt-4">Nutrition Plans</h3>
                     <p className="text-gray-600 text-sm mt-2">Seasonal dietary recommendations for optimal health</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md">
                     <img className="bg-gray-200  rounded-xl w-16 h-16" src={Health_Checkups} />
                     <h3 className="font-semibold mt-4">Health Checkups</h3>
                     <p className="text-gray-600 text-sm mt-2">Comprehensive winter wellness assessments</p>
                  </div>
               </div>
            </div>
         </section>
         
         {/* Section 6: Promotional/Offer Section */}
         <section className="py-12 bg-gradient-to-r from-purple-600 to-indigo-500 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
               <h2 className="text-3xl font-bold mb-4">Limited Time Winter Offer!</h2>
               <p className="text-xl mb-6">Get 20% off on all grooming services this month</p>
               <button className="bg-white text-purple-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition">
                  Book Now
               </button>
            </div>
         </section>
         
         {/* Section 7: Newsletter Section */}
         <section className="py-12 bg-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
               <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
               <p className="text-gray-600 mb-8">Subscribe to our newsletter for seasonal pet care tips and exclusive offers</p>
               <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <input 
                     type="email" 
                     placeholder="Enter your email" 
                     className="flex-grow px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
                  />
                  <button className="bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-purple-700 transition">
                     Subscribe
                  </button>
               </div>
            </div>
         </section>
         
         {/* Section 8: Footer */}
         <footer>
            <Footer></Footer>
         </footer>
      </div>
   );
};

export default HomeLayout;