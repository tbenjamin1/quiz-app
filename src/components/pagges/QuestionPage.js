import React from "react";

import Footer from "../UI/Footer";
import { useNavigate, Link } from "react-router-dom";
import Header from "../UI/Header";
import Feedback from "./Feedback";

const QuestionPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Feedback");
  };



  return (
    <div className="bg-gray-100">
      
      <div class="flex  py-4 px-8">
        <div class="flex-1 bg-white">
          <div class="flex flex-col mx-4 items-center justify-center  ">
            <div className="inline-flex space-x-4 space-y-8  ">
              <div class=" w-10 h-10 bg-yellow-300 rounded-full flex items-center justify-center    ">
                <div class=" w-5 h-5 bg-white rounded-full text-black text-center font-bold  ">
                  1
                </div>
              </div>
            </div>

            <div className="bg-yellow-500 w-1 h-10"></div>
            <div className="inline-flex space-x-4 space-y-8 ">
              <div class=" w-10 h-10 bg-yellow-300 rounded-full flex  items-center justify-center  ">
                <div class=" w-5 h-5 bg-white rounded-full text-black text-center font-bold  ">
                  1
                </div>
              </div>
            </div>

            <div className="bg-yellow-500 w-1 h-10"></div>

            <div className="inline-flex space-x-4 space-y-8 ">
              <div class=" w-10 h-10 bg-yellow-300 rounded-full flex  items-center justify-center     ">
                <div class=" w-5 h-5 bg-white rounded-full text-black text-center font-bold  ">
                  1
                </div>
              </div>
            </div>
                  
            <div className="bg-yellow-500 w-1 h-10"></div>

            <div className="inline-flex space-x-4 space-y-8 ">
              <div class=" w-10 h-10 bg-yellow-300 rounded-full flex  items-center justify-center    ">
                <div class=" w-5 h-5 bg-white rounded-full text-black text-center text-center font-bold  ">
                  1
                </div>
              </div>
            </div>
            <div className="bg-yellow-500 w-1 h-10"></div>

            <div className="inline-flex   space-x-4 space-y-8 mb-8">
              <div class=" w-10 h-10 bg-yellow-300 rounded-full flex  items-center justify-center   ">
                <div class=" w-5 h-5 bg-white rounded-full text-black text-center font-bold  ">
                  1
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex-none  bg-white">
          <div className="flex flex-col items-center justify-center">
            <div>
              <h1>
                but still need the element to resemble a link, use a button and
                change it with appropriate styles. Learn more: 5
              </h1>
            </div>

            <div className="flex flex-col">
              <div>
                <input
                  type="radio"
                  name="q1"
                  value="answer"
                  class="bg-gray-200 m-4 checked:bg-blue-600 checked:border-transparent ..."
                />
                <label>ikibazo cyambere</label>
              </div>

              <div>
                <input
                  type="radio"
                  name="q1"
                  value="answer"
                  class="bg-gray-200 m-4 checked:bg-blue-600 checked:border-transparent ..."
                />
                <label>ikibazo cyambere</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="q1"
                  value="answer"
                  class="bg-gray-200 m-4 checked:bg-blue-600 checked:border-transparent ..."
                />
                <label>ikibazo cyambere</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="q1"
                  value="answer"
                  class="bg-gray-200 m-4 checked:bg-blue-600 checked:border-transparent ..."
                />
                <label>ikibazo cyambere</label>
              </div>
            </div>

            <div>
              <div className="flex   ">
                <button class=" bg-yellow-500 text-white mx-8 transform hover:scale-110 motion-reduce:transform-none ...">
                  Back
                </button>
                <button class="  bg-yellow-500 text-white  transform hover:scale-110 motion-reduce:transform-none ...">
                  Next
                </button>


                 <button
              onClick={handleClick}
className="py-2 px-2 font-medium  mb-8 text-white bg-yellow-500 rounded-lg hover:bg-yellow-400 "
              >
submit
              </button>
              </div>
            </div>
          </div>
        </div>

        <div class="flex-1  bg-white">
          <div className="flex flex-col items-center justify-center">
            <span>
              <h1>Time Left</h1>
            </span>
            <div className="inline-flex space-x-4 space-y-8  ">
              <div class=" w-10 h-10 bg-yellow-300 rounded-full flex items-center justify-center    ">
                10
              </div>
            </div>

            <div className="bg-yellow-500 w-1 h-20"></div>

            <div className="inline-flex space-x-4 space-y-8  ">
              <div class=" w-40 h-40 bg-yellow-300 rounded-full flex items-center justify-center    ">
                <div class=" w-20 h-20 bg-white rounded-full text-black text-center font-bold    ">
                  00 : 00
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

export default QuestionPage;
