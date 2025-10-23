import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { useLoaderData, useParams } from "react-router";
import { toast, Toaster } from "react-hot-toast";
import { FaStar } from "react-icons/fa";
import { Eye, EyeOff } from "lucide-react";

const Details = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [news, setNews] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [showPassword, setShowPassword] = useState(false); 

  useEffect(() => {
    if (data && data.length > 0) {
      const details = data.find((singleNews) => singleNews.id == id);
      setNews(details || null);
    }
  }, [data, id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    toast("Service booked successfully!");
    setFormData({ name: "", email: "" });
  };

  if (!news) {
    return (
      <div>
        <Navbar />
        <div className="text-center mt-20 text-xl text-gray-700">Loading...</div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="max-w-5xl mx-auto p-6">
        <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col md:flex-row gap-6">
          {/* Left: Image Section */}
          <div className="md:w-1/2">
            <img
              src={news.image || "https://via.placeholder.com/400x300"}
              alt={news.title}
              className="rounded-xl w-full h-96 object-cover"
            />
          </div>

          {/* Right: Details + Form */}
          <div className="md:w-1/2 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2 text-gray-800">{news.title}</h1>
              {news.category && (
                <p className="text-gray-600 mb-3">
                  <span className="font-semibold">Category:</span> {news.category}
                </p>
              )}
              <p className="text-lg font-semibold text-gray-700 mb-1">
                Provider: {news.providerName}
              </p>
              <p className="text-gray-600 mb-4">{news.providerEmail}</p>
              <p className="text-gray-700 mb-4">{news.description}</p>
              <p className="text-gray-700 mb-2">
                <span className="font-semibold">Price:</span> ${news.price}
              </p>
              <p className="text-gray-700 mb-2 flex gap-2 items-center">
                <span className="font-semibold">Rating:</span> {news.rating} <FaStar className="text-yellow-500" />
              </p>
              <p className="text-gray-700 mb-2">
                <span className="font-semibold">Slots Available:</span> {news.slotsAvailable}
              </p>
            </div>

            {/* Booking Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-6">
              <input
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="border border-gray-300 rounded-md p-3 w-full focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />

              {/* Password with toggle  */}
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="border border-gray-300 rounded-md p-3 w-full focus:ring-2 focus:ring-blue-400 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-500 hover:text-gray-800 transition"
                >
                  {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
                </button>
              </div>

              <button
                type="submit"
                className="mt-4 bg-gradient-to-r from-indigo-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600 text-white font-semibold py-2 px-6 rounded-lg transition"
              >
                Book Now
              </button>
            </form>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Details;
