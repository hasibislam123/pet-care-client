import React from 'react';
import { FaPaw, FaHeart, FaUsers, FaAward } from 'react-icons/fa';
import winter from '../assets/winter.jpg'
import doctor from '../assets/doctor.jpg'
import allpet from '../assets/petall1.jpg'
import health from '../assets/health.jpg'

const About = () => {
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Pet Care</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Providing exceptional care for your beloved pets during the chilly winter months
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-8 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-700 mb-6 text-lg">
                At PetCare, we believe that every pet deserves to stay warm, healthy, and happy during the winter season. 
                Our mission is to provide comprehensive winter care solutions that keep your furry friends comfortable 
                and protected from the cold.
              </p>
              <p className="text-gray-700 text-lg">
                With years of experience in pet care and a team of dedicated professionals, we offer specialized 
                services tailored to meet the unique needs of different pets in cold weather conditions.
              </p>
            </div>
            <div className="flex justify-center">
              <span className="   border-dashed  w-full h-96" >
               <img className='rounded-2xl' src={winter} alt="" />
               </span>
               
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaPaw className="text-purple-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Pet First</h3>
              <p className="text-gray-600">
                Every decision we make prioritizes the comfort and well-being of your pets above all else.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHeart className="text-indigo-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Compassionate Care</h3>
              <p className="text-gray-600">
                We treat every pet with love, kindness, and the gentlest touch they deserve.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUsers className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Community</h3>
              <p className="text-gray-600">
                Building a supportive community of pet lovers who share our passion for animal welfare.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaAward className="text-green-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Excellence</h3>
              <p className="text-gray-600">
                Striving for the highest standards in every service we provide to your beloved pets.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <img className="bg-gray-200  w-full h-64" src={doctor} alt="" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Dr. Sarah Johnson</h3>
                <p className="text-purple-600 mb-3">Chief Veterinarian</p>
                <p className="text-gray-600">
                  With over 15 years of experience in pet care, Dr. Johnson specializes in winter health concerns.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <img className="bg-gray-200  w-full h-64" src={allpet} alt="" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Michael Chen</h3>
                <p className="text-purple-600 mb-3">Grooming Specialist</p>
                <p className="text-gray-600">
                  Michael's expertise in pet grooming ensures your pets look and feel their best all winter long.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <img className="bg-gray-200  w-full h-64" src={health} alt="" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Emma Rodriguez</h3>
                <p className="text-purple-600 mb-3">Nutrition Advisor</p>
                <p className="text-gray-600">
                  Emma creates customized nutrition plans to keep pets healthy and energized during cold months.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Join Our Pet Care Community</h2>
          <p className="text-purple-100 text-xl mb-6 max-w-2xl mx-auto">
            Experience the difference that professional, compassionate pet care can make this winter.
          </p>
          <button className="bg-white text-purple-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition">
            Book a Service
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;