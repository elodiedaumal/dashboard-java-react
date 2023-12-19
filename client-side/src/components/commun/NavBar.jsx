import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { RiMenuUnfoldLine } from "react-icons/ri";

const Navbar = () => {
   const [menuOpen, setMenuOpen] = useState(false);

   const toggleMenu = () => {
      setMenuOpen(!menuOpen);
   };

   return (
      <nav className='bg-gray-800 p-4'>
         <div className='container mx-auto flex justify-between items-center'>
            {/* Logo */}
            <Link to='/'>
               <div className='text-white font-bold text-lg'>Student Panel</div>
            </Link>

            {/* MOBILE MENU */}
            {!menuOpen && (
               <button
                  className='md:hidden text-white focus:outline-none'
                  onClick={toggleMenu}
               >
                  <HiMenuAlt3 className='text-2xl' />
               </button>
            )}

            {/* Navbar links */}
            <div
               className={`md:flex md:items-center md:w-auto ${
                  menuOpen ? "block" : "hidden"
               }`}
            >
               <Link
                  to='/add'
                  className='block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-400 mr-4'
               >
                  Add new student
               </Link>
               <Link
                  to='/update'
                  className='block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-400 mr-4'
               >
                  Update student
               </Link>
               <Link
                  to='/delete'
                  className='block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-400'
               >
                  Delete student
               </Link>

               {menuOpen && (
                  <button
                     className='md:hidden text-white focus:outline-none ml-5 mt-5'
                     onClick={toggleMenu}
                  >
                     <RiMenuUnfoldLine className='text-2xl ' />
                  </button>
               )}
            </div>
         </div>
      </nav>
   );
};

export default Navbar;
