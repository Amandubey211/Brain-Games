import React, { useContext } from "react";
import "./Styles/LeftBanner.css";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { categoryContext } from "../../Context/CategoryContextProvider";
import { QuestionContext } from "../../Context/QuestionContextProvider";
import { HomeLoadingContext } from "../../Context/HomeLoadingContextProvider";
const LeftBanner = () => {
  const { AllQuestions, SetAllQuestion } = useContext(categoryContext)
  const history = useNavigate()
  const { Questions, SetQuestions } = useContext(QuestionContext)
  const { homeloading, SetHomeLoading } = useContext(HomeLoadingContext)
  const TakeQuiz = async () => {
    SetHomeLoading(true)
    try {
      let noOfQuestions = 10;
      const { data } = await axios.get(
        `https://opentdb.com/api.php?amount=${noOfQuestions}&ype=multiple`
      );
      if (data) {

        SetQuestions(data?.results)
        SetHomeLoading(false)
        history("/quizpage")

      }
    } catch (error) {
      SetHomeLoading(false)
      toast.error("Something Went Wrong ")
    }
  };
  return (
    <div>
      <div className="homeHeading p-1 ps-4 mt-3 ">
        <h1>Welcome To,</h1>
        <h2>Brain Games</h2>
        <h4> Where <b className="vibrant fs-3">F</b>un <b className="vibrant fs-3">M</b>eets Intelligence! </h4>
        <div className="homeDescription" >
          <p>
            Challenge your mind, test your knowledge, and embark on a thrilling
            journey of quizzes designed to sharpen your wit. <b>   <b className="vibrant"> E</b>xplore various
           Categories,</b> tackle brain-teasing questions, and unleash the genius
            within you. Join us and elevate your cognitive skills while having a
            blast! Let's play, learn, and conquer together!"
          </p>
        </div>
        <div className="d-flex align-items-center gap-4 ">
          <button className="button-52" onClick={TakeQuiz} role="button">
            {" "}
            Take Quiz
          </button>
          <NavLink to="/category">
            <button className="button-52" role="button">
              {" "}
              All Categories
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
