import React from 'react';
import { FaSnowflake, FaPaw, FaShower, FaStethoscope, FaTshirt, FaBed } from 'react-icons/fa';
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";

const Services = () => {
  const services = [
    {
      icon: <FaSnowflake className="text-3xl" />,
      title: "Winter Coat Fitting",
      description: "Custom winter coats and outfits designed to keep your pet warm and stylish during cold months.",
      price: "Starting at $25"
    },
    {
      icon: <FaPaw className="text-3xl" />,
      title: "Paw Protection",
      description: "Specialized balms and protective gear to shield your pet's paws from ice, salt, and cold surfaces.",
      price: "Starting at $15"
    },
    {
      icon: <FaShower className="text-3xl" />,
      title: "Winter Grooming",
      description: "Professional grooming services with winter-safe products to maintain your pet's coat and skin health.",
      price: "Starting at $30"
    },
    {
      icon: <FaStethoscope className="text-3xl" />,
      title: "Health Checkups",
      description: "Comprehensive winter wellness exams to ensure your pet stays healthy throughout the colder months.",
      price: "Starting at $40"
    },
    {
      icon: <FaTshirt className="text-3xl" />,
      title: "Cozy Apparel",
      description: "Hand-knitted sweaters, booties, and accessories to keep your pet comfortable and fashionable.",
      price: "Starting at $20"
    },
    {
      icon: <FaBed className="text-3xl" />,
      title: "Thermal Bedding",
      description: "Insulated beds and heating solutions to ensure your pet stays warm and comfortable indoors.",
      price: "Starting at $35"
    }
  ];

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Winter Pet Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive care solutions designed to keep your furry friends warm, healthy, and happy during the winter season
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-purple-600 font-bold">{service.price}</span>
                <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Special Offer Banner */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-center text-white mb-12">
          <h2 className="text-3xl font-bold mb-4">Winter Care Package Deal</h2>
          <p className="text-purple-100 text-xl mb-6 max-w-2xl mx-auto">
            Get 20% off when you book 3 or more services together. Limited time offer!
          </p>
          <button className="bg-white text-purple-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition">
            View Packages
          </button>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Our Winter Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white w-20 h-20 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md">
                <img  className="bg-gray-200   rounded-xl w-15 h-15" src={img1} />
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Professionals</h3>
              <p className="text-gray-600">
                Our team consists of certified pet care specialists with extensive experience in winter pet care.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-white w-20 h-20 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md">
                <img className="bg-gray-200  rounded-xl w-15 h-15" src={img2} />
              </div>
              <h3 className="text-xl font-bold mb-2">Premium Products</h3>
              <p className="text-gray-600">
                We use only high-quality, pet-safe products specifically designed for winter conditions.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-white w-20 h-20 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md">
                <img className="bg-gray-200  rounded-xl w-15 h-15" src={img3} />
              </div>
              <h3 className="text-xl font-bold mb-2">Satisfaction Guarantee</h3>
              <p className="text-gray-600">
                Not satisfied with our service? We'll re-do it or refund your money - no questions asked.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;