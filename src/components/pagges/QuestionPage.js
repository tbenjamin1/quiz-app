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
  

 
  

  const [questions,setQuestions] =useState([]);
  const [currentIndex,setCurrentIndex] =useState(0);
  const [score,setScore]=useState(0);
  const [chooseAnswer,setChooseAnswer]=useState(false);
  const [passed,setPassed] = useState(0);

  const [Time,setTime] = useState(0);
 


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
// passed questions  question
  }
  if(!chooseAnswer){
if (answer != questions[currentIndex].correct_answer) {
    setPassed(passed + 1 );
    
  }
  }

  
  setChooseAnswer(true);



 
  
}

const handleNext = () =>{
  setChooseAnswer(false)

  setCurrentIndex(currentIndex + 1);

}

const handleBack =()=>{
    setChooseAnswer(false)

  setCurrentIndex(currentIndex - 1);

}




  return  questions.length > 0 ? (
    <div className="bg-gray-100">

    {currentIndex >= questions.length  ? (

      <div > 
          
           <Feedback win={passed}  data={questions}  marks={score} />
          
          </div>
              ) :  <QuestionData data={questions[currentIndex]}  handleAnswer={handleAnswer }
  
        
           handleBack={handleBack} 
        handleNext={handleNext}
   
         index={currentIndex}/> }
    
 
      <Footer />
    </div>
  ):(
  
<div className="flex justify-center items-center">
  <div
    className=" loader ease-linear  flex items-center justify-center rounded-full border-8 border-t-8 border-gray-200   h-32   w-32 ">loading ....</div>
</div>
  );
};

export default QuestionPage;
