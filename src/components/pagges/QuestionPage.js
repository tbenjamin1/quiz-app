import React ,{useState,useEffect}from "react";

import Footer from "../UI/Footer";
import { useNavigate, Link } from "react-router-dom";
import Header from "../UI/Header";
import Feedback from "./Feedback";

import QuestionData from "../QuestionData"






const API_URL="https://opentdb.com/api.php?amount=10&categpory=14&difficulty=easy&type=multiple";

const QuestionPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Feedback");
  };
  

  // question 

  const [questions,setQuestions] =useState([""]);
  const [currentIndex,setCurrentIndex] =useState(0);
  const [score,setScore]=useState(0);
  const [chooseAnswer,setChooseAnswer]=useState(false);



  useEffect(() => {
    fetch(API_URL).then(res =>res.json())
    .then(data =>{
      console.log(data)
      setQuestions(data.results);
     
      
    })
   
  }, [])

const handleAnswer =(answer)=>{

  if(!chooseAnswer){
if (answer === questions[currentIndex].correct_answer) {
    setScore(score + 1 );
    
  }
  }

  
  setChooseAnswer(true);


// const newIndex = currentIndex + 1;
//   setCurrentIndex(newIndex);
 
  
}

const handleNext = () =>{
  setChooseAnswer(false)

  setCurrentIndex(currentIndex + 1);

}

  return  questions.length > 0 ? (
    <div className="bg-gray-100">

    {currentIndex >= questions.length ? (

      <div className=" flex items-center justify-center m-4"> 
          
            <button 
                   className="py-2 px-2 font-medium  mb-8 text-white bg-yellow-500 rounded-lg hover:bg-yellow-400 ">
                submit
              </button>
          
          </div>
  ) :  <QuestionData data={questions[currentIndex]} handleAnswer={handleAnswer}  handleNext={handleNext}/> }
    
 
      <Footer />
    </div>
  ):(
  
<div class="flex justify-center items-center">
  <div
    class=" loader ease-linear   rounded-full border-8 border-t-8 border-gray-200   h-32   w-32 ">loading ....</div>
</div>
  );
};

export default QuestionPage;
