import React from "react";
import Footer from "./UI/Footer";
import { useNavigate, Link } from "react-router-dom";
import signup from "./assests/images/signup.png";
import QuestionPage from "./pagges/QuestionPage";
import InputAsnwer from './InputAsnwer';

const Homepage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/pagges/QuestionPage");
  };

  return (
     <div className=" bg-gray-200  my-2 text-black-500 body-font ">
        
          

          {/* newwww */}

       <div className="bg-white my-2 ">
          <div className="container mx-auto px-6">
            <div className="sm:flex sm:mt-8">
              <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
                {/* <div>hehhh  </div> */}

                 <div className="flex flex-col  bg-white   ">
            <h1 className=" text-center font-bold m-8 text-xl">Instruction</h1>

            <div className="flex flex-col ">
              <div className="flex space-x-4 space-y-8  ">
                <div className=" w-10 h-10 bg-yellow-300 rounded-full flex items-center justify-center    ">
                  <div className=" w-5 h-5 bg-white rounded-full text-black text-center font-bold  ">
                    1
                  </div>
                </div>
                <div>
                  <p className="lg:w-2/3 mx-auto leading-relaxed text-base">  _Read each question carefully</p>
                  </div>
                </div>    
                  
             <div className="flex space-x-4 space-y-8  ">
                <div className=" w-10 h-10 bg-yellow-300 rounded-full flex items-center justify-center    ">
                  <div className=" w-5 h-5 bg-white rounded-full text-black text-center font-bold  ">
                    1
                  </div>
                </div>
                <div>
                  <p className="lg:w-2/3 mx-auto leading-relaxed text-base">  _Read each question carefully</p>
                  </div>
              </div>

              <div className="flex space-x-4 space-y-8  ">
                <div className=" w-10 h-10 bg-yellow-300 rounded-full flex items-center justify-center    ">
                  <div className=" w-5 h-5 bg-white rounded-full text-black text-center font-bold  ">
                    1
                  </div>
                </div>
                <div>
                  <p className="lg:w-2/3 mx-auto leading-relaxed text-base">  _Read each question carefully</p>
                  </div>
              </div>

              <div className="flex space-x-4 space-y-8  ">
                <div className=" w-10 h-10 bg-yellow-300 rounded-full flex items-center justify-center    ">
                  <div className=" w-5 h-5 bg-white rounded-full text-black text-center font-bold  ">
                    1
                  </div>
                </div>
                <div>
                  <p className="lg:w-2/3 mx-auto leading-relaxed text-base">  _Read each question carefully</p>
                  </div>
              </div>

            <div className="flex space-x-4 space-y-8  ">
                <div className=" w-10 h-10 bg-yellow-300 rounded-full flex items-center justify-center    ">
                  <div className=" w-5 h-5 bg-white rounded-full text-black text-center font-bold  ">
                    1
                  </div>
                </div>
                <div>
                  <p className="lg:w-2/3 mx-auto leading-relaxed text-base">  _Read each question carefully</p>
                  </div>
              </div>


              <div>
                <h1 className=" text-center font-bold  my-8 text-xl">
                  Goog Lucky ????{" "}
              
                </h1>
              </div>
            </div>
           </div>

               {/* hhhh */}

               <div className="flex flex-col    bg-yellow-100  ">
            <h1 className=" text-center font-bold m-8 text-xl">
              Develop Your Skills
            </h1>
            <div className="">
              <img src={signup} />
            </div>
            <div className="flex  items-center justify-center ">


              <button
              onClick={handleClick}
                     className="py-2 px-2 font-medium  mb-8 text-white bg-yellow-500 rounded-lg hover:bg-yellow-400 "
              >

                Take Quiz
              </button>
            </div>
           </div>
               {/* hkhahvjf */}


              </div>
            </div>
          </div>
        </div>
     



        {/* contact section */}

         <section className=" bg-white  my-2 text-black-500 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Contact Us
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify.
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label for="name" className="leading-7 text-sm text-gray-600">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    for="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    for="message"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Send
                </button>
              </div>
            
            </div>
          </div>
        </div>
      </section>

        {/* end of section */}

        <div className="bg-white my-2 ">
          <div className="container mx-auto px-6">
            <div className="sm:flex sm:mt-8">
              <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
                <div className="flex flex-col">
                  <span className="font-bold text-gray-700 uppercase mb-2">
                    Recents Quiz
                  </span>

                  <span className="flex space-x-4 ">
                    <h3 className="text-sm font-bold  text-yellow-500">
                      street kg 45st
                    </h3>
                  </span>
                  <span className="my-2">
                    <a
                      href="#"
                      className="text-yellow-500  text-md hover:text-yellow-500"
                    >
                      gisozi
                    </a>
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-gray-700 uppercase mt-4 md:mt-0 mb-2">
                    performance
                  </span>
                  <span className="flex space-x-4 ">
                    <h3 className="text-sm font-bold text-yellow-500  ">
                      +250-787438701
                    </h3>
                  </span>
                  <span className="flex space-x-4">
                    <h3 className="text-sm font-bold  text-yellow-500">
                      tbenpollyl@gmail.com
                    </h3>
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-gray-700 uppercase mt-4 md:mt-0 mb-2">
                    courses
                  </span>
                  <span className="my-2">
                    <a
                      href="#"
                      className="text-yellow-500  text-md hover:text-yellow-500"
                    >
                      accessibility
                    </a>
                  </span>
                  <span className="my-2">
                    <a
                      href="#"
                      className="text-yellow-500  text-md hover:text-yellow-500"
                    >
                      usability
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
     
      <Footer />
    </div>
  );
};

export default Homepage;
