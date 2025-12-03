import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router"; 

const Cart = ({ news }) => {
   const { id } = news; 
   
   return (
      <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 m-4 flex flex-col h-full">
         {/* Image */}
         <div className="relative h-48 overflow-hidden">
            <img
               src={news.image}
               alt={news.serviceName}
               className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
            />
            {/* Category badge */}
            <span className="absolute top-3 left-3 bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
               {news.category}
            </span>
         </div>

         {/* Content */}
         <div className="p-6 flex flex-col flex-grow">
            <h2 className="text-xl font-bold text-gray-800 mb-2">{news.serviceName}</h2>
            <p className="text-gray-600 text-sm mb-4 flex-grow">{news.description}</p>

            <p className="text-gray-700 text-sm mb-1">
               <span className="font-semibold">Provider:</span> {news.providerName}
            </p>
            <p className="text-gray-700 text-sm mb-4">
               <span className="font-semibold">Email:</span> {news.providerEmail}
            </p>

            <div className="flex items-center justify-between text-gray-800 mb-4">
               <span className="font-bold text-lg">${news.price}</span>
               <span className="flex items-center">
                  <FaStar className="text-yellow-400 mr-1" />
                  {news.rating}
               </span>
               <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full">
                  {news.slotsAvailable} slots
               </span>
            </div>

            <Link
               to={`/detail/${id}`} 
               className="w-full p-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-2 rounded-xl hover:scale-105 transition-transform duration-300 text-center"
            >
               View Details 
            </Link>
         </div>
      </div>
   );
};

export default Cart;