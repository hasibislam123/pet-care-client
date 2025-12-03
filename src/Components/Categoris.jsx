import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router';

const Categoris = () => {
   const [categories, setCategories] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);

   useEffect(() => {
      const fetchCategories = async () => {
         try {
            const response = await fetch('/categoris.json');
            if (!response.ok) {
               throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setCategories(data);
         } catch (err) {
            console.error("Failed to fetch categories:", err);
            setError(err.message);
         } finally {
            setLoading(false);
         }
      };

      fetchCategories();
   }, []);

   if (loading) {
      return <div className="text-center py-4">Loading categories...</div>;
   }

   if (error) {
      return <div className="text-center py-4 text-red-500">Error loading categories: {error}</div>;
   }

   return (
      <div className='grid grid-cols-1 gap-2 items-center mx-auto w-full'>
         <h1 className='font-bold mb-5 mx-auto mt-2'>All Categories ({categories.length})</h1>
         {
            categories.map((Category) => (
               <NavLink
                  key={Category.id}
                  to={`/category/${Category.id}`}
                  className='btn btn-outline grid grid-cols-1 gap-2 text-center py-2 px-4 rounded-lg border border-purple-300 hover:bg-purple-100 transition'
               >
                  {Category.name}
               </NavLink>
            ))
         }
      </div>
   );
};

export default Categoris;