import React,{useState} from "react";

import logo from "../assests/images/logo.jpg";

// const Header = () => {
//   return (
//     <div>






//       {/* <!-- Navbar goes here --> */}
//       <nav className=" fixed mt-0 bg-white shadow-lg h-14 mb-2 overflow-hidden  
//           w-full
//          sm:text-sm
//           text-lg text-gray-400
//           bg-white 
         
//           sm:w-full
//            ">
// {/* newww */}


 
//           <div className=" flex ">
//             <div className="sm:w-2/3 flex md:flex flex col    items-center text-center  justify-around  ">
//              <div className="">
//             {/* <!-- Website Logo --> */} 
//             <a href="#" className="flex items-center h-4  w-24  ">
//               <img className="" src={logo} />
//             </a>
//           </div>

//               <div className=" flex  space-x-2   ">
//             <a
//               href="/"
//               className=" px-2 sm:text-sm text-gray-500 hover:text-yellow-500 font-semibold "
//             >
//               Home
//             </a>
//             <a
//               href=""
//               className=" px-2 text-gray-500 font-semibold hover:text-yellow-500 hover:border-yellow-500 "
//             >
//               Services
//             </a>
//             <a
//               href=""
//               className=" px-2 text-gray-500 font-semibold hover:text-yellow-500 hover:border-yellow-500 "
//             >
//               About
//             </a>
//             <a
//               href=""
//               className=" px-2 text-gray-500 font-semibold hover:text-yellow-500 border-yellow-500"
//             >
//               Contact Us
//             </a>
                
//               </div>
//             <div className=" flex sm:w-1/3 md:flex items-center my-2 ">
//             <a
//               href="/login"
//               className=" font-medium p-2 mr-4text-gray-500 rounded-lg hover:bg-yellow-500 hover:text-white "
//             >
//               Log In
//             </a>
//             <a
//               href="/signUp"
//               className=" font-medium p-2 text-center text-white bg-yellow-500 rounded-lg hover:bg-yellow-400 "
//             >
//               Sign Up
//             </a>
          

//             </div>
//           </div>
//         </div>

// {/* endd */}




       
//       </nav>
//     </div>
//   );
// };

// export default Header;





//new nav


import { Transition } from "@headlessui/react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-around h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-16 w-24"
                   src={logo} 
                  alt="Workflow"
                />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a
                    href="/"
                    className=" hover:bg-yellow-400 hover:text-white text-yellow-500 px-3 py-2 rounded-md text-sm font-medium"
                  >
                  Home
                  </a>

                  <a
                    href="#"
                    className="text-yellow-500 hover:bg-yellow-400  hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                  about us
                  </a>

                  <a
                    href="#"
                    className="text-yellow-500 hover:bg-yellow-400  hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                   contact us
                  </a>

                  <a
                    href="#"
                    className="text-yellow-500 hover:bg-yellow-400  hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                  Log In
                  </a>

                  <a
                    href="#"
                    className="text-yellow-500 hover:bg-yellow-400  hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                   sign Up
                  </a>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="/"
                  className="hover:bg-yellow-400   text-yelhover:text-whitelow-500 block px-3 py-2 rounded-md text-base font-medium"
                >
                Home
                </a>

                <a
                  href="#"
                  className="text-yellow-500 hover:bg-yellow-400  hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                 about us
                </a>

                <a
                  href="#"
                  className="text-yellow-500 hover:bg-yellow-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                cpntact us
                </a>

                <a
                  href="/login"
                  className="text-yellow-500  hover:bg-yellow-400  hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                Log In
                </a>
               

                <a
                  href="#"
                  className="text-yellow-500 hover:bg-yellow-400  hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                 sign Up
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>

      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl text-center  font-bold text-gray-900">Get ready for the quiz</h1>
        </div>
      </header>
      
    </div>
  );
}

export default Header;
