import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';
import { CircleLoader } from 'react-spinners';

const PrivateRouter = ({ children }) => {
   const { user, loading } = use(AuthContext)
   console.log(loading, user)
const location = useLocation();
console.log(location)

   if (loading) {
      return <div className='min-h-screen flex justify-center items-center'><CircleLoader className='size-6' color="#fb8500" /></div>
   }


   if (user && user?.email) {
      return children
   }
   return <Navigate state={location.pathname} to='/auth/login'> </Navigate>

};

export default PrivateRouter;