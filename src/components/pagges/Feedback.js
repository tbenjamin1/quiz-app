import React from "react";
import Footer from "../UI/Footer";
import Header from "../UI/Header";

const Feedback = () => {

  
  return (
    <div>

      <div className="flex flex-col  bg-gray-100 py-4 px-8">
        <div className="flex flex-row ">
          {/* left */}
          <div class="flex flex-col w-1/2  justify-center   items-center bg-white ">
            <h1 className=" text-center font-bold m-8 text-xl">Review</h1>
            <div class="flex flex-col my-4  justify-center   items-center ">
              <div className="my-2">
                <p className="text-sm font-semibold">Marks</p>
                <span className="text-xl font-bold">0</span>
              </div>
              <div className="my-2">
                <p className="text-sm font-semibold text-center">
                  Passed Question
                </p>
                <span className="text-xl font-bold">0/5</span>
              </div>
              <div className=" text-center justify-center my-4  items-center">
                <p className="text-sm font-semibold">Time Used ⏲ </p>
                <div class=" w-40 h-40 bg-yellow-300 rounded-full flex items-center justify-center    ">
                  <div class=" w-20 h-20 bg-white rounded-full text-black  flex items-center justify-center  text-xl font-bold  ">
                    00 : 00
                  </div>
                </div>
              </div>

              <button class=" bg-yellow-500 w-1/2 text-white mx-8 transform hover:scale-110 motion-reduce:transform-none ...">
                Share
              </button>
            </div>
          </div>
          {/* right */}

          <div class="flex flex-col  w-1/2  justify-center   items-center bg-yellow-100">
            <h1 className=" text-center font-bold mb-4 text-xl">
              Develop Your Skills
            </h1>
            <div>
              <span className="my-2">
                <h1 className="my-4">Q1</h1>
                <p>answer</p>
              </span>
              <span className="my-2">
                <h1 className="my-4">Q1</h1>
                <p>answer</p>
              </span>
              <span className="my-2">
                <h1>Q1</h1>
                <p>answer</p>
              </span>
              <span className="my-2">
                <h1 className="my-4">Q1</h1>
                <p>answer</p>
              </span>
              <span className="my-2">
                <h1 className="my-4">Q1</h1>
                <p>answer</p>
              </span>
            </div>
          </div>
        </div>
        {/* bbb */}
      </div>

      <Footer />
    </div>
  );
};

export default Feedback;
