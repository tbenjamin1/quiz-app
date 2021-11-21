import React from "react";
import Footer from "./UI/Footer";
import Header from "./UI/Header";
import login from "./assests/images/login.jpg";

const Login = () => {
  return (
    <div >
      <div className="bg-gray-100 my-2 ">
          <div className="container mx-auto px-6">
            <div className="sm:flex sm:mt-8">
              <div className="  flex justify-center items-center  sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row ">
        {/* left part  */}
        <div className="  my-2 ">
          <span className="my-20 text-xl  font-bold">
            <h1 className="z-10 relative" >Test Your English Level</h1>
          </span>
          <div className="relative  w-80 h-80 text-center z-10 rounded-full">
            <img src={login} className=" w-80 h-80  rounded-full" />
          </div>
        </div>
        {/* right part */}
        <div className=" m-2 " >
          <div className="relative   pr-9">
            <div className="absolute z-0 w-40 h-40 bg-blue-900 rounded-full -left-60 -top-2"></div>
            <div className="absolute z-0 w-40 h-40 bg-yellow-300 rounded-full -left-40 -top-2"></div>
              <div className="absolute z-0 w-40 h-40 bg-blue-100 rounded-full -left-80 -top-2"></div>
            <div className="absolute z-0 w-20 h-20 bg-blue-200 rounded-full flex justify-center items-center  -right-40 -bottom-0">
              🔑{" "}
            </div>
            <div className="relative z-10 ">
              <form
                action=""
                className=" bg-yellow-200  py-10 px-10  justify-center items-center    mx-auto rounded-lg  "
              >
                <div className="w-full  my-8  ">
                  <input
                    outocomplete="off"
                    placeholder="username"
                    type="text"
                    name="username"
                    out
                    className="border border-gray-400 py-2 px-4 w-full block rounded-lg focus:outline-none
                   focus:ring-4
                    "
                  />
                </div>
                <div className="w-full    space-y-4 ">
                  <input
                    outocomplete="off"
                    placeholder="password"
                    type="password"
                    name="password"
                    out
                    className="border border-gray-400 py-2 px-4 w-full black rounded-lg focus:outline-none
                                    focus:ring-4
                                    "
                  />
                </div>
                <div className=" w-full justify-center items-center my-8 ">
                  <button className="py-2 px-2 font-medium w-1/2  text-white bg-yellow-500 rounded-lg hover:bg-yellow-400 ">
                    Login
                  </button>
                </div>
                <p>
                  Not Yet Registerer{" "}
                  <a href="#" className="flex items-center  font-semibold  ">
                    sign up!
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
      </div>
          </div>
        </div>
    

      <Footer />
    </div>
  );
};

export default Login;
