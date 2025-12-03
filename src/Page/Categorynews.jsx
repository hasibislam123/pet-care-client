import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import Cart from '../Components/Cart';

const Categorynews = () => {
   const { id } = useParams();
   const data = useLoaderData() || [];
   const [categorynews, setcategorynews] = useState([]);
   const [filteredNews, setFilteredNews] = useState([]);
   const [sortOrder, setSortOrder] = useState('asc'); // 'asc' or 'desc'
   const [searchTerm, setSearchTerm] = useState('');
   const [minPrice, setMinPrice] = useState('');
   const [maxPrice, setMaxPrice] = useState('');

   useEffect(() => {
      try {
         console.log('Categorynews component loaded with id:', id);
         console.log('Data received:', data);
         
         // Map category ID to category name
         let categoryName = '';
         switch(id) {
            case '1':
               categoryName = 'Popular Winter Care Services';
               break;
            case '2':
               categoryName = 'Winter Care Tips for Pets';
               break;
            case '3':
               categoryName = 'Meet Our Expert Vets';
               break;
            default:
               categoryName = '';
         }
         
         console.log('Mapped category name:', categoryName);
         
         // Filter by category name
         const filteredNews = categoryName 
            ? data.filter(news => news && news.category === categoryName)
            : data;
            
         console.log('Filtered news count:', filteredNews.length);
            
         setcategorynews(filteredNews);
         setFilteredNews(filteredNews);
      } catch (error) {
         console.error("Error filtering category news:", error);
         setcategorynews([]);
         setFilteredNews([]);
      }
   }, [data, id]);

   useEffect(() => {
      try {
         let result = [...categorynews];
         
         // Apply search filter
         if (searchTerm) {
            result = result.filter(news => 
               news && (
                  (news.serviceName && news.serviceName.toLowerCase().includes(searchTerm.toLowerCase())) ||
                  (news.description && news.description.toLowerCase().includes(searchTerm.toLowerCase())) ||
                  (news.providerName && news.providerName.toLowerCase().includes(searchTerm.toLowerCase()))
               )
            );
         }
         
         // Apply price filters
         if (minPrice) {
            result = result.filter(news => news && news.price >= parseFloat(minPrice));
         }
         
         if (maxPrice) {
            result = result.filter(news => news && news.price <= parseFloat(maxPrice));
         }
         
         // Apply sorting
         result.sort((a, b) => {
            if (!a || !b) return 0;
            if (sortOrder === 'asc') {
               return (a.serviceName || '').localeCompare(b.serviceName || '');
            } else {
               return (b.serviceName || '').localeCompare(a.serviceName || '');
            }
         });
         
         setFilteredNews(result);
      } catch (error) {
         console.error("Error applying filters:", error);
         setFilteredNews([]);
      }
   }, [categorynews, searchTerm, minPrice, maxPrice, sortOrder]);

   const handleSort = (order) => {
      setSortOrder(order);
   };

   const handleResetFilters = () => {
      setSearchTerm('');
      setMinPrice('');
      setMaxPrice('');
   };

   // Handle case where data is empty or invalid
   if (!data || !Array.isArray(data)) {
      console.log('No data available');
      return (
         <div className="text-center py-12">
            <p className="text-xl text-gray-500">No data available</p>
         </div>
      );
   }

   console.log('Rendering Categorynews with', filteredNews.length, 'items');

   return (
      <div>
         <div className="mb-6 p-4 bg-gray-50 rounded-xl">
            <h2 className="text-xl font-semibold mb-4">Filter Options</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
               <div>
                  <label className="block text-sm font-medium mb-1">Search</label>
                  <input
                     type="text"
                     placeholder="Search by name, description..."
                     value={searchTerm}
                     onChange={(e) => setSearchTerm(e.target.value)}
                     className="w-full p-2 border border-gray-300 rounded-lg"
                  />
               </div>
               <div>
                  <label className="block text-sm font-medium mb-1">Min Price</label>
                  <input
                     type="number"
                     placeholder="Min price"
                     value={minPrice}
                     onChange={(e) => setMinPrice(e.target.value)}
                     className="w-full p-2 border border-gray-300 rounded-lg"
                  />
               </div>
               <div>
                  <label className="block text-sm font-medium mb-1">Max Price</label>
                  <input
                     type="number"
                     placeholder="Max price"
                     value={maxPrice}
                     onChange={(e) => setMaxPrice(e.target.value)}
                     className="w-full p-2 border border-gray-300 rounded-lg"
                  />
               </div>
               <div className="flex items-end">
                  <button 
                     onClick={handleResetFilters}
                     className="w-full px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg"
                  >
                     Reset Filters
                  </button>
               </div>
            </div>
         </div>

         <div className="flex justify-between items-center mb-6">
            <h1 className='font-semibold text-3xl'>Found {filteredNews.length} items</h1>
            <div className="flex space-x-2">
               <button 
                  onClick={() => handleSort('asc')}
                  className={`px-4 py-2 rounded-lg ${sortOrder === 'asc' ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}
               >
                  A-Z
               </button>
               <button 
                  onClick={() => handleSort('desc')}
                  className={`px-4 py-2 rounded-lg ${sortOrder === 'desc' ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}
               >
                  Z-A
               </button>
            </div>
         </div>
         
         {filteredNews.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {filteredNews.map((news) => (
                  <Cart key={news.id} news={news} />
               ))}
            </div>
         ) : (
            <div className="text-center py-12">
               <p className="text-xl text-gray-500">No items found matching your criteria</p>
            </div>
         )}
      </div>
   );
};

export default Categorynews;