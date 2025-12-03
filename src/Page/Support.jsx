import React, { useState } from 'react';
import { FaQuestionCircle, FaLifeRing, FaBook, FaComments, FaSearch } from 'react-icons/fa';

const Support = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('general');

  // Mock FAQ data
  const faqs = {
    general: [
      {
        question: "How do I book a service for my pet?",
        answer: "You can book a service by visiting our All Services page, selecting the service you need, and filling out the booking form. You'll receive a confirmation email with all the details."
      },
      {
        question: "What areas do you serve?",
        answer: "We currently serve the Dhaka metropolitan area. Please contact us to check if we serve your specific location."
      },
      {
        question: "How far in advance should I book?",
        answer: "We recommend booking at least 24 hours in advance for regular services. For popular time slots during weekends or holidays, we suggest booking a week ahead."
      }
    ],
    billing: [
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards, debit cards, and mobile banking payments. Payment is due at the time of booking."
      },
      {
        question: "Can I get a refund if I cancel my appointment?",
        answer: "Yes, cancellations made at least 24 hours before the scheduled appointment are eligible for a full refund. Cancellations made within 24 hours are eligible for a 50% refund."
      },
      {
        question: "Do you offer any discounts or packages?",
        answer: "Yes, we offer seasonal discounts and loyalty packages for regular customers. Check our Promotions page for current offers."
      }
    ],
    services: [
      {
        question: "What vaccines are required for grooming services?",
        answer: "All pets must be up-to-date on their rabies vaccination. For boarding services, we also require current bordetella and distemper vaccinations."
      },
      {
        question: "How often should I schedule grooming appointments?",
        answer: "For most dogs, we recommend grooming every 6-8 weeks. Cats typically need grooming every 8-12 weeks depending on their coat type."
      },
      {
        question: "Can you accommodate pets with special needs?",
        answer: "Absolutely! Our staff is trained to work with pets that have special needs, including senior pets, pets with mobility issues, and anxious pets. Please inform us of any special requirements when booking."
      }
    ]
  };

  const supportOptions = [
    {
      icon: <FaComments className="text-2xl" />,
      title: "Live Chat",
      description: "Chat with our support team in real-time",
      availability: "Mon-Fri 9AM-8PM, Sat 10AM-6PM"
    },
    {
      icon: <FaQuestionCircle className="text-2xl" />,
      title: "FAQs",
      description: "Find answers to commonly asked questions",
      link: "#faqs"
    },
    {
      icon: <FaBook className="text-2xl" />,
      title: "Knowledge Base",
      description: "Detailed guides and tutorials",
      link: "#knowledge"
    },
    {
      icon: <FaLifeRing className="text-2xl" />,
      title: "Emergency Support",
      description: "24/7 emergency assistance for urgent matters",
      phone: "+880 1234 56####"
    }
  ];

  const filteredFaqs = faqs[activeCategory] || [];

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Support Center</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            How can we help you today? Browse our resources or contact our support team
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-12">
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for help..."
                className="w-full pl-10 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"
              />
            </div>
          </div>
        </div>

        {/* Support Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {supportOptions.map((option, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                {option.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{option.title}</h3>
              <p className="text-gray-600 mb-4">{option.description}</p>
              {option.availability && (
                <p className="text-sm text-gray-500">{option.availability}</p>
              )}
              {option.phone && (
                <p className="text-purple-600 font-medium">{option.phone}</p>
              )}
              {option.link && (
                <a href={option.link} className="text-purple-600 font-medium hover:underline">
                  Learn more
                </a>
              )}
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div id="faqs" className="bg-white rounded-2xl shadow-lg p-6 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            <button
              onClick={() => setActiveCategory('general')}
              className={`px-4 py-2 rounded-full ${
                activeCategory === 'general'
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              General
            </button>
            <button
              onClick={() => setActiveCategory('billing')}
              className={`px-4 py-2 rounded-full ${
                activeCategory === 'billing'
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Billing
            </button>
            <button
              onClick={() => setActiveCategory('services')}
              className={`px-4 py-2 rounded-full ${
                activeCategory === 'services'
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Services
            </button>
          </div>
          
          {/* FAQ Items */}
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                <div className="bg-gray-50 p-4 cursor-pointer">
                  <h3 className="font-bold text-lg">{faq.question}</h3>
                </div>
                <div className="p-4 bg-white">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Still Need Help */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Still Need Help?</h2>
          <p className="text-purple-100 text-xl mb-6 max-w-2xl mx-auto">
            Our support team is ready to assist you with any questions or concerns
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition">
              Contact Support
            </button>
            <button className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white/10 transition">
              Call Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;