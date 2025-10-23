import React from 'react';
import Navbar from '../Components/Navbar';
import Login from '../Page/Login';
import { Outlet } from 'react-router';

const AuthLayout = () => {
   return (
      <div>
         <header>
            <Navbar></Navbar>
         </header>
         <Outlet></Outlet>
      </div>
   );
};

export default AuthLayout;