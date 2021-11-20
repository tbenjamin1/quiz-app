import React from "react";
import Footer from "./UI/Footer";
import { useNavigate, Link } from "react-router-dom";
import signup from "./assests/images/signup.png";
import QuestionPage from "./pagges/QuestionPage";

const Homepage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/pagges/QuestionPage");
  };

  return (
    <div className="bg-gray-100">
      <div className="flex flex-col   py-4 px-8">
        <div className="flex flex-row ">
          {/* left */}
          <div class="flex flex-col w-1/2  bg-white ">
            <h1 className=" text-center font-bold m-8 text-xl">Instruction</h1>
            <div class="flex flex-col mx-4 ">
              <div className="inline-flex space-x-4 space-y-8  ">
                <div class=" w-10 h-10 bg-yellow-300 rounded-full flex items-center justify-center    ">
                  <div class=" w-5 h-5 bg-white rounded-full text-black text-center font-bold  ">
                    1
                  </div>
                </div>
                <div>
                  <p>  _Read each question carefully</p>
                  </div>
              </div>
              <div className="inline-flex space-x-4 space-y-8 ">
                <div class=" w-10 h-10 bg-yellow-300 rounded-full flex  items-center justify-center  ">
                  <div class=" w-5 h-5 bg-white rounded-full text-black text-center font-bold  ">
                    1
                  </div>
                </div>
                <div>
                  <p>   _ After responding to a question, click on the "Next</p>
                </div>
              </div>
              <div className="inline-flex space-x-4 space-y-8 ">
                <div class=" w-10 h-10 bg-yellow-300 rounded-full flex  items-center justify-center     ">
                  <div class=" w-5 h-5 bg-white rounded-full text-black text-center font-bold  ">
                    1
                  </div>
                </div>
                <div>
                  <p> _If you select an incorrect response for a question, you can try again before you submit.</p>
                </div>
              </div>
              <div className="inline-flex space-x-4 space-y-8 ">
                <div class=" w-10 h-10 bg-yellow-300 rounded-full flex  items-center justify-center    ">
                  <div class=" w-5 h-5 bg-white rounded-full text-black text-center text-center font-bold  ">
                    1
                  </div>
                </div>
                <div>
                  <p>_The total score for the quiz is based on your responses  to all questions</p>
                </div>
              </div>
              <div className="inline-flex   space-x-4 space-y-8 mb-8">
                <div class=" w-10 h-10 bg-yellow-300 rounded-full flex  items-center justify-center   ">
                  <div class=" w-5 h-5 bg-white rounded-full text-black text-center font-bold  ">
                    1
                  </div>
                </div>
                <div>
                  <p>_   Question"button at the bottom to go to the next questino</p>
                </div>
              </div>

              <div>
                <h1 className=" text-center font-bold  my-8 text-xl">
                  Goog Lucky 🙋{" "}
                </h1>
              </div>
            </div>
          </div>
          {/* right */}

          <div class="flex flex-col  w-1/2  justify-center   items-center bg-yellow-100">
            <h1 className=" text-center font-bold m-8 text-xl">
              Develop Your Skills
            </h1>
            <div className="">
              <img src={signup} />
            </div>
            <div className="flex  items-center justify-center ">

{/* <Link   to ="/pagges/QuestionPage"   > <button
              
className="py-2 px-2 font-medium  mb-8 text-white bg-yellow-500 rounded-lg hover:bg-yellow-400 "
              >

                Take Quiz
              </button></Link> */}

              <button
              onClick={handleClick}
className="py-2 px-2 font-medium  mb-8 text-white bg-yellow-500 rounded-lg hover:bg-yellow-400 "
              >

                Take Quiz
              </button>
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
          <div class="container mx-auto px-6">
            <div class="sm:flex sm:mt-8">
              <div class="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
                <div class="flex flex-col">
                  <span class="font-bold text-gray-700 uppercase mb-2">
                    Recents Quiz
                  </span>

                  <span class="flex space-x-4 ">
                    <h3 class="text-sm font-bold  text-yellow-500">
                      street kg 45st
                    </h3>
                  </span>
                  <span class="my-2">
                    <a
                      href="#"
                      class="text-yellow-500  text-md hover:text-yellow-500"
                    >
                      gisozi
                    </a>
                  </span>
                </div>
                <div class="flex flex-col">
                  <span class="font-bold text-gray-700 uppercase mt-4 md:mt-0 mb-2">
                    performance
                  </span>
                  <span class="flex space-x-4 ">
                    <h3 class="text-sm font-bold text-yellow-500  ">
                      +250-787438701
                    </h3>
                  </span>
                  <span class="flex space-x-4">
                    <h3 class="text-sm font-bold  text-yellow-500">
                      tbenpollyl@gmail.com
                    </h3>
                  </span>
                </div>
                <div class="flex flex-col">
                  <span class="font-bold text-gray-700 uppercase mt-4 md:mt-0 mb-2">
                    courses
                  </span>
                  <span class="my-2">
                    <a
                      href="#"
                      class="text-yellow-500  text-md hover:text-yellow-500"
                    >
                      accessibility
                    </a>
                  </span>
                  <span class="my-2">
                    <a
                      href="#"
                      class="text-yellow-500  text-md hover:text-yellow-500"
                    >
                      usability
                    </a>
                  </span>
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

export default Homepage;
