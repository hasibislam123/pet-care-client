import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import { toast, Toaster } from "react-hot-toast";
import { FaStar, FaRegClock, FaTag, FaUserMd } from "react-icons/fa";
import { Eye, EyeOff } from "lucide-react";

const Details = () => {
  const data = useLoaderData() || [];
  const { id } = useParams();
  const [news, setNews] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false); 

  useEffect(() => {
    try {
      if (data && Array.isArray(data) && data.length > 0) {
        const details = data.find((singleNews) => singleNews && singleNews.id == id);
        setNews(details || null);
      } else {
        setNews(null);
      }
    } catch (error) {
      console.error("Error finding news item:", error);
      setNews(null);
    }
  }, [data, id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Service booked successfully!");
    setFormData({ name: "", email: "", password: "" });
  };

  // Handle case where data is empty or invalid
  if (!data || !Array.isArray(data)) {
    return (
      <div className="text-center mt-20 text-xl text-gray-700">
        No data available
      </div>
    );
  }

  if (!news) {
    return (
      <div className="text-center mt-20 text-xl text-gray-700">
        Service not found
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6">
      <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
        {/* Header with breadcrumb */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white p-6">
          <h1 className="text-3xl font-bold">{news.serviceName}</h1>
          <p className="mt-2 opacity-90">{news.category}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
          {/* Left: Image Section */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src={news.image || "https://via.placeholder.com/600x400"}
              alt={news.serviceName}
              className="w-full h-96 object-cover"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/600x400?text=Image+Not+Available";
              }}
            />
          </div>

          {/* Right: Details + Form */}
          <div className="flex flex-col">
            <div className="flex-grow">
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                  <FaTag className="mr-2" /> ${news.price}
                </span>
                <span className="flex items-center bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">
                  <FaStar className="mr-2" /> {news.rating}
                </span>
                <span className="flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full">
                  <FaRegClock className="mr-2" /> {news.slotsAvailable} slots
                </span>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">Service Description</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {news.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-xl">
                  <h3 className="font-semibold text-lg mb-2 flex items-center">
                    <FaUserMd className="mr-2 text-purple-600" /> Provider
                  </h3>
                  <p className="text-gray-700">{news.providerName}</p>
                  <p className="text-gray-600 text-sm mt-1">{news.providerEmail}</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-xl">
                  <h3 className="font-semibold text-lg mb-2">Service Details</h3>
                  <p className="text-gray-700">Category: {news.category}</p>
                  <p className="text-gray-700 mt-1">ID: {news.id}</p>
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-2xl shadow-inner">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Book This Service</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      required
                      className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-purple-500 focus:outline-none pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-3 text-gray-500 hover:text-gray-800 transition"
                    >
                      {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-3 px-4 rounded-xl transition transform hover:scale-105"
                >
                  Confirm Booking
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Toaster position="top-right" />
    </div>
  );
};

export default Details;