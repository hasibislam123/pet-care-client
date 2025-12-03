import React from 'react';
import { Navigate } from 'react-router';

const Home = () => {
   // Add a simple timeout to ensure the app is fully loaded before redirecting
   React.useEffect(() => {
      // Log that we're in the Home component
      console.log('Home component loaded');
   }, []);

   return (
      <div>
         <Navigate to='/category/1' />
      </div>
   );
};

export default Home;