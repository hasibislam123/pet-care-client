import React from 'react';
import { Outlet } from 'react-router';
import Hero from '../Components/Hero';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import LeftNav from '../Components/HomeLayout/LeftNav';

const HomeLayout = () => {
   return (
      <div>
         <nav>
            <Navbar></Navbar>
         </nav>
         <Hero></Hero>
         <main className="grid grid-cols-1 md:grid-cols-6 min-h-screen gap-6 p-6 md:p-10 lg:p-16">

            <section className="LeftNav col-span-1 flex justify-center  md:top-6  sticky top-2 h-fit   ">
               <LeftNav  />
            </section>

            <section className="col-span-1 md:col-span-5 bg-white rounded-xl  ">
               <Outlet />
            </section>
         </main>
         <footer>
            <Footer></Footer>
         </footer>
      </div>
   );
};

export default HomeLayout;