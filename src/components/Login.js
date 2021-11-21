import React from "react";
import Footer from "./UI/Footer";
import Header from "./UI/Header";
import login from "./assests/images/login.jpg";

const Login = () => {
  return (
    <div className="bg-gray-100">
      {/* <Header /> */}

      <div className="flex flex-row justify-center items-center sm:flex flex-col space-x-4 py-4 px-2">
        {/* left part  */}
        <div className=" items-center">
          <span className="my-20 text-xl font-bold">
            <h1>Test Your English Level</h1>
          </span>
          <div className="relative  w-80 h-80 text-center z-10 rounded-full">
            <img src={login} className=" w-80 h-80  rounded-full" />
          </div>
        </div>
        {/* right part */}
        <div>
          <div className="relative  pr-9">
            {/* <div className="absolute z-0 w-40 h-40 bg-gray-300 rounded-full -left-10 -top-20"></div> */}
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
                  Not Yet Registereg?{" "}
                  <a href="#" className="flex items-center  font-semibold  ">
                    sign up!
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Login;
