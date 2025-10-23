import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import Cart from '../Components/Cart';

const Categorynews = () => {
   const { id } = useParams();
   const data = useLoaderData()
   const [categorynews, setcategorynews] = useState([]);

   // console.log(id, data)

   useEffect(() => {
      const filteredNews = data.filter(news => news.slotsAvailable == id)
      console.log(filteredNews)
      setcategorynews(filteredNews)
   }, [data, id])
   return (
      <div>
         <h1 className='font-semibold text-3xl'>found {categorynews.length}  </h1>
         <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categorynews.map((news) => (
               <Cart key={news.id} news={news} />
            ))}
         </div>
      </div>
   );
};

export default Categorynews;