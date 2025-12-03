import React, { use } from 'react';
import { NavLink } from 'react-router';

const CategoryPromise = fetch('/categoris.json')
   .then((res) => res.json());

const Categoris = () => {
   const categoris = use(CategoryPromise);

   return (
      <div className='grid grid-cols-1 gap-2 items-center mx-auto w-full'>
         <h1 className='font-bold mb-5 mx-auto mt-2'>All Categoris ({categoris.length})</h1>
         {
            categoris.map((Category) => (
               <NavLink
                  key={Category.id}
                  to={`/category/${Category.id}`}
                  className='btn btn-outline grid grid-cols-1 gap-2  text-center py-2 px-4 rounded-lg border border-purple-300 hover:bg-purple-100 transition'
               >
                  {Category.name}
               </NavLink>
            ))
         }
      </div>
   );
};

export default Categoris;