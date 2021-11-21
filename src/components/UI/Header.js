import React from "react";

import logo from "../assests/images/logo.jpg";

const Header = () => {
  return (
    <div>
      {/* <!-- Navbar goes here --> */}
      <nav className="  bg-white shadow-lg  mb-2 overflow-hidden  
          w-full
          py-4
          md:py-0
          px-4
          text-lg text-gray-700
          bg-white 
          
          sm:w-full
           ">
        <div className="flex flex-row justify-around   sm:w-full  sm:flex items-center justify-center   
        w-full md:flex md:items-center md:justify-between md:w-auto  ">
          <div className="space-x-100">
            {/* <!-- Website Logo --> */} 
            <a href="#" className="flex items-center h-4  w-24 m-2  ">
              <img className="mt-4" src={logo} />
            </a>
          </div>

          {/* <!-- Primary Navbar items --> */}

          <div className=" md:flex items-center space-x-1">
            <a
              href="/"
              className="py-4 px-2 text-gray-500 hover:text-yellow-500 font-semibold "
            >
              Home
            </a>
            <a
              href=""
              className="py-4 px-2 text-gray-500 font-semibold hover:text-yellow-500 hover:border-yellow-500 "
            >
              Services
            </a>
            <a
              href=""
              className="py-4 px-2 text-gray-500 font-semibold hover:text-yellow-500 hover:border-yellow-500 "
            >
              About
            </a>
            <a
              href=""
              className="py-4 px-2 text-gray-500 font-semibold hover:text-yellow-500 border-yellow-500"
            >
              Contact Us
            </a>
          </div>

          {/* <!-- Secondary Navbar items --> */}
          <div className=" flex items-center justify-center sm:w-1/3 md:flex items-center space-x-3  w-1/2">
            <a
              href="/login"
              className="py-2 px-2 font-medium text-gray-500 rounded-lg hover:bg-yellow-500 hover:text-white "
            >
              Log In
            </a>
            <a
              href="/signUp"
              className=" font-medium w-40 p-2 text-center text-white bg-yellow-500 rounded-lg hover:bg-yellow-400 "
            >
              Sign Up
            </a>
          </div>
          {/* <!-- Mobile menu button --> */}
        </div>
      </nav>
    </div>
  );
};

export default Header;
