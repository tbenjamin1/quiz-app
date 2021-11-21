import React,{useState,useEffect} from 'react'
import InputAsnwer from "./InputAsnwer";
import { useNavigate, Link } from "react-router-dom";
import Feedback from './pagges/Feedback';



const QuestionData = ({handleAnswer,timer,handleBack,handleNext,


index,data:{question,correct_answer,incorrect_answers},}) => {

const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Feedback");
  };

     
    const [ minutes, setMinutes ] = useState(1);
    const [seconds, setSeconds ] =  useState(60);

 
    useEffect(()=>{
    let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval)

                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            } 
        }, 1000)
        return ()=> {
            clearInterval(myInterval);
          };
    });

const shuffledAnswers =[correct_answer ].sort(() => Math.random() - 0.5);
// const endQuiz = (data) =>{
//     console.log(endQuiz);
//     console.log("time");

  
// };




    return minutes > 0 ? (
        <div>

        <div className="bg-gray-100 m-2 ">
          <div className="container mx-auto px-6">
            <div className="sm:flex sm:mt-8">
              <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
               {/* first */}
            <div className="flex-1 bg-white ">
          <div className="flex flex-col  items-center justify-center md:w-full  ">
         
            <div className="inline-flex mx-2 space-x-4 space-y-8  ">
              <div className=" w-10 h-10 bg-yellow-300 rounded-full flex items-center justify-center    ">
                <div className=" w-5 h-5 bg-white rounded-full text-black text-center font-bold  ">
                  1
                </div>
              </div>
            </div>

            <div className="bg-yellow-500 w-1 h-10"></div>
            <div className="inline-flex space-x-4 space-y-8 ">
              <div className=" w-10 h-10 bg-yellow-300 rounded-full flex  items-center justify-center  ">
                <div className=" w-5 h-5 bg-white rounded-full text-black text-center font-bold  ">
                  1
                </div>
              </div>
            </div>

            <div className="bg-yellow-500 w-1 h-10"></div>

            <div className="inline-flex space-x-4 space-y-8 ">
              <div className=" w-10 h-10 bg-yellow-300 rounded-full flex  items-center justify-center     ">
                <div className=" w-5 h-5 bg-white rounded-full text-black text-center font-bold  ">
                  1
                </div>
              </div>
            </div>
                  
            <div className="bg-yellow-500 w-1 h-10"></div>

            <div className="inline-flex space-x-4 space-y-8 ">
              <div className=" w-10 h-10 bg-yellow-300 rounded-full flex  items-center justify-center    ">
                <div className=" w-5 h-5 bg-white rounded-full text-black text-center text-center font-bold  ">
                  1
                </div>
              </div>
            </div>
            <div className="bg-yellow-500 w-1 h-10"></div>

            <div className="inline-flex   space-x-4 space-y-8 mb-8">
              <div className=" w-10 h-10 bg-yellow-300 rounded-full flex  items-center justify-center   ">
                <div className=" w-5 h-5 bg-white rounded-full text-black text-center font-bold  ">
                  1
                </div>
              </div>
            </div>
          </div>
        </div>
               {/* second */}
               <div className="flex-none m-2  bg-white  ">
         
          <div className="flex flex-col items-center justify-center">

          {minutes === 0 ? <h1>time over </h1> : <h1>uracya fite igihe</h1> }
           <div>
              <h1>
         <label   className="font-bold text-gray-700 uppercase">     {question}</label>
              </h1>
            </div>

            <div className="flex flex-col">
              <div>
                <input
                  type="radio"
                  name="q1" 
                  value="answer"
                  onClick = {()=>handleAnswer(shuffledAnswers[0])}
                  className="bg-gray-200 m-4 checked:bg-blue-600 checked:border-transparent ..."
                />
                <label> {shuffledAnswers[0]}</label>
              </div>

              <div>
                <input
                  type="radio"
                  name="q1"
                  value="answer"
                     onClick = {()=>handleAnswer(false)}
                  className="bg-gray-200 m-4 checked:bg-blue-600 checked:border-transparent ..."
                />
                <label>{shuffledAnswers[0]}</label>
              </div>
              {/* <InputAsnwer answer={incorrect_answers[1]} /> */}
              <div>
                <input
                  type="radio"
                  name="q1"
                  value="answer"
                     onClick = {()=>handleAnswer(false)}
                  className="bg-gray-200 m-4 checked:bg-blue-600 checked:border-transparent ..."
                />
                <label>{shuffledAnswers[0]}</label>
              </div>
            </div> 
     

            <div>
              <div className="flex   ">

              { index >0 &&  <button className=" bg-yellow-500 text-white mr-8 w-24 p-2 rounded-lg transform hover:scale-110 motion-reduce:transform-none ..." onClick={handleBack} >
                  Back
                </button>}
               
                <button className="  bg-yellow-500 text-white w-24 p-2  rounded-lg transform hover:scale-110 motion-reduce:transform-none ..." onClick={handleNext} >
                  Next
                </button>


              </div>
            </div>
          </div>
         
        </div>
               {/* third */}
                  
        <div className="flex-1  bg-white">
          <div className="flex flex-col items-center justify-center">
            <span>
              <h1>Time Left</h1>
            </span>
            <div className="inline-flex space-x-4 space-y-8  ">
              <div className=" w-10 h-10 bg-yellow-300 rounded-full flex items-center justify-center    ">
                10
              </div>
            </div>

            <div className="bg-yellow-500 w-1 h-20"></div>

            <div className="inline-flex space-x-4 space-y-8  ">
              <div className=" w-40 h-40 bg-yellow-300 rounded-full flex items-center justify-center    ">
                <div className=" w-20 h-20 bg-white rounded-full text-black flex items-center justify-center  font-bold    ">
             
               

                <div>
             { minutes === 0 && seconds === 0
            ? null
            : <h1> {minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</h1> 
           }
          </div>
          </div>
        </div>


               </div>
            </div>
          </div>
        </div>

{/* bbbb */}

              
 
        <div className="flex   justify-between    ">
      
       

       

            </div>
          </div>
        </div>
      </div>
        </div>
  

    ) :(
          
<div className="flex justify-center items-center">
  <div
    className=" loader ease-linear  flex items-center justify-center rounded-full border-8 border-t-8 border-gray-200   h-32   w-32 ">quiz over....</div>
     <button className="  bg-yellow-500 text-white  m-4 p-2 transform hover:scale-110 motion-reduce:transform-none ..."      onClick={handleClick} >
                 view results 
                </button>

</div>
    )
}

export default QuestionData
