import React from "react";
import Footer from "./UI/Footer";
import Header from "./UI/Header";
import signup from "./assests/images/signup.png";

const SignUp = () => {
  return (
    <div className="bg-gray-100">
     
      <div className="flex flex-row w-full justify-center items-center sm:flex flex-col py-4 px-2">
        <div className="bg-yellow-200  absolute-right-2 rounded z-0 shadow border  p-6 w-64">
          <h5 className="text-center text-xl font-bold mb-4 mt-0">Sign Up</h5>
          <form
            action=""
            className="   items-center py- px-2  font-bold mx-auto rounded-lg  "
          >
            <div className=" space-y-4  ">
              <div className="  w-full  space-y-4  ">
                <input
                  outocomplete="off"
                  placeholder="username"
                  type="text"
                  name="username"
                  out
                  className="border border-gray-400 py-2 px-4 w-full block rounded focus:outline-none
                   focus:ring-4
                    "
                />
              </div>
              <div className=" w-full space-y-4 ">
                <input
                  outocomplete="off"
                  placeholder="password"
                  type="password"
                  name="password"
                  out
                  className="border border-gray-400 py-2 px-4 w-full black rounded focus:outline-none
                                    focus:ring-4
                                    "
                />
              </div>

              <div className="  w-full  space-y-4 ">
                <input
                  outocomplete="off"
                  placeholder="password confirm"
                  type="password"
                  name="password"
                  out
                  className="border border-gray-400 py-2 px-4 w-full black rounded focus:outline-none
                                    focus:ring-4
                                    "
                />
              </div>
              <button className="py-2 my-16 font-medium w-full  text-white bg-yellow-500 rounded hover:bg-yellow-400 ">
                Create account
              </button>
            </div>
          </form>
        </div>

        <div className="bg-white  rounded shadow border p-6 w-64">
          <h5 className="text-3xl font-bold mb-4 mt-0">welcome</h5>
          <div className=" bg-white justify-center items-center w-full">
            <img src={signup} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;
