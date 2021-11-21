import React from "react";
import Footer from "../UI/Footer";
import Header from "../UI/Header";

const Feedback = (props) => {
   console.log(props.data)

  
  return (
    <div>

      <div className="bg-gray-100 my-2 ">
          <div className="container mx-auto px-6">
            <div className="sm:flex sm:mt-8">
              <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
          {/* left */}
          <div className="flex flex-col  items-center justify-center md:w-full  bg-white  ">
          
            <h1 className=" text-center font-bold m-8 text-xl">Review</h1>
            <div className="flex flex-col  justify-center   items-center ">
              <div className="my-2">
                <p className="text-sm font-semibold">Marks</p>
                <span className="text-xl font-bold">{props.marks}</span>
              </div>
              <div className="my-2">
                <p className="text-sm font-semibold text-center">
                  Passed Question
                </p>
                <span className="text-xl font-bold">{props.win}/5</span>
              </div>
              <div className=" text-center justify-center my-4  items-center">
                <p className="text-sm font-semibold">Time Used ⏲ </p>
                <div className=" w-40 h-40 bg-yellow-300 rounded-full flex items-center justify-center    ">
                  <div className=" w-20 h-20 bg-white rounded-full text-black  flex items-center justify-center  text-xl font-bold  ">
                    00 : 00
                  </div>
                </div>
              </div>

              <button className=" bg-yellow-500 w-1/2 text-white mx-8 transform hover:scale-110 motion-reduce:transform-none ...">
                Share
              </button>
            </div>
          </div>
          {/* right */}

          <div className="flex flex-col  items-center justify-center md:w-full m-4 bg-yellow-100">
             <h1 className=" text-center font-bold mb-4 text-xl">
              Develop Your Skills
               </h1>
              <div class="flex flex-col   justify-center   items-center ">
                  {props.data.map( dataa =>  <div className=" flex justify-center   items-center p-4" >
           
                <span className="text-center">
                <h1 className=" font-bold text-gray-700 uppercase">{dataa.question}</h1>
                <p className="font-bold text-sm">{dataa.correct_answer}</p>
                </span>
                 </div>
                   )}
                 </div>  
            
             </div>

        </div>
        
      </div>
 </div>
 </div>
<Footer/>
    
    </div>
  );
};

export default Feedback;
