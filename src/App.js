import React from "react";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Header from "./components/UI/Header";
import QuestionPage from "./components/pagges/QuestionPage";
import Feedback from "./components/pagges/Feedback";


function App() {
  return (
    <Router>
      <div className=" justify-center  ">
        <Header />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signUp" element={<SignUp />} />
          <Route exact path="/pagges/QuestionPage" element={<QuestionPage/>}/>
           <Route exact path="/Feedback" element={<Feedback/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

